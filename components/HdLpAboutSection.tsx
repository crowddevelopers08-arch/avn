"use client";

import React, { useEffect, useRef, useState } from "react";
import { withImageKit } from "@/lib/imagekit";

const herniatedDiscPoints = [
  "Over 90 years of rich experience",
  "Effective and result-oriented treatments",
  "Therapies aligned with modern-day needs",
  "Proprietary medicines for specific diseases",
  "Holistic approach to healing",
  "Full range of Ayurvedic and modern rehabilitation therapies",
  "Curative and preventive healthcare programs",
];

export default function HdLpAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const designRef1 = useRef<HTMLDivElement>(null);
  const designRef2 = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white px-4 py-8 transition-all duration-1000 sm:px-6 max-[470px]:py-6 sm:py-8 lg:px-8 lg:py-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className="container mx-auto max-w-xl space-y-8 p-4 lg:max-w-7xl lg:space-y-12 lg:p-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="text-center">
          <h2 className="mb-4 max-[470px]:mb-0 text-2xl font-bold text-[#114520] sm:text-3xl lg:text-4xl xl:text-[42px]">
            Why <span className="text-[#f05623]">AVN AROGYA</span> for Herniated Disc Relief
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3 lg:mt-0">
              {herniatedDiscPoints.map((point, index) => (
                <div
                  key={point}
                  className={`flex rounded-lg p-1.5 transition-all duration-500 hover:bg-gray-50 sm:p-2 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${260 + index * 80}ms` : "0ms",
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#80c141] text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#114520] sm:h-10 sm:w-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-3.5">
                    <h4 className="text-sm font-medium leading-5 text-[#114520] sm:text-[15px] sm:leading-6 lg:text-base">
                      {point}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div aria-hidden="true" className="order-1 relative mt-6 lg:order-2 lg:mt-0">
            <div className="relative z-10">
              <img
                ref={imageRef}
                width="600"
                height="600"
                src={withImageKit("whyy.jpg")}
                alt="AVN Arogya Ayurvedic Treatment Center"
                className={`relative z-10 mx-auto w-full max-w-md rounded-xl border-4 border-white bg-gray-300 shadow-xl transition-all duration-1000 hover:shadow-2xl sm:max-w-lg lg:max-w-none ${
                  isVisible
                    ? "translate-x-0 scale-100 opacity-100"
                    : "translate-x-8 scale-95 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              />
            </div>

            <div
              ref={designRef1}
              className={`absolute -right-3 -top-3 z-0 h-16 w-16 rounded-full bg-[#f05623] shadow-lg transition-all duration-1000 sm:-right-4 sm:-top-4 sm:h-20 sm:w-20 lg:-right-6 lg:-top-6 lg:h-24 lg:w-24 ${
                isVisible
                  ? "rotate-0 scale-100 opacity-90"
                  : "-rotate-45 scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
            />

            <div
              ref={designRef2}
              className={`absolute -bottom-4 -left-4 z-0 h-20 w-20 rounded-2xl bg-[#80c141] shadow-lg transition-all duration-1000 sm:-bottom-5 sm:-left-5 sm:h-24 sm:w-24 lg:-bottom-8 lg:-left-8 lg:h-32 lg:w-32 ${
                isVisible
                  ? "rotate-0 scale-100 opacity-80"
                  : "rotate-45 scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
            />

            <div className="absolute inset-0 -z-10">
              <div
                className={`absolute left-1/4 top-1/4 h-12 w-12 rounded-lg border-4 border-[#114520] transition-all duration-1000 sm:h-16 sm:w-16 ${
                  isVisible ? "rotate-45 opacity-20" : "rotate-0 opacity-0"
                }`}
              />
              <div
                className={`absolute bottom-1/4 right-1/4 h-10 w-10 rounded-full border-4 border-[#f05623] transition-all duration-1000 sm:h-12 sm:w-12 ${
                  isVisible ? "opacity-20" : "scale-0 opacity-0"
                }`}
              />
            </div>

            <div
              className={`absolute -top-2 left-4 h-6 w-6 animate-pulse rounded-full bg-[#80c141] transition-all duration-1000 sm:-top-3 sm:left-6 sm:h-8 sm:w-8 ${
                isVisible ? "opacity-70" : "opacity-0"
              }`}
            />
            <div
              className={`absolute -right-2 bottom-8 h-4 w-4 animate-bounce rounded-full bg-[#f05623] transition-all duration-1000 sm:-right-3 sm:bottom-10 sm:h-6 sm:w-6 ${
                isVisible ? "opacity-80" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
    </section>
  );
}
