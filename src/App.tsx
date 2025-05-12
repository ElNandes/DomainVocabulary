import React, { useState } from 'react';
import Header from './components/Header';
import VocabularyForm from './components/VocabularyForm';
import VocabularyList from './components/VocabularyList';
import EmptyState from './components/EmptyState';
import { VocabularyList as VocabularyListType, VocabularyTerm, GenerateParams } from './types';
import { generateVocabularyList } from './services/mockService';
import { Loader2 } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [vocabularyList, setVocabularyList] = useState<VocabularyListType | null>(null);
  
  // Handle generating a new vocabulary list
  const handleGenerateList = async (params: GenerateParams) => {
    setIsLoading(true);
    try {
      const list = await generateVocabularyList(params);
      setVocabularyList(list);
    } catch (error) {
      console.error('Error generating vocabulary list:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle updating a term (marking as learned or for review)
  const handleUpdateTerm = (id: string, updates: Partial<VocabularyTerm>) => {
    if (!vocabularyList) return;
    
    setVocabularyList({
      ...vocabularyList,
      terms: vocabularyList.terms.map(term => 
        term.id === id ? { ...term, ...updates } : term
      )
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: Form */}
          <div className="md:col-span-1">
            <VocabularyForm onGenerate={handleGenerateList} isLoading={isLoading} />
          </div>
          
          {/* Right column: List */}
          <div className="md:col-span-2">
            {isLoading ? (
              <div className="bg-white rounded-lg shadow-md p-12 flex flex-col items-center justify-center">
                <Loader2 size={48} className="text-blue-600 animate-spin mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-1">Generating vocabulary list</h3>
                <p className="text-gray-500">
                  Our AI is creating personalized vocabulary terms and stories for you...
                </p>
              </div>
            ) : vocabularyList ? (
              <VocabularyList 
                terms={vocabularyList.terms}
                language={vocabularyList.language}
                level={vocabularyList.level}
                domain={vocabularyList.domain}
                onUpdateTerm={handleUpdateTerm}
              />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2025 Vocabulary Domain Builder. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;