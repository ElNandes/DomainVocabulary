import React, { useState } from 'react';
import { VocabularyTerm } from '../types';
import { ChevronDown, ChevronUp, Check, BookmarkPlus, BookmarkCheck, X } from 'lucide-react';

interface VocabularyCardProps {
  term: VocabularyTerm;
  onUpdate: (updates: Partial<VocabularyTerm>) => void;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ term, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const toggleLearned = () => {
    onUpdate({ learned: !term.learned });
  };
  
  const toggleReviewLater = () => {
    onUpdate({ reviewLater: !term.reviewLater });
  };
  
  return (
    <div className="flex justify-center py-4">
      <div
        className={`aspect-[9/16] w-full max-w-[560px] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 ${term.learned ? 'bg-green-50' : 'bg-white'}`}
      >
        {/* Card header */}
        <div 
          className={`p-4 flex justify-between items-center cursor-pointer group ${expanded ? 'border-b border-gray-100' : ''}`}
          onClick={toggleExpanded}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-medium ${term.learned ? 'text-green-700' : 'text-gray-900'}`}>{term.term}</h3>
              {term.learned && (
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  <Check size={12} className="mr-0.5" />
                  Learned
                </span>
              )}
              {term.reviewLater && (
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                  <BookmarkCheck size={12} className="mr-0.5" />
                  Review
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{term.definition}</p>
          </div>
          
          <div className="flex items-center gap-1 ml-4">
            <button 
              onClick={(e) => { e.stopPropagation(); toggleLearned(); }}
              className={`p-2 rounded-full transition-colors ${
                term.learned 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
              title={term.learned ? "Mark as not learned" : "Mark as learned"}
            >
              {term.learned ? <X size={18} /> : <Check size={18} />}
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); toggleReviewLater(); }}
              className={`p-2 rounded-full transition-colors ${
                term.reviewLater 
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
              title={term.reviewLater ? "Remove from review" : "Mark for review"}
            >
              {term.reviewLater ? <BookmarkCheck size={18} /> : <BookmarkPlus size={18} />}
            </button>
            
            <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 group-hover:bg-gray-200">
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>
        
        {/* Expanded content with story */}
        {expanded && (
          <div className="p-4 text-gray-700 bg-gray-50 animate-fadeIn flex-1 overflow-y-auto">
            <h4 className="font-medium text-gray-900 mb-2">Contextual Story:</h4>
            <p className="leading-relaxed whitespace-pre-line">{term.story}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabularyCard;