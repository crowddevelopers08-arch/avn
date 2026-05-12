"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does ayurvedic treatment for my back pain take to show results?",
    answer:
      "The duration for Ayurvedic treatment to alleviate back pain can vary based on individual factors such as the severity of the condition, one's response to the treatment, and the specific therapies utilized. Generally, some individuals might experience noticeable relief within a few weeks, while for others, it could take a few months before significant improvements become evident. Consistency in following the prescribed treatment plan and lifestyle recommendations plays a crucial role in determining the timeframe for observable results.",
  },
  {
    id: 2,
    question: "Can ayurvedic cure back pain?",
    answer:
      "Ayurveda offers holistic approaches to manage and alleviate back pain. It employs various therapies, herbal treatments, lifestyle adjustments, and targeted exercises to address the root causes of back pain, aiming to promote natural healing and relief. However, individual responses may vary, and consulting an Ayurvedic practitioner can provide personalized guidance and treatment plans for managing back pain effectively.",
  },
  {
    id: 3,
    question: "How do you heal back pain fast?",
    answer:
      "Healing back pain quickly involves a combination of rest, targeted exercises, and proper posture. Applying hot or cold compresses and seeking professional guidance can also aid in faster relief. Additionally, maintaining a healthy lifestyle and avoiding activities that exacerbate the pain can contribute to a speedier recovery.",
  },
  {
    id: 4,
    question: "How do you get rid of back pain naturally?",
    answer:
      "To alleviate back pain naturally, consider a regimen comprising gentle exercises, such as yoga or stretching, to strengthen the back muscles. Additionally, practicing good posture and maintaining a healthy weight can significantly reduce strain on the back. Incorporating heat or cold therapy, along with herbal remedies or supplements, may also aid in relieving discomfort naturally. Consulting with a healthcare professional for personalized advice is essential for effective and safe management of back pain.",
  },
  {
    id: 5,
    question: "What is the fastest way to relieve back pain without medicine?",
    answer:
      "The fastest way to relieve back pain without medicine often involves targeted stretching and exercises to alleviate tension. Practices such as heat or cold therapy and maintaining good posture can provide quick relief. Additionally, seeking physical therapy or chiropractic care can offer non-medicinal methods for swift back pain relief.",
  },
  {
    id: 6,
    question: "Can back pain be cured permanently?",
    answer:
      "Back pain can sometimes be alleviated or managed effectively with various treatments, but a 'permanent' cure may not be guaranteed for everyone. It often depends on the underlying cause, lifestyle changes, and the type of treatment received. Emphasizing preventive measures, strengthening core muscles, proper posture, and seeking professional medical advice can significantly reduce the occurrence and intensity of back pain.",
  },
  {
    id: 7,
    question: "How can I relieve hip pain without undergoing surgery?",
    answer:
      "Relieving hip pain without resorting to surgery can be achieved through various non-invasive methods. These include physical therapy to improve hip joint mobility and strength, pain medications to manage discomfort, and lifestyle modifications such as weight management and avoiding activities that exacerbate the pain. Additionally, heat or cold therapy may provide temporary relief.",
  },
  {
    id: 8,
    question: "Do you treat back pain with medicines only or are any other methods used?",
    answer:
      "We offer a comprehensive approach to managing back pain. While medicines can be part of the treatment plan, we also incorporate various methods such as physical therapy, lifestyle adjustments, and, if suitable, non-pharmacological interventions to address back pain effectively. Our goal is to personalize the treatment, considering a range of methods that best suit each individual's needs for optimal relief.",
  },
  {
    id: 9,
    question: "Is there anything I can do at home to reduce my pain and discomfort?",
    answer:
      "Simple home remedies like gentle stretching, applying hot or cold packs, and maintaining proper posture can help alleviate pain and discomfort. Additionally, practicing relaxation techniques such as deep breathing or meditation might also provide relief.",
  },
  {
    id: 10,
    question: "Do you also recommend yoga and physiotherapy for my back pain condition?",
    answer:
      "Both yoga and physiotherapy are often recommended to address back pain conditions. Yoga can improve flexibility and strengthen muscles, while physiotherapy offers targeted exercises and treatments to alleviate pain and enhance overall back health. A combination of these approaches can significantly contribute to managing and reducing back pain.",
  },
];

export default function AyBpLpFaqComponent() {
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
            <FaqItem
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
            <FaqItem
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
}

function FaqItem({
  faq,
  index,
  activeIndex,
  toggleFAQ,
}: {
  faq: { id: number; question: string; answer: string };
  index: number;
  activeIndex: number | null;
  toggleFAQ: (index: number) => void;
}) {
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
          activeIndex === index ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
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
}
