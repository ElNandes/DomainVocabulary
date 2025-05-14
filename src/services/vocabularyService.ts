import { supabase } from '../lib/supabase';
import type { VocabularyList, VocabularyTerm } from '../lib/supabase';
import type { GenerateParams, Language, Level, Domain } from '../types';
import { llamaService } from './llamaService';

export const vocabularyService = {
  // Create a new vocabulary list
  async createVocabularyList(params: GenerateParams): Promise<VocabularyList> {
    const { data: list, error } = await supabase
      .from('vocabulary_lists')
      .insert({
        language: params.language,
        level: params.level,
        domain: params.domain,
      })
      .select()
      .single();

    if (error) throw error;
    return list;
  },

  // Add terms to a vocabulary list
  async addTerms(
    listId: string, 
    terms: Omit<VocabularyTerm, 'id' | 'list_id' | 'created_at'>[],
    language: Language,
    domain: Domain
  ): Promise<VocabularyTerm[]> {
    // Generate stories for all terms
    const stories = await llamaService.generateStoriesForTerms(
      terms.map(term => ({ term: term.term, definition: term.definition })),
      language,
      domain
    );

    // Add stories to terms
    const termsWithStories = terms.map(term => ({
      ...term,
      list_id: listId,
      story: stories.get(term.term) || '',
    }));

    const { data, error } = await supabase
      .from('vocabulary_terms')
      .insert(termsWithStories)
      .select();

    if (error) throw error;
    return data;
  },

  // Get a vocabulary list with its terms
  async getVocabularyList(listId: string): Promise<{ list: VocabularyList; terms: VocabularyTerm[] }> {
    const { data: list, error: listError } = await supabase
      .from('vocabulary_lists')
      .select()
      .eq('id', listId)
      .single();

    if (listError) throw listError;

    const { data: terms, error: termsError } = await supabase
      .from('vocabulary_terms')
      .select()
      .eq('list_id', listId);

    if (termsError) throw termsError;

    return { list, terms };
  },

  // Update a term's learned status
  async updateTermLearned(termId: string, learned: boolean): Promise<VocabularyTerm> {
    const { data, error } = await supabase
      .from('vocabulary_terms')
      .update({ learned })
      .eq('id', termId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update a term's review later status
  async updateTermReviewLater(termId: string, reviewLater: boolean): Promise<VocabularyTerm> {
    const { data, error } = await supabase
      .from('vocabulary_terms')
      .update({ review_later: reviewLater })
      .eq('id', termId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Get all vocabulary lists
  async getAllLists(): Promise<VocabularyList[]> {
    const { data, error } = await supabase
      .from('vocabulary_lists')
      .select()
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get terms by language and domain
  async getTermsByLanguageAndDomain(language: Language, domain: Domain, level: Level): Promise<VocabularyTerm[]> {
    try {
      console.log('Getting terms for:', { language, domain, level });
      
      // Get or create a vocabulary list
      const { data: lists, error: listError } = await supabase
        .from('vocabulary_lists')
        .select('*')
        .eq('language', language)
        .eq('domain', domain)
        .eq('level', level)
        .order('created_at', { ascending: false })
        .limit(1);

      if (listError) {
        console.error('Error fetching vocabulary list:', listError);
        throw new Error('Failed to fetch vocabulary list');
      }

      let listId: string;
      if (!lists || lists.length === 0) {
        console.log('No existing list found, creating new list...');
        const { data: newList, error: createError } = await supabase
          .from('vocabulary_lists')
          .insert([{
            language,
            domain,
            level,
            term_count: 20
          }])
          .select()
          .single();

        if (createError) {
          console.error('Error creating vocabulary list:', createError);
          throw new Error('Failed to create vocabulary list');
        }

        listId = newList.id;
        console.log('Created new vocabulary list:', listId);
      } else {
        listId = lists[0].id;
        console.log('Using existing vocabulary list:', listId);
      }

      // Check for existing terms
      const { data: terms, error: termsError } = await supabase
        .from('vocabulary_terms')
        .select('*')
        .eq('list_id', listId)
        .order('created_at', { ascending: true });

      if (termsError) {
        console.error('Error fetching terms:', termsError);
        throw new Error('Failed to fetch terms');
      }

      if (!terms || terms.length === 0) {
        console.log('No terms found, generating new terms...');
        try {
          // Generate new terms
          const newTerms = await llamaService.generateTerms(language, domain);
          console.log('Generated new terms:', newTerms);

          // Generate stories for the new terms first
          console.log('Generating stories for new terms...');
          const stories = await llamaService.generateStoriesForTerms(newTerms, language, domain);
          
          // Insert terms with stories
          const { error: insertError } = await supabase
            .from('vocabulary_terms')
            .insert(newTerms.map(term => ({
              list_id: listId,
              term: term.term,
              definition: term.definition,
              story: stories.get(term.term) || '',
              learned: false,
              review_later: false
            })))
            .select('id, list_id, term, definition, story, learned, review_later');

          if (insertError) {
            console.error('Error inserting terms:', insertError);
            throw new Error('Failed to insert terms');
          }

          // Fetch the complete terms
          const { data: updatedTerms, error: fetchError } = await supabase
            .from('vocabulary_terms')
            .select('*')
            .eq('list_id', listId)
            .order('created_at', { ascending: true });

          if (fetchError) {
            console.error('Error fetching updated terms:', fetchError);
            throw new Error('Failed to fetch updated terms');
          }

          console.log('Fetched terms with stories:', updatedTerms?.map(t => ({
            term: t.term,
            story: t.story
          })));

          return updatedTerms || [];
        } catch (error) {
          console.error('Error in term generation process:', error);
          if (error instanceof Error && error.message.includes('not ready yet')) {
            throw new Error('The language model is still initializing. Please try again in a few moments.');
          }
          throw new Error('Failed to generate terms: ' + (error instanceof Error ? error.message : String(error)));
        }
      }

      // Check if any terms are missing stories
      const termsWithoutStories = terms.filter(term => !term.story);
      if (termsWithoutStories.length > 0) {
        console.log(`Found ${termsWithoutStories.length} terms without stories, generating...`);
        try {
          const stories = await llamaService.generateStoriesForTerms(
            termsWithoutStories.map(t => ({ term: t.term, definition: t.definition })),
            language,
            domain
          );

          // Update terms with stories
          for (const [term, story] of stories.entries()) {
            const { error: updateError } = await supabase
              .from('vocabulary_terms')
              .update({ story })
              .eq('list_id', listId)
              .eq('term', term);

            if (updateError) {
              console.error(`Error updating story for term ${term}:`, updateError);
            }
          }

          // Fetch the complete terms again
          const { data: updatedTerms, error: fetchError } = await supabase
            .from('vocabulary_terms')
            .select('*')
            .eq('list_id', listId)
            .order('created_at', { ascending: true });

          if (fetchError) {
            console.error('Error fetching updated terms:', fetchError);
            throw new Error('Failed to fetch updated terms');
          }

          return updatedTerms || [];
        } catch (error) {
          console.error('Error generating stories:', error);
          // Return terms without stories rather than failing completely
          return terms;
        }
      }

      return terms;
    } catch (error) {
      console.error('Error in getTermsByLanguageAndDomain:', error);
      throw new Error('Failed to get terms: ' + (error instanceof Error ? error.message : String(error)));
    }
  }
}; 