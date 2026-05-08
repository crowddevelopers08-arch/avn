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

const KnLpFaqComponent: React.FC<FAQComponentProps> = ({
  faqs = [
    {
      id: 1,
      question: "What are disc problem symptoms?",
      answer:
        "Symptoms of disc problems, such as herniated or degenerative discs, can include pain, which may be localized or radiate to other areas, numbness, tingling, and muscle weakness. The specific symptoms can vary depending on the location and severity of the disc issue.",
    },
    {
      id: 2,
      question: "What are the different types of disc problems?",
      answer:
        "Different types of disc problems include herniated discs, bulging discs, degenerative disc disease, disc extrusion, and disc protrusion. Herniated discs occur when the inner core of a disc leaks through its outer layer, leading to nerve compression.\n\nBulging discs involve the extension of a disc beyond its normal boundary. Degenerative disc disease is the gradual wear and tear of discs over time, often associated with aging.\n\nDisc extrusion and protrusion are more severe forms of herniation, where disc material extends into the spinal canal, potentially causing more significant nerve compression.",
    },
    {
      id: 3,
      question: "Can L4 L5 be cured without surgery?",
      answer:
        "The treatment of L4-L5 disc issues depends on the severity of the condition. In many cases, non-surgical methods such as physical therapy, pain management, and lifestyle adjustments can effectively manage the symptoms. Surgery is typically considered when conservative treatments do not provide relief or for severe cases.",
    },
    {
      id: 4,
      question: "Will Disc problem create any permanent disability in future?",
      answer:
        "The potential for permanent disability due to a disc problem varies based on individual cases. Timely and appropriate treatment, including Ayurvedic approaches, can significantly mitigate the risk of long-term disability by addressing the root causes and promoting spinal health. It's crucial to consult with healthcare professionals to determine the most suitable interventions for your specific condition and prevent any potential long-term impact.",
    },
    {
      id: 5,
      question: "Do you treat this Disc condition with medicines only or are any other methods used?",
      answer:
        "At AVN Arogya, we employ a comprehensive approach to treat disc conditions, combining Ayurvedic medicines with specialized therapies, exercises, and dietary recommendations tailored to address the root causes of discomfort. Our holistic methods go beyond medication, promoting overall spine health and flexibility for lasting relief. The personalized treatment plan aims to enhance your well-being through a combination of natural remedies and therapeutic approaches.",
    },
    {
      id: 6,
      question: "I have been suffering from Disc for a long time and have taken Allopathic treatment and Physiotherapy. I am getting temporary relief but again the pain is getting aggravated. Can I get an effective long term solution to this problem?",
      answer:
        "At AVN Arogya, we specialize in providing effective, long-term solutions for disc-related issues. Our tailored Ayurvedic treatments focus on addressing the root causes, offering sustainable relief and promoting overall spinal health. Many individuals have found lasting comfort and improved well-being through our holistic approach to disc problems.",
    },
    {
      id: 7,
      question: "Can you recover from a herniated disc without surgery?",
      answer:
        "Yes, recovery from a herniated disc is possible without surgery. Non-surgical treatments such as physical therapy, pain management, rest, and lifestyle adjustments can often alleviate symptoms and promote healing.\n\nHowever, the effectiveness of non-surgical options depends on the severity of the herniation and individual factors. Surgery is considered when conservative treatments do not provide relief or for more severe cases.",
    },
    {
      id: 8,
      question: "Can disc problems cause abdominal pain?",
      answer:
        "Disc problems in the spine, such as herniated discs, can potentially cause referred pain in the abdominal area. When a disc presses on nearby nerves, it may lead to sensations of pain that radiate to the abdomen, although this is not a common symptom.\n\nIf you're experiencing abdominal pain, it's essential to consult a healthcare professional for a proper evaluation and diagnosis.",
    },
    {
      id: 9,
      question: "Does your treatment for disc problems offer a permanent solution?",
      answer:
        "While individual responses may vary, our Ayurvedic treatment for disc problems focuses on providing long-term relief by addressing the root causes of discomfort. We aim to offer sustainable solutions that promote spinal health and overall well-being, empowering individuals with tools for ongoing care. Our approach emphasizes holistic healing for a lasting impact on disc-related issues.",
    },
    {
      id: 10,
      question: "Is it mandatory to take in-treatment at your hospital? Can't I get relief with your medicine only?",
      answer:
        "At our hospital, we provide comprehensive care tailored to individual needs. While our medicines play a crucial role, our holistic approach incorporates various therapies and personalized treatments to ensure the best possible outcomes. We believe that the combination of medicine and in-treatment enhances the effectiveness of our approach, promoting holistic healing and sustained relief.",
    },
    {
      id: 11,
      question: "Is your treatment safe? Are there any side effects for the medicines?",
      answer:
        "Yes, our treatments prioritize safety, employing natural Ayurvedic remedies known for minimal side effects. We ensure a personalized approach, considering individual health profiles to mitigate any potential risks. The goal is to provide effective relief while maintaining the overall well-being and safety of our patients.",
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
            <KnLpFaqItem
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
            <KnLpFaqItem
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

const KnLpFaqItem: React.FC<{
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

export default KnLpFaqComponent;
