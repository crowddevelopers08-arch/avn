"use client";

import React, { useEffect, useRef, useState } from "react";
import { withImageKit } from "@/lib/imagekit";

const carouselImages = [
  { src: withImageKit("1-300x277.jpg"), alt: "AVN Arogya yoga session" },
  { src: withImageKit("2-300x277.jpg"), alt: "AVN Arogya outdoor therapy session" },
  { src: withImageKit("4-300x277.jpg"), alt: "AVN Arogya scanning laser treatment room" },
  { src: withImageKit("5-300x277.jpg"), alt: "AVN Arogya therapy treatment bed" },
  { src: withImageKit("7-300x277.jpg"), alt: "AVN Arogya medical team group photo" },
  { src: withImageKit("6-300x277.jpg"), alt: "AVN Arogya therapy room" },
  { src: withImageKit("10-300x277.jpg"), alt: "AVN Arogya hospital campus lawn view" },
  { src: withImageKit("15-300x277.jpg"), alt: "AVN Arogya hospital exterior" },
  { src: withImageKit("18-300x277.jpg"), alt: "AVN Arogya pharmacy" },
  { src: withImageKit("3-300x277.jpg"), alt: "AVN Arogya rehabilitation room" },
  { src: withImageKit("19-300x277.jpg"), alt: "AVN Arogya campus at night" },
];

export default function HdLpHospitalAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const total = carouselImages.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
        return;
      }
      if (window.innerWidth >= 640) {
        setVisibleCount(3);
        return;
      }
      setVisibleCount(2);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? total - visibleCount : c - 1));
  const next = () => setCurrent((c) => (c >= total - visibleCount ? 0 : c + 1));

  const visible = carouselImages.slice(current, current + visibleCount);

  return (
    <section
      ref={sectionRef}
      className={`bg-[linear-gradient(180deg,#eef6e7_0%,#f5faf2_100%)] px-4 max-[470px]:py-6 py-10 transition-all duration-1000 sm:px-6 sm:py-12 lg:px-8 lg:py-14 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl space-y-8 lg:space-y-10">

        {/* Header */}
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold leading-tight text-[#114520] sm:text-3xl lg:text-4xl xl:text-[42px]">
            About{" "}
            <span className="text-[#f05623]">AVN Arogya</span>{" "}
            Ayurvedic Hospital
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            At AVN Arogya, we come with a{" "}
            <span className="font-semibold text-[#f05623]">rich experience</span>, spanning over{" "}
            <span className="font-semibold text-[#f05623]">90+ years</span> and four generations of healing through
            Ayurveda. Our commitment to authentic healing is reflected in our purely herbal, Ayurvedic products,
            manufactured at our state-of-the-art GMP-certified factory.
          </p>
        </div>

        {/* Main content: image left + text right */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* Hospital image */}
          <div
            className={`overflow-hidden rounded-xl shadow-lg transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <img
              src={withImageKit("avnhospital.jpg")}
              alt="AVN Arogya Ayurvedic Hospital"
              width={600}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Description text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <p className="text-base leading-7 text-gray-800 sm:text-[17px] sm:leading-8 lg:text-lg lg:leading-8">
              <span className="font-bold text-[#1a1a1a]">AVN Arogya Ayurvedic Hospital</span>, based in{" "}
              <span className="font-bold text-[#1a1a1a]">Madurai</span>, operates a 100-bed Ayurvedic hospital and
              centres across major cities. The hospital offers holistic, residential care combining{" "}
              <span className="font-semibold text-[#f05623]">
                Ayurveda, yoga, naturopathy, rehabilitation, and modern diagnostics
              </span>
              . With experienced physicians and a trained paramedical team, it focuses on{" "}
              <span className="font-semibold text-[#f05623]">
                preventive and curative treatments, lifestyle guidance,
              </span>{" "}
              and integrated therapies to manage various conditions and promote{" "}
              <span className="font-semibold text-[#f05623]">long-term wellness</span>.
            </p>
          </div>
        </div>

        {/* Image carousel */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          <div className="relative flex items-center gap-2">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#f05623] shadow transition hover:bg-[#80c141] hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Images */}
            <div
              className="grid flex-1 gap-2 sm:gap-3"
              style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
            >
              {visible.map((img, i) => (
                <div key={current + i} className="overflow-hidden rounded-lg shadow">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-24 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-28 lg:h-36"
                  />
                </div>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#f05623] shadow transition hover:bg-[#80c141] hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          {/* <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: total - visibleCount + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 hover:bg-[#80c141] ${
                  i === current ? "w-5 bg-[#f05623]" : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
        >
          <a href="#appointment-form" className="inline-block">
            <button className="rounded-lg bg-[#f05623] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#80c141] hover:shadow-lg sm:px-10 sm:py-3.5 sm:text-base">
              Schedule your virtual consultation
            </button>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
    </section>
  );
}
