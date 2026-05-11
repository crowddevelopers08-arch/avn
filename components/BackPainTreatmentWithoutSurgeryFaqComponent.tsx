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

const BackPainTreatmentWithoutSurgeryFaqComponent: React.FC<FAQComponentProps> = ({
  faqs = [
    {
      id: 1,
      question: "Can a herniated disc be cured without surgery?",
      answer:
        "Yes, many cases of herniated discs can be effectively treated without resorting to surgical procedures. Non-surgical approaches typically include physical therapy, anti-inflammatory medications, pain management, and lifestyle modifications. These methods aim to alleviate pain, reduce inflammation, and promote the body's natural healing processes.",
    },
    {
      id: 2,
      question: "What are the non-surgical treatments for disc bulge at L4-L5?",
      answer:
        "Non-surgical treatments for a disc bulge at the L4-L5 level encompass a range of approaches. These include physical therapy to improve spinal stability and flexibility, chiropractic care to alleviate pressure on the affected disc, and medication for pain management. Additionally, lifestyle changes such as maintaining proper posture and incorporating core-strengthening exercises can aid in the healing process.",
    },
    {
      id: 3,
      question: "How can I relieve hip pain without undergoing surgery?",
      answer:
        "Relieving hip pain without resorting to surgery can be achieved through various non-invasive methods. These include physical therapy to improve hip joint mobility and strength, pain medications to manage discomfort, and lifestyle modifications such as weight management and avoiding activities that exacerbate the pain. Additionally, heat or cold therapy may provide temporary relief.",
    },
    {
      id: 4,
      question: "Are there non-surgical treatments for slipped disc or herniated disc?",
      answer:
        "Yes, non-surgical treatments are viable options for addressing slipped or herniated discs. These treatments often involve rest, physical therapy to strengthen supporting muscles and improve posture, and medications to alleviate pain and inflammation. Additionally, conservative measures like heat or cold therapy can provide relief and support the healing process.",
    },
    {
      id: 5,
      question: "Can stenosis be cured permanently without surgery?",
      answer:
        "While achieving a complete cure for spinal stenosis without surgery may not always be possible, non-surgical treatments can provide long-term relief and significantly improve your quality of life. These treatments focus on symptom management, pain reduction, and improving spinal function, allowing individuals to lead fulfilling lives with the condition.",
    },
    {
      id: 6,
      question: "What are the options for non-surgical treatment of spondylolisthesis?",
      answer:
        "Non-surgical options for spondylolisthesis management typically include wearing a brace to stabilize the affected area, physical therapy to strengthen supportive muscles, and pain management through medication or injections. The choice of treatment will depend on the degree of slippage and individual factors.",
    },
    {
      id: 7,
      question: "What is the recovery process for spinal stenosis without surgery?",
      answer:
        "The recovery process for spinal stenosis without surgery involves a combination of physical therapy, pain management, and lifestyle adjustments. Physical therapy aims to improve spinal mobility and strength, while pain management techniques, such as medication or injections, help alleviate discomfort. Lifestyle changes, such as maintaining proper posture and engaging in low-impact exercises, can also contribute to a smoother recovery.",
    },
    {
      id: 8,
      question: "Can you heal a bulging disc without surgery?",
      answer:
        "Yes, it is possible to heal a bulging disc without surgery. Non-surgical treatments like physical therapy, anti-inflammatory medications, and lifestyle modifications can promote healing and alleviate pain. These approaches are often successful in allowing the disc to retract and the surrounding tissues to recover.",
    },
    {
      id: 9,
      question: "What are the non-surgical treatments for sciatica?",
      answer:
        "Non-surgical treatments for sciatica typically include physical therapy to relieve nerve compression, pain management through medications or injections, and exercises to improve flexibility and reduce pressure on the sciatic nerve. Heat or cold therapy may also help alleviate symptoms. The choice of treatment depends on the underlying cause of sciatica.",
    },
    {
      id: 10,
      question: "How do herniated discs heal without surgery?",
      answer:
        "Herniated discs can heal without surgery through a combination of non-surgical treatments. These treatments focus on reducing inflammation, managing pain, and promoting the body's natural healing processes. Common approaches include physical therapy, medication, and lifestyle adjustments to minimize strain on the affected area. In many cases, the disc gradually heals and symptoms improve over time.",
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
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 max-[470px]:py-5 bg-[linear-gradient(180deg,#fff9f3_0%,#f5fbf2_100%)]">
      <div className="flex justify-center">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#114520] sm:text-3xl lg:text-4xl xl:text-[42px] max-[470px]:mb-5">
          Frequently Asked <span className="text-[#f05623]">Questions</span>
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-8">
        <div className="max-w-2xl flex-1 space-y-3 sm:space-y-4 lg:min-w-0">
          {leftFAQs.map((faq, index) => (
            <BackPainTreatmentWithoutSurgeryFaqItem
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
            <BackPainTreatmentWithoutSurgeryFaqItem
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

const BackPainTreatmentWithoutSurgeryFaqItem: React.FC<{
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

export default BackPainTreatmentWithoutSurgeryFaqComponent;
