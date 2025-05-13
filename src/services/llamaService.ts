import axios from 'axios';

const LLAMA_API_URL = process.env.REACT_APP_LLAMA_API_URL || 'http://localhost:8000';

interface GenerateStoryParams {
  term: string;
  definition: string;
  language: string;
  domain: string;
}

export const llamaService = {
  async generateStory({ term, definition, language, domain }: GenerateStoryParams): Promise<string> {
    try {
      const prompt = `Generate a short, engaging story (2-3 sentences) that uses the technical term "${term}" in a natural way. 
      The story should be in ${language} and related to the domain of ${domain}.
      The term "${term}" means: ${definition}
      Make the story educational and memorable.`;

      const response = await axios.post(`${LLAMA_API_URL}/completion`, {
        prompt,
        temperature: 0.7,
        max_tokens: 150,
        stop: ["\n\n", "###"],
      });

      return response.data.content.trim();
    } catch (error) {
      console.error('Error generating story:', error);
      throw new Error('Failed to generate story');
    }
  },

  async generateStoriesForTerms(terms: Array<{ term: string; definition: string }>, language: string, domain: string): Promise<Map<string, string>> {
    const stories = new Map<string, string>();
    
    for (const term of terms) {
      try {
        const story = await this.generateStory({
          term: term.term,
          definition: term.definition,
          language,
          domain,
        });
        stories.set(term.term, story);
      } catch (error) {
        console.error(`Failed to generate story for term ${term.term}:`, error);
        stories.set(term.term, ''); // Set empty string for failed generations
      }
    }

    return stories;
  }
}; 