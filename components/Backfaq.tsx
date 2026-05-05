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

const Backfaqcomponent: React.FC<FAQComponentProps> = ({ 
  faqs = [
    {
      id: 1,
      question: "Can Ayurveda fully treat spine conditions like spondylosis or disc bulge?",
      answer: "Yes. With dedicated protocols, Ayurveda can address the root cause, reduce inflammation, restore disc health, and improve mobility."
    },
    {
      id: 2,
      question: "How long will the treatment take?",
      answer: "Treatment duration varies by condition but typically ranges from 3 to 6 weeks for visible improvement."
    },
    {
      id: 3,
      question: "Will I need to stay at the hospital?",
      answer: "In many cases, outpatient care is sufficient. Inpatient care is suggested for moderate to severe or chronic cases."
    },
    {
      id: 4,
      question: "Is the treatment painful?",
      answer: "No. All therapies are non-invasive and based on natural procedures including massage, steam, internal medicines, and physiotherapy."
    },
    {
      id: 5,
      question: "Will insurance cover my treatment?",
      answer: "Yes, AVN is tied up with 20+ insurance and TPA networks. Most inpatient spine treatments are eligible under cashless schemes."
    }
  ]
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
       <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 lg:py-6" style={{fontFamily: "'Outfit', sans-serif" }}>
      {/* Header */}
        <div className="flex justify-center">
           <h2 className="text-2xl text-center sm:text-4xl lg:text-5xl font-bold text-[#114520] max-[470px]:mb-5 mb-10">
            Frequently Asked <span className="text-[#f05623]">Questions</span>
          </h2>
          </div>

      {/* FAQ Container with 800px max-width on larger screens */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl lg:max-w-[800px] space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-start sm:items-center hover:bg-gray-50 transition-all duration-300 gap-4 sm:gap-6"
              >
                <div className="flex items-start space-x-4 sm:space-x-6 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#114520] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {faq.id}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 pr-2 sm:pr-8 break-words flex-1 leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Animated Chevron */}
                <div className="flex-shrink-0 mt-1 sm:mt-0">
                  <svg
                    className={`w-6 h-6 sm:w-7 sm:h-7 text-[#114520] transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="flex space-x-4 sm:space-x-6">
                    <div className="flex-shrink-0 w-8 sm:w-10">
                      <div className="w-1 h-full bg-[#114520] rounded-full mx-auto"></div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-1 sm:pt-2 break-words">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </>
  );
};

export default Backfaqcomponent;