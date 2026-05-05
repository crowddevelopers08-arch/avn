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

const Neckfaqcomponent: React.FC<FAQComponentProps> = ({ 
  faqs = [
    {
      id: 1,
      question: "Can Ayurveda treat frozen shoulder or cervical spondylosis completely?",
      answer: "Yes. Our treatments aim to relieve inflammation, restore joint mobility, and strengthen surrounding structures for long-term relief."
    },
    {
      id: 2,
      question: "Will I need to stay at the hospital?",
      answer: "Short stays are advised for certain shoulder and neck cases, while others can be managed through outpatient visits or teleconsultation guidance."
    },
    {
      id: 3,
      question: "How soon will I feel relief?",
      answer: "Most patients report noticeable improvements within 2–3 weeks of therapy."
    },
    {
      id: 4,
      question: "Are the treatments painful or invasive?",
      answer: "Not at all. AVN Arogya's treatments are non-invasive and based on natural therapies, massage, internal medicines, and yoga."
    },
    {
      id: 5,
      question: "Will insurance cover my treatment?",
      answer: "Yes. Most shoulder and cervical inpatient treatments are eligible for cashless insurance coverage under our TPA network."
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
      
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 lg:py-10" style={{fontFamily: "'Outfit', sans-serif" }}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] mb-4">
            Frequently Asked <span className="text-[#f05623]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Get answers to common questions about our neck and shoulder treatments
          </p>
        </div>

        {/* FAQ Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-6 sm:py-7 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 gap-4 sm:gap-6 group"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 bg-[#114520] rounded-xl flex items-center justify-center group-hover:bg-[#f05623] transition-all duration-300 shadow-md">
                      <span className="text-white font-bold text-lg">
                        {faq.id}
                      </span>
                    </div>
                    
                    {/* Question Text */}
                    <div className="text-left flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed group-hover:text-[#114520] transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Animated Chevron */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full border-2 border-[#80c141] flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index 
                        ? 'bg-[#80c141] rotate-180' 
                        : 'bg-white group-hover:bg-[#80c141] group-hover:border-[#114520]'
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-all duration-300 ${
                          activeIndex === index ? 'text-white' : 'text-[#80c141] group-hover:text-white'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
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
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="flex space-x-4 sm:space-x-6">
                 
                      
                      {/* Answer Text */}
                      <div className="flex-1">
                        <div className="bg-[#f8faf7] rounded-xl p-5 border-l-4 border-[#80c141]">
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                        
                        {/* Decorative Element */}
                        <div className="flex items-center mt-4 space-x-2">
                          <div className="w-3 h-3 bg-[#80c141] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#f05623] rounded-full"></div>
                          <div className="w-1 h-1 bg-[#114520] rounded-full"></div>
                          <span className="text-sm text-gray-500 ml-2">AVN Arogya Ayurvedic Hospital</span>
                        </div>
                      </div>
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

export default Neckfaqcomponent;