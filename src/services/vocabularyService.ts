import { supabase } from '../lib/supabase';
import type { VocabularyList, VocabularyTerm } from '../lib/supabase';
import type { GenerateParams } from '../types';

export const vocabularyService = {
  // Create a new vocabulary list
  async createVocabularyList(params: GenerateParams): Promise<VocabularyList> {
    const { data: list, error } = await supabase
      .from('vocabulary_lists')
      .insert({
        language: params.language,
        level: params.level,
        domain: params.domain,
        source_url: params.sourceUrl || null,
      })
      .select()
      .single();

    if (error) throw error;
    return list;
  },

  // Add terms to a vocabulary list
  async addTerms(listId: string, terms: Omit<VocabularyTerm, 'id' | 'list_id' | 'created_at'>[]): Promise<VocabularyTerm[]> {
    const termsWithListId = terms.map(term => ({
      ...term,
      list_id: listId,
    }));

    const { data, error } = await supabase
      .from('vocabulary_terms')
      .insert(termsWithListId)
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
  async getTermsByLanguageAndDomain(language: string, domain: string): Promise<VocabularyTerm[]> {
    console.log('Fetching terms for:', { language, domain });
    
    // First, get all lists for this language and domain
    const { data: lists, error: listsError } = await supabase
      .from('vocabulary_lists')
      .select('id')
      .eq('language', language)
      .eq('domain', domain);

    if (listsError) {
      console.error('Error fetching lists:', listsError);
      throw listsError;
    }

    if (!lists || lists.length === 0) {
      console.warn('No lists found for:', { language, domain });
      return [];
    }

    // Get the most recent list
    const list = lists[0];
    console.log('Found list:', list);

    // Get terms for this list
    const { data: terms, error: termsError } = await supabase
      .from('vocabulary_terms')
      .select('*')
      .eq('list_id', list.id);

    if (termsError) {
      console.error('Error fetching terms:', termsError);
      throw termsError;
    }

    console.log('Found terms:', terms);
    return terms || [];
  }
}; 