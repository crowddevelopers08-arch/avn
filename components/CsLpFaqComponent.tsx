"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  faqs?: FAQItem[];
}

const CsLpFaqComponent: React.FC<FAQComponentProps> = ({
  faqs = [
    {
      id: 1,
      question: "What is Cervical Spondylosis?",
      answer:
        "Age-related wear and tear of neck discs. In Ayurveda, it's linked to Vata imbalance causing stiffness and radiating pain.",
    },
    {
      id: 2,
      question: "Can it be treated without surgery?",
      answer:
        "Yes. Holistic Ayurvedic treatments focus on reducing inflammation, relaxing muscles, and strengthening the spine.",
    },
    {
      id: 3,
      question: "How long does treatment take?",
      answer:
        "Mild: Improves with medicines & exercises\nSevere: 10-21 days in-patient care\nRecovery: Noticeable relief in 45 days; major recovery in 2-4 months",
    },
    {
      id: 4,
      question: "Is MRI required?",
      answer:
        "Yes. It helps assess disc condition and plan the right treatment.",
    },
    {
      id: 5,
      question: "What are the main causes?",
      answer:
        "Aging, poor posture, long screen time, minor injuries, obesity, and stress.",
    },
    {
      id: 6,
      question: "What if untreated?",
      answer:
        "May lead to spinal cord compression causing walking issues, numbness, or loss of control in severe cases.",
    },
    {
      id: 7,
      question: "Is insurance applicable?",
      answer:
        "Coverage varies; our team assists with TPA and insurance documentation.",
    },
    {
      id: 8,
      question: "Who provides treatment?",
      answer:
        "Dr. Ramesh Varier and his team of Ayurvedic and Physiotherapy specialists.",
    },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftFAQs = faqs.slice(0, 4);
  const rightFAQs = faqs.slice(4, 8);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 max-[470px]:py-5 bg-[linear-gradient(180deg,#fff9f3_0%,#f5fbf2_100%)]">
      <div className="flex justify-center">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#114520] sm:text-3xl lg:text-4xl xl:text-[42px] max-[470px]:mb-5">
          Frequently Asked <span className="text-[#f05623]">Questions</span>
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-8">
        <div className="max-w-2xl flex-1 space-y-3 sm:space-y-4 lg:min-w-0">
          {leftFAQs.map((faq, index) => (
            <CsLpFaqItem
              key={faq.id}
              faq={faq}
              index={index}
              activeIndex={activeIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>

        <div className="max-w-2xl flex-1 space-y-3 sm:space-y-4 lg:min-w-0">
          {rightFAQs.map((faq, index) => (
            <CsLpFaqItem
              key={faq.id}
              faq={faq}
              index={index + 4}
              activeIndex={activeIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CsLpFaqItem: React.FC<{
  faq: FAQItem;
  index: number;
  activeIndex: number | null;
  toggleFAQ: (index: number) => void;
}> = ({ faq, index, activeIndex, toggleFAQ }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-[#f05623]/30 hover:shadow-lg">
      <button
        onClick={() => toggleFAQ(index)}
        className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-200 hover:bg-gray-50/80 sm:gap-6 sm:px-7 sm:py-5"
      >
        <div className="flex min-w-0 flex-1 items-center space-x-4 sm:space-x-5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#114520] to-[#88be22] shadow-sm transition-all duration-300 group-hover:scale-110">
            <span className="text-base font-bold text-white">{faq.id}</span>
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-base font-semibold leading-tight text-gray-800 transition-colors duration-200 group-hover:text-[#114520] sm:text-lg">
              {faq.question}
            </h3>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ${
              activeIndex === index
                ? "rotate-180 bg-[#f05623] text-white"
                : "bg-gray-100 text-[#114520] group-hover:bg-[#114520] group-hover:text-white"
            }`}
          >
            <svg className="h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          activeIndex === index ? "max-h-64 opacity-100 sm:max-h-48" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 sm:px-7">
          <div className="rounded-lg border border-[#88be22]/20 bg-gradient-to-r from-[#f8faf7] to-[#f0f8ec] p-4">
            <div className="flex items-start">
              <div className="mr-3 mt-1 h-full w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-[#f05623] to-[#88be22]" />
              <p className="flex-1 whitespace-pre-line text-sm font-medium leading-relaxed text-gray-700">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsLpFaqComponent;
