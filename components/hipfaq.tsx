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

const Hipfaqcomponent: React.FC<FAQComponentProps> = ({ 
  faqs = [
    {
      id: 1,
      question: "Can Ayurveda reverse Hip AVN?",
      answer: "In early-to-mid stages (I & II), Ayurveda can improve blood circulation and restore joint function, potentially avoiding surgery."
    },
    {
      id: 2,
      question: "What is the recovery time for Hip AVN with Ayurveda?",
      answer: "You may see improvement in pain and mobility within 4–6 weeks with continued therapy."
    },
    {
      id: 3,
      question: "Is hospitalization required?",
      answer: "Yes, 10–15 days of inpatient Panchakarma may be recommended depending on severity."
    },
    {
      id: 4,
      question: "Will insurance cover Hip AVN Ayurvedic treatment?",
      answer: "Yes. We offer cashless Ayurvedic treatments under several insurance policies."
    },
    {
      id: 5,
      question: "Can Ayurveda help after viral fever-related hip pain?",
      answer: "Absolutely. Post-viral arthritis responds very well to Ayurvedic detox and anti-inflammatory treatments."
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
      
      <div className="w-full px-4 sm:px-6 max-[470px]:py-5 lg:px-8 max-w-7xl mx-auto py-10 lg:py-10" style={{fontFamily: "'Outfit', sans-serif" }}>
        {/* Header */}
        <div className="text-center mb-10 max-[470px]:mb-5 sm:mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-2 h-2 bg-[#f05623] rounded-full mr-1"></div>
            <div className="w-1.5 h-1.5 bg-[#88be22] rounded-full mr-1"></div>
            <div className="w-1 h-1 bg-[#114520] rounded-full"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] mb-4">
            Your Hip Health <span className="text-[#f05623]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Get clarity on Hip AVN treatment, recovery, and our proven Ayurvedic approach
          </p>
        </div>

        {/* FAQ Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#88be22]/20 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-white/30 transition-all duration-200 gap-4 sm:gap-6 group"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0">
                    {/* Icon Container with Gradient */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#114520] to-[#88be22] rounded-xl flex items-center justify-center group-hover:from-[#f05623] group-hover:to-[#ff7c4d] transition-all duration-300 shadow-md">
                      <span className="text-white font-bold text-lg">
                        0{faq.id}
                      </span>
                    </div>
                    
                    {/* Question Text */}
                    <div className="text-left flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight group-hover:text-[#114520] transition-colors duration-200">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Animated Plus/Minus Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-br from-[#f05623] to-[#ff7c4d] border-transparent' 
                        : 'bg-white border-[#88be22] group-hover:bg-[#88be22] group-hover:border-[#114520]'
                    }`}>
                      <svg
                        className={`w-4 h-4 transition-all duration-300 ${
                          activeIndex === index ? 'text-white rotate-45' : 'text-[#88be22] group-hover:text-white'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
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
                  <div className="px-6 sm:px-8 pb-6">
                    <div className="flex space-x-4">
                      {/* Answer Container */}
                      <div className="flex-1">
                        <div className="bg-gradient-to-br from-[#f8faf7] to-[#f0f8ec] rounded-xl p-5 border-l-3 border-[#f05623]">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-1.5 h-full bg-gradient-to-b from-[#88be22] to-[#f05623] rounded-full mt-1"></div>
                            <p className="text-base text-gray-700 leading-relaxed font-medium flex-1">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                        
                        {/* Decorative Footer */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#f05623] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#88be22] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#114520] rounded-full"></div>
                            <span className="text-xs text-gray-500 font-medium ml-1">AVN Hip Care Specialist</span>
                          </div>
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

export default Hipfaqcomponent;