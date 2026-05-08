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

const ScLpFaqComponent: React.FC<FAQComponentProps> = ({
  faqs = [
    {
      id: 1,
      question: "Can sciatica be treated without surgery?",
      answer:
        "Yes, sciatica can often be effectively treated without resorting to surgical interventions. Ayurveda, an ancient system of medicine, provides a holistic approach to managing sciatic pain by addressing not only the symptoms but also the underlying causes. Ayurvedic therapies, herbal remedies, dietary recommendations, and lifestyle adjustments can help individuals find relief from sciatic pain and improve their overall well-being.",
    },
    {
      id: 2,
      question: "Is sciatica curable during pregnancy?",
      answer:
        "Sciatica during pregnancy can indeed be challenging, but it is usually manageable without the need for surgical procedures. Ayurvedic treatments can offer a safe and natural way to alleviate discomfort and promote a healthier pregnancy experience. Through gentle massages, specific yoga postures, and dietary adjustments tailored to pregnancy, Ayurveda can provide relief and comfort during this crucial time.",
    },
    {
      id: 3,
      question: "What is Ayurvedic treatment for sciatica?",
      answer:
        "Ayurvedic treatment for sciatica is a comprehensive approach that encompasses various therapies and strategies. It involves Panchakarma treatments, which include Abhyanga (massage) and Vasthi (medicated enemas), to provide relief and restore balance in the body. Additionally, Ayurvedic remedies often include the use of specific herbs such as Ashwagandha, Nirgundi, Shallaki, and Guggul, which possess anti-inflammatory and pain-relieving properties.",
    },
    {
      id: 4,
      question: "Are there specific herbs used in Ayurvedic sciatica treatment?",
      answer:
        "Ayurvedic treatments for sciatica commonly incorporate a range of herbs known for their therapeutic properties. These herbs, like Ashwagandha, Nirgundi, Shallaki, and Guggul, have demonstrated anti-inflammatory and analgesic effects. When used in Ayurvedic formulations, they can help alleviate the symptoms of sciatic pain naturally and holistically.",
    },
    {
      id: 5,
      question: "How effective is Ayurvedic treatment for sciatica?",
      answer:
        "The effectiveness of Ayurvedic treatment for sciatica varies depending on individual factors such as the severity of the condition, one's constitution, and their adherence to Ayurvedic guidelines. Many individuals have reported substantial relief from their sciatic symptoms and experienced long-term benefits through Ayurvedic treatment. It is essential to consult with an Ayurvedic practitioner for a personalized treatment plan that best suits your needs.",
    },
    {
      id: 6,
      question: "Can I try Ayurvedic treatment at home for sciatica?",
      answer:
        "While consulting an Ayurvedic practitioner is recommended for a tailored treatment plan, there are several Ayurvedic practices that you can explore at home. These may include self-massage using warm herbal oils, incorporating anti-inflammatory foods into your diet, and practicing specific yoga postures designed to provide relief from sciatica. However, it's crucial to seek professional guidance for a comprehensive and effective approach.",
    },
    {
      id: 7,
      question: "What dietary changes are recommended in Ayurvedic sciatica treatment?",
      answer:
        "Ayurveda recommends dietary adjustments that focus on balancing the Vata dosha, which is often associated with sciatic pain. This involves consuming warm, well-cooked, and easily digestible foods. Incorporating ingredients like ginger, garlic, turmeric, and herbal teas with anti-inflammatory properties can be particularly beneficial in managing sciatica naturally.",
    },
    {
      id: 8,
      question: "Is yoga beneficial for sciatica according to Ayurveda?",
      answer:
        "Yes, Ayurveda encourages the practice of yoga as a part of sciatica treatment. Specific yoga postures, such as Bhujangasana (Cobra pose), Supta Padangusthasana (Reclining Hand-to-Big-Toe pose), and Marjariasana (Cat-Cow pose), can be highly effective in alleviating pain and strengthening the back. Yoga, when incorporated into an Ayurvedic treatment plan, can help individuals find relief from sciatica symptoms.",
    },
    {
      id: 9,
      question: "How long does Ayurvedic treatment for sciatica take to show results?",
      answer:
        "The time required for Ayurvedic treatment to demonstrate results varies depending on the individual's specific circumstances. Factors such as the severity of the condition, the individual's constitution, and their commitment to following Ayurvedic guidelines all play a role. While some individuals may experience relief within a few weeks, chronic cases may require several months of consistent treatment.",
    },
    {
      id: 10,
      question: "Are there any lifestyle changes recommended for sciatica treatment in Ayurveda?",
      answer:
        "Ayurveda places a significant emphasis on maintaining a balanced lifestyle to complement sciatica treatment. This includes avoiding prolonged periods of sitting or standing, maintaining good posture, and incorporating relaxation techniques like meditation. Lifestyle adjustments are integral to the holistic management of sciatica according to Ayurvedic principles.",
    },
    {
      id: 11,
      question: "Can Ayurvedic treatment completely cure sciatica?",
      answer:
        "Ayurvedic treatments aim to alleviate symptoms and address the root causes of sciatica, offering a holistic approach to healing. While a complete cure may not be guaranteed in all cases, Ayurvedic therapies have shown the potential to significantly improve the condition and enhance the quality of life for individuals suffering from sciatica.",
    },
    {
      id: 12,
      question: "Can Ayurvedic treatment prevent sciatica recurrence?",
      answer:
        "Ayurvedic treatments not only aim to alleviate current symptoms but also focus on preventing the recurrence of sciatica. By addressing the root causes and promoting a balanced lifestyle, Ayurveda can contribute to long-term relief and reduce the risk of future episodes.",
    },
    {
      id: 13,
      question: "Is Ayurvedic sciatica treatment cost-effective compared to surgery?",
      answer:
        "Ayurvedic treatments for sciatica are generally more cost-effective than surgical procedures. Surgery can be expensive and may involve a more extended recovery period. Ayurvedic treatments offer a natural and budget-friendly alternative that can provide relief without the financial burden associated with surgery.",
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
            <ScLpFaqItem
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
            <ScLpFaqItem
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

const ScLpFaqItem: React.FC<{
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

export default ScLpFaqComponent;
