
import React, { useState } from 'react';

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHighContrast = () => {
    document.documentElement.classList.toggle('invert');
  };

  const adjustFontSize = (delta: number) => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${currentSize + delta}px`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-2xl rounded-xl p-4 w-64 border border-gray-100 flex flex-col space-y-4 animate-fade-in-up">
          <h5 className="font-bold text-gray-800 text-sm uppercase border-b pb-2">Accessibility Options</h5>
          <button 
            onClick={toggleHighContrast}
            aria-label="Ndrysho kontrastin e lartë"
            className="flex items-center justify-between text-left text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 p-3 rounded-lg"
          >
            <span>High Contrast</span>
            <div className="w-8 h-4 bg-gray-300 rounded-full relative">
              <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </button>
          <div className="flex space-x-2">
            <button 
              onClick={() => adjustFontSize(1)}
              aria-label="Rrit madhësinë e shkronjave"
              className="flex-1 bg-gray-50 hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-700"
            >
              A+
            </button>
            <button 
              onClick={() => adjustFontSize(-1)}
              aria-label="Zvogëlo madhësinë e shkronjave"
              className="flex-1 bg-gray-50 hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-700"
            >
              A-
            </button>
          </div>
          <button 
            onClick={() => {
              document.documentElement.style.fontSize = '16px';
              document.documentElement.classList.remove('invert');
            }}
            className="text-xs text-blue-600 font-bold uppercase text-center"
          >
            Reset Settings
          </button>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
        aria-label="Accessibility Menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </button>
    </div>
  );
};

export default AccessibilityWidget;
