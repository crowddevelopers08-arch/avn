"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { HipconsultationModal } from "./Hippopup";
import { withImageKit } from "@/lib/imagekit";

const items = [
  {
    image: withImageKit("/svgone.png"),
    title: "Tailor-Made Ayurvedic Therapy",
    desc: "Two specialised therapy sessions per day, designed for your unique health condition.",
  },
  {
    image: withImageKit("/svgtwo.png"),
    title: "Physiotherapy and Exercise",
    desc: "Personalised physiotherapy and exercise guidance tailored to your current stage of recovery.",
  },
  {
    image: withImageKit("/svgthree.png"),
    title: "Personalised Medications",
    desc: "Ayurvedic medicines that specifically target and address your health concerns.",
  },
  {
    image: withImageKit("/svgfour.png"),
    title: "Personalised Yoga",
    desc: "Personalised yoga sessions to aid in your recovery.",
  },
  {
    image: withImageKit("/svgfive.png"),
    title: "Supplements and Vitamins",
    desc: "Supplements & vitamins, if necessary, to support overall well-being.",
  },
  {
    image: withImageKit("/svgsix.png"),
    title: "Tailor-Made Diet",
    desc: "A diet plan, meticulously crafted, to align with your unique health parameters and needs.",
  },
  {
    image: withImageKit("/svgseven.png"),
    title: "Integrated Allopathic Care",
    desc: "Your conventional allopathic medications will be continued as prescribed to ensure a holistic approach to your health.",
  },
  {
    image: withImageKit("/svgeight.png"),
    title: "24/7 Professional and Compassionate Care",
    desc: "Constant, high-quality care in a warm and supportive environment.",
  },
];

const AvntreatmentPackage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        .shiny-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: #f05623;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Rubik', sans-serif;
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
          content: '';
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

        /* Mobile First Styles */
        @media (min-width: 375px) {
          .shiny-button {
            padding: 9px 18px;
            font-size: 14px;
            gap: 6px;
          }
        }

        @media (min-width: 480px) {
          .shiny-button {
            padding: 10px 20px;
            font-size: 15px;
            gap: 7px;
          }
        }

        @media (min-width: 640px) {
          .shiny-button {
            padding: 11px 22px;
            font-size: 15px;
            gap: 8px;
          }
        }

        @media (min-width: 768px) {
          .shiny-button {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
        }

        @media (min-width: 1024px) {
          .shiny-button {
            padding: 12px 26px;
            font-size: 16px;
          }
        }

        @media (min-width: 1280px) {
          .shiny-button {
            padding: 13px 28px;
            font-size: 17px;
          }
        }

        /* Icon sizes */
        .shiny-button svg {
          width: 16px;
          height: 16px;
        }

        @media (min-width: 480px) {
          .shiny-button svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (min-width: 768px) {
          .shiny-button svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
      
      <section className="bg-white py-10 max-[470px]:py-5 px-6 md:px-10 text-center" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="text-center mb-6 sm:mb-8 max-[470px]:mb-4 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#114520] mb-3 sm:mb-6 leading-tight">
            What's Included in Your <span className="text-[#f05623] block sm:inline">Treatment Package?</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <Card
              key={index}
              className="flex flex-row items-center gap-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white p-4 text-left"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center w-16 h-16 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Text Section */}
              <CardContent className="p-0">
                <h3 className="font-semibold text-base md:text-lg text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 max-[470px]:mt-5">
          <a href="https://avnarogya.zohobookings.in/#/teleconsultation">
          <button 
            className="shiny-button"
          >
            Book Your Teleconsultation Today
          </button>
          </a>
        </div>
      </section>

      {/* Consultation Modal */}
      <HipconsultationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default AvntreatmentPackage;
