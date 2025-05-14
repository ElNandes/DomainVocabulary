/**
 * Core type definitions for the Vocabulary Domain Builder application
 */

// Language options
export type Language = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt';

// CEFR proficiency levels
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// Domain options can be extended
export type Domain = 
  | 'Web Development' 
  | 'Artificial Intelligence' 
  | 'Cybersecurity' 
  | 'Cloud Computing'
  | 'Data Science'
  | 'Mobile Development'
  | 'DevOps'
  | 'Blockchain'
  | string;

// Core vocabulary term structure
export interface VocabularyTerm {
  id: string;
  term: string;
  definition: string;
  story: string;
  learned: boolean;
  reviewLater: boolean;
}

// Full vocabulary list with metadata
export interface VocabularyList {
  id: string;
  language: Language;
  level: Level;
  domain: Domain;
  createdAt: Date;
  terms: VocabularyTerm[];
}

// Parameters for generating a new vocabulary list
export interface GenerateParams {
  language: Language;
  level: Level;
  domain: Domain;
  count: number;
  sourceUrl?: string; // Optional URL for user-defined source
}