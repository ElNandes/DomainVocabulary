import axios from 'axios';
import { Language, Domain } from '../types';

const LLAMA_API_URL = process.env.REACT_APP_LLAMA_API_URL || 'http://localhost:8000';

interface GenerateStoryParams {
  term: string;
  definition: string;
  language: string;
  domain: string;
}

// Helper function to add delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to check if service is ready
const isServiceReady = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${LLAMA_API_URL}/health`);
    return response.status === 200;
  } catch {
    return false;
  }
};

// Helper function to wait for service to be ready
const waitForService = async (maxAttempts = 12, delayMs = 5000): Promise<void> => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    console.log(`Checking if llama service is ready (attempt ${attempt}/${maxAttempts})...`);
    if (await isServiceReady()) {
      console.log('Llama service is ready!');
      return;
    }
    console.log(`Service not ready, waiting ${delayMs/1000} seconds...`);
    await delay(delayMs);
  }
  throw new Error('Llama service failed to become ready after maximum attempts');
};

export const llamaService = {
  async generateTerms(language: Language, domain: Domain): Promise<Array<{ term: string; definition: string }>> {
    try {
      console.log('Generating terms for:', { language, domain });
      
      // Wait for service to be ready
      await waitForService();
      
      const prompt = `[INST] You are a helpful assistant that generates technical terms and definitions in JSON format. Always respond with valid JSON arrays containing objects with "term" and "definition" properties.

Generate 5 technical terms related to ${domain} in ${language}.
For each term, provide a clear and concise definition.
Return ONLY a JSON array of objects with 'term' and 'definition' properties.
Example format:
[
  {
    "term": "example term",
    "definition": "clear definition of the term"
  }
] [/INST]`;

      const response = await axios.post(`${LLAMA_API_URL}/completion`, {
        prompt,
        temperature: 0.7,
        max_tokens: 1000,
        stop: ["\n\n", "###"],
      });

      // Add delay to allow LLM to process
      await delay(2000);

      // Check if we got a valid response
      if (!response.data || !response.data.content) {
        console.error('Empty response from llama service:', response.data);
        throw new Error('Received empty response from language model');
      }

      // Log the raw response for debugging
      console.log('Raw response from llama service:', response.data.content);

      try {
        // Clean up the response by removing comments and extra whitespace
        const cleanedResponse = response.data.content
          .replace(/\/\/.*$/gm, '') // Remove single-line comments
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
          .trim();

        console.log('Cleaned response:', cleanedResponse);

        // Try to parse the response as JSON
        const terms = JSON.parse(cleanedResponse);
        
        // Validate the structure
        if (!Array.isArray(terms)) {
          throw new Error('Response is not an array');
        }
        
        if (terms.length === 0) {
          throw new Error('No terms were generated');
        }

        // Validate each term
        for (const term of terms) {
          if (!term.term || !term.definition) {
            throw new Error('Invalid term structure: missing term or definition');
          }
        }

        console.log('Generated terms:', terms);
        return terms;
      } catch (error: unknown) {
        console.error('Error parsing response:', error);
        console.error('Raw response:', response.data.content);
        throw new Error('Failed to parse response from language model: ' + (error instanceof Error ? error.message : String(error)));
      }
    } catch (error) {
      console.error('Error generating terms:', error);
      if (axios.isAxiosError(error) && error.response?.status === 503) {
        throw new Error('Llama service is not ready yet. Please try again in a few moments.');
      }
      throw new Error('Failed to generate terms: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async generateStory({ term, definition, language, domain }: GenerateStoryParams): Promise<string> {
    try {
      console.log('Generating story for term:', term);
      
      // Wait for service to be ready
      await waitForService();
      
      const prompt = `[INST] Generate a short, engaging story (2-3 sentences) that uses the technical term "${term}" in a natural way. 
The story should be in ${language} and related to the domain of ${domain}.
The term "${term}" means: ${definition}
Make the story educational and memorable. [/INST]`;

      const response = await axios.post(`${LLAMA_API_URL}/completion`, {
        prompt,
        temperature: 0.7,
        max_tokens: 150,
        stop: ["\n\n", "###"],
      });

      // Add delay to allow LLM to process
      await delay(1000);

      // Log the raw response for debugging
      console.log('Raw story response:', response.data);

      if (!response.data || !response.data.content) {
        console.error('Empty story response:', response.data);
        throw new Error('Received empty response for story generation');
      }

      const story = response.data.content.trim();
      console.log('Generated story for term:', term, 'Story:', story);
      return story;
    } catch (error) {
      console.error('Error generating story:', error);
      if (axios.isAxiosError(error) && error.response?.status === 503) {
        throw new Error('Llama service is not ready yet. Please try again in a few moments.');
      }
      throw new Error('Failed to generate story: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async generateStoriesForTerms(terms: Array<{ term: string; definition: string }>, language: string, domain: string): Promise<Map<string, string>> {
    console.log('Generating stories for terms:', terms.length);
    const stories = new Map<string, string>();
    
    // Wait for service to be ready before starting
    await waitForService();
    
    for (const term of terms) {
      try {
        const story = await this.generateStory({
          term: term.term,
          definition: term.definition,
          language,
          domain,
        });
        stories.set(term.term, story);
        
        // Add delay between story generations
        await delay(1000);
      } catch (error) {
        console.error(`Failed to generate story for term ${term.term}:`, error);
        stories.set(term.term, ''); // Set empty string for failed generations
      }
    }

    console.log('Completed generating all stories:', Object.fromEntries(stories));
    return stories;
  }
}; 