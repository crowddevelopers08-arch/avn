"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { HipconsultationModal } from "./Hippopup";
import { withImageKit } from "@/lib/imagekit";
import { NSC_BOOKING_URL } from "./NonSurgicalCareForAvascularNecrosisCtaButton";

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
    desc: "Supplements and vitamins, if necessary, to support overall well-being.",
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

export default function NonSurgicalCareForAvascularNecrosisTreatmentPackage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

        .shiny-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: #f05623;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          font-family: "Rubik", sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(237, 95, 33, 0.3);
          transition: all 0.3s ease;
          min-width: auto;
          text-align: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .shiny-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.2) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          animation: shine 2s linear infinite;
        }

        @keyframes shine {
          0% { left: -75%; }
          100% { left: 120%; }
        }

        .shiny-button:hover,
        .shiny-button:focus {
          background: #d4561d;
          box-shadow: 0 6px 20px rgba(237, 95, 33, 0.4);
          transform: translateY(-1px);
        }
      `}</style>

      <section className="bg-white px-6 py-10 text-center max-[470px]:py-5 md:px-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="mb-6 text-center sm:mb-8 max-[470px]:mb-4 lg:mb-8">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-[#114520] sm:mb-6 sm:text-3xl lg:text-4xl xl:text-5xl">
            What&apos;s Included in Your <span className="block text-[#f05623] sm:inline">Treatment Package?</span>
          </h1>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <Card key={index} className="flex flex-row items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <Image src={item.image} alt={item.title} width={64} height={64} className="object-contain" />
              </div>
              <CardContent className="p-0">
                <h3 className="mb-1 text-base font-semibold text-black md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 max-[470px]:mt-5">
          <a href={NSC_BOOKING_URL}>
            <button className="shiny-button">Book Your Teleconsultation Today</button>
          </a>
        </div>
      </section>

      <HipconsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
