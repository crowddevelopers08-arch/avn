"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { withImageKit } from "@/lib/imagekit";

const items = [
  {
    image: withImageKit("/svgone.png"),
    title: "Tailor-Made Ayurvedic Therapy",
    desc: "Two specialised therapy sessions per day, designed for your unique health condition.",
  },
  {
    image: withImageKit("/svgtwo.png"),
    title: "Physiotherapy and Exercise",
    desc: "Personalised physiotherapy and exercise guidance tailored to your current stage of recovery.",
  },
  {
    image: withImageKit("/svgthree.png"),
    title: "Personalised Medications",
    desc: "Ayurvedic medicines that specifically target and address your health concerns.",
  },
  {
    image: withImageKit("/svgfour.png"),
    title: "Personalised Yoga",
    desc: "Personalised yoga sessions to aid in your recovery.",
  },
  {
    image: withImageKit("/svgfive.png"),
    title: "Supplements and Vitamins",
    desc: "Supplements & vitamins, if necessary, to support overall well-being.",
  },
  {
    image: withImageKit("/svgsix.png"),
    title: "Tailor-Made Diet",
    desc: "A diet plan, meticulously crafted, to align with your unique health parameters and needs.",
  },
  {
    image: withImageKit("/svgseven.png"),
    title: "Integrated Allopathic Care",
    desc: "Your conventional allopathic medications will be continued as prescribed to ensure a holistic approach to your health.",
  },
  {
    image: withImageKit("/svgeight.png"),
    title: "24/7 Professional and Compassionate Care",
    desc: "Constant, high-quality care in a warm and supportive environment.",
  },
];

const AvnLpTreatmentPackage: React.FC = () => {
  return (
    <section className="section-wash bg-[var(--avn-sand)] px-4 py-10 text-center max-[470px]:py-5 sm:px-6 md:px-10">
      <div className="section-content text-center mb-6 sm:mb-8 max-[470px]:mb-4 lg:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] leading-tight mb-3 sm:mb-6">
          What&apos;s Included in Your{" "}
          <span className="text-[#f05623] block sm:inline">Treatment Package?</span>
        </h2>
      </div>

      <div className="section-content mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:shadow-md min-[430px]:flex-row min-[430px]:items-center"
          >
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <h3 className="font-semibold text-base md:text-lg text-black mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="section-content mt-10 max-[470px]:mt-5">
        <a href="#appointment-form" className="inline-block w-full sm:w-auto">
          <button className="w-full rounded-xl bg-[#D94E1A] px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#80c141] sm:min-w-[260px] sm:px-10 sm:text-lg">
            Get a Teleconsultation Today
          </button>
        </a>
      </div>
    </section>
  );
};

export default AvnLpTreatmentPackage;
