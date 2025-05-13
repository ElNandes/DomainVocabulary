import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Present' : 'Missing');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:');
  console.error('- VITE_SUPABASE_URL:', supabaseUrl ? 'Present' : 'Missing');
  console.error('- VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Present' : 'Missing');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Types for our database tables
export type VocabularyList = {
  id: string;
  language: string;
  level: string;
  domain: string;
  created_at: string;
};

export type VocabularyTerm = {
  id: string;
  list_id: string;
  term: string;
  definition: string;
  story: string | null;
  learned: boolean;
  review_later: boolean;
  created_at: string;
  language: string;
  domain: string;
}; 