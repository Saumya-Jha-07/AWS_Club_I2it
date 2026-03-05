import { useState } from 'react';

export default function FAQAccordion({ question, answer, isOpenByDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden mb-4 bg-[#162638] transition-colors hover:border-gray-600">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 text-[#FF9900] ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
          isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-400 prose prose-invert">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
