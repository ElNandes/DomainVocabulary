import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Vocabulary Builder</h1>
              <p className="text-sm text-white/80">Expand your technical vocabulary</p>
            </div>
          </div>
          
          <div className="hidden sm:block">
            <div className="flex space-x-1">
              <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-sm font-medium transition-colors">
                My Lists
              </button>
              <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-sm font-medium transition-colors">
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;