"use client";
import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  faqs?: FAQItem[];
}

const Avnfaqcomponent: React.FC<FAQComponentProps> = ({ 
  faqs = [
    {
      id: 1,
      question: "What exactly is AVN?",
      answer: "Avascular Necrosis (AVN) is bone tissue death caused by poor blood supply, most commonly in the hip joint."
    },
    {
      id: 2,
      question: "Can AVN be reversed without surgery?",
      answer: "Yes — in Stages 1 and 2, AVN can be reversed with Panchakarma + Physiotherapy."
    },
    {
      id: 3,
      question: "How long does the treatment take?",
      answer: "Our integrated program lasts about 3 weeks, depending on the stage."
    },
    {
      id: 4,
      question: "Is MRI necessary?",
      answer: "Yes. Early AVN is often missed on X-rays; MRI is the only accurate diagnostic tool."
    },
    {
      id: 5,
      question: "What are the major causes of AVN?",
      answer: "COVID-suffered patients, long-term steroid use, alcohol consumption, smoking, and high cholesterol."
    },
    {
      id: 6,
      question: "What happens if AVN is ignored?",
      answer: "It progresses to bone collapse and eventually requires hip replacement."
    },
    {
      id: 7,
      question: "Is insurance applicable?",
      answer: "Coverage varies; our team assists with TPA and insurance documentation."
    },
    {
      id: 8,
      question: "Who leads the treatment?",
      answer: "Dr. Ramesh Varier and his team of Ayurvedic and Physiotherapy specialists."
    }
  ]
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into left and right columns
  const leftFAQs = faqs.slice(0, 4);
  const rightFAQs = faqs.slice(4, 8);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <div className="w-full px-4 sm:px-6 max-[470px]:py-5 lg:px-8 max-w-7xl mx-auto py-10 lg:py-10" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="flex justify-center">
          <h2 className="text-2xl text-center sm:text-4xl lg:text-5xl font-bold text-[#114520] max-[470px]:mb-5 mb-10">
            Frequently Asked <span className="text-[#f05623]">Questions</span>
          </h2>
        </div>

        {/* FAQ Container - Flex layout for larger screens */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl space-y-3 sm:space-y-4">
            {leftFAQs.map((faq, index) => (
              <FAQItem 
                key={faq.id}
                faq={faq}
                index={index}
                activeIndex={activeIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 max-w-2xl space-y-3 sm:space-y-4">
            {rightFAQs.map((faq, index) => (
              <FAQItem 
                key={faq.id}
                faq={faq}
                index={index + 4} // Add offset for right column indices
                activeIndex={activeIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Separate component for FAQ item for better organization
const FAQItem: React.FC<{
  faq: FAQItem;
  index: number;
  activeIndex: number | null;
  toggleFAQ: (index: number) => void;
}> = ({ faq, index, activeIndex, toggleFAQ }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#f05623]/30 overflow-hidden">
      {/* Question */}
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-5 sm:px-7 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50/80 transition-all duration-200 gap-4 sm:gap-6 group"
      >
        <div className="flex items-center space-x-4 sm:space-x-5 flex-1 min-w-0">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#114520] to-[#88be22] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
            <span className="text-white font-bold text-base">
              {faq.id}
            </span>
          </div>
          
          {/* Question Text */}
          <div className="text-left flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight group-hover:text-[#114520] transition-colors duration-200">
              {faq.question}
            </h3>
          </div>
        </div>
        
        {/* Animated Chevron Icon */}
        <div className="flex-shrink-0">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            activeIndex === index 
              ? 'bg-[#f05623] text-white rotate-180' 
              : 'bg-gray-100 text-[#114520] group-hover:bg-[#114520] group-hover:text-white'
          }`}>
            <svg
              className="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeIndex === index 
            ? 'max-h-48 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 sm:px-7 pb-5">
          <div className="flex space-x-4">
            {/* Answer Container */}
            <div className="flex-1">
              <div className="bg-gradient-to-r from-[#f8faf7] to-[#f0f8ec] rounded-lg p-4 border border-[#88be22]/20">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-[#f05623] to-[#88be22] rounded-full mr-3 mt-1"></div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium flex-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avnfaqcomponent;