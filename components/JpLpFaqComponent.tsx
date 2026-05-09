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

const JpLpFaqComponent: React.FC<FAQComponentProps> = ({
  faqs = [
    {
      id: 1,
      question: "Will joint pain cause any permanent disability in the future?",
      answer:
        "While some cases of joint pain may resolve with appropriate treatment and lifestyle modifications, others, especially those related to chronic conditions like arthritis, may lead to ongoing discomfort and functional limitations. Early intervention, proper management, and adherence to recommended therapies can help minimize the risk of long-term disability associated with joint pain.",
    },
    {
      id: 2,
      question: "Do you treat Joint Pain conditions with medicines only, or are any other methods used?",
      answer:
        "In Ayurveda, when treating joint pain, we don't just rely on medicines. We understand the root cause of the issue and look at balancing the body, reducing inflammation, and boosting overall well-being. Along with herbal remedies, Ayurvedic interventions may include dietary adjustments, lifestyle modifications, external therapies like massages or poultices, and practices such as yoga, panchakarma, and meditation.",
    },
    {
      id: 3,
      question: "Is it mandatory to take in-treatment at your hospital? Can't I get relief with your medicine only?",
      answer:
        "The decision of whether to undergo in-house treatment at an Ayurvedic hospital depends on several factors, including the severity of the condition, the individual's overall health, and the recommendations of the Ayurvedic practitioner. However, for milder cases or those where the condition is well-managed with outpatient care, in-house treatment may not be necessary. It's essential to consult directly with an Ayurvedic practitioner to determine the most appropriate course of action for your specific situation.",
    },
    {
      id: 4,
      question: "Is your treatment safe? Are there any side effects of the medicines?",
      answer:
        "AVN Ayurveda Hospital has a legacy spanning over 90 years and is committed to ensuring the safety of its treatments. The institution is GMP (Good Manufacturing Practice) certified, maintaining high-quality standards in the preparation of Ayurvedic medicines. AVN Ayurveda adheres to stringent quality control measures to ensure the purity and safety of our products. This includes rigorous testing for heavy metals and other contaminants. Our medicines are prepared using 100 percent organic ingredients that are free from heavy metals.",
    },
    {
      id: 5,
      question: "How long do I need to get treatment at your hospital? Do I need to come to the treatment often?",
      answer:
        "The duration and frequency of treatment visits for joint pain at an Ayurvedic hospital depends on several factors, including the severity of your condition, the treatment plan prescribed by the Ayurvedic practitioner, and your individual response to treatment. In some cases, particularly if your joint pain is severe or chronic, you may require frequent visits for intensive in-house treatment and monitoring.",
    },
    {
      id: 6,
      question: "Does your treatment offer a permanent solution?",
      answer:
        "Ayurveda aims to address the root causes of joint pain and promote overall well-being, but whether it offers a permanent solution depends on various factors, such as Underlying Causes, Severity, Chronicity, age, overall health, lifestyle habits, and the treatment approach.",
    },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const mid = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, mid);
  const rightFAQs = faqs.slice(mid);

  return (
    <div className="mx-auto w-full max-w-7xl bg-[linear-gradient(180deg,#fff9f3_0%,#f5fbf2_100%)] px-4 py-10 max-[470px]:py-5 sm:px-6 lg:px-8 lg:py-10">
      <div className="flex justify-center">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#114520] max-[470px]:mb-5 sm:text-3xl lg:text-4xl xl:text-[42px]">
          Frequently Asked <span className="text-[#f05623]">Questions</span>
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-8">
        <div className="max-w-2xl flex-1 space-y-3 sm:space-y-4 lg:min-w-0">
          {leftFAQs.map((faq, index) => (
            <JpLpFaqItem
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
            <JpLpFaqItem
              key={faq.id}
              faq={faq}
              index={index + mid}
              activeIndex={activeIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const JpLpFaqItem: React.FC<{
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
          activeIndex === index ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"
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

export default JpLpFaqComponent;
