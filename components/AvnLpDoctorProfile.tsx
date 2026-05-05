"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface Doctor {
  name: string;
  image: string;
  experience: string;
  descriptions: string[];
  languages: string[];
}

const doctors: Doctor[] = [
  {
    name: "Dr. Ramesh R Varier",
    image: "/Dr.Ramesh.jpg",
    experience: "35+ Years",
    descriptions: [
      "Dr. Ramesh R Varier, our Managing Director and Senior Physician, graduated as 1st Rank Holder from Madras University in 1986. With over 35 years of mastery in this field, he offers unmatched expertise in musculoskeletal solutions.",
      "Dr. Varier is a pioneer in non-surgical Avascular Necrosis breakthroughs, ensuring pain-free living. Experience the power of his herbal elixirs, including proven Ayurvedic remedies in tablet and capsule form, for your natural wellness.",
      "Discover holistic wellness with Dr. Varier, who optimizes your diet, lifestyle, and mind-body connection. Enjoy multilingual care with clear communication in English, Hindi, Tamil, and Malayalam for your utmost comfort.",
    ],
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
  },
];

const carouselImages = [
  "/1-1.jpg",
  "/1-2.jpg",
  "/2-1.jpg",
  "/2-2.jpg",
  "/3-1.jpg",
  "/3-2.jpg",
  "/4-1.jpg",
  "/5-1.jpg",
  "/6-1.jpg",
];

const MOBILE_BREAKPOINT = 640;
const DESKTOP_BREAKPOINT = 1024;
const IMAGE_GAP = 24;
const AUTOPLAY_DELAY = 3500;

function getVisibleSlides(width: number) {
  if (width >= DESKTOP_BREAKPOINT) return 4;
  if (width >= MOBILE_BREAKPOINT) return 2;
  return 1;
}

const AvnLpDoctorProfile = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const nextVisibleSlides = getVisibleSlides(window.innerWidth);
      setVisibleSlides((currentVisibleSlides) => {
        if (currentVisibleSlides === nextVisibleSlides) return currentVisibleSlides;
        setActiveIndex((currentIndex) =>
          Math.min(currentIndex, Math.max(carouselImages.length - nextVisibleSlides, 0))
        );
        return nextVisibleSlides;
      });
    };
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = Math.max(carouselImages.length - visibleSlides, 0);
  const dotCount = useMemo(() => maxIndex + 1, [maxIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const firstSlide = carousel.querySelector<HTMLElement>("[data-carousel-slide='true']");
    if (!firstSlide) return;
    const slideWidth = firstSlide.offsetWidth;
    carousel.scrollTo({ left: activeIndex * (slideWidth + IMAGE_GAP), behavior: "smooth" });
  }, [activeIndex, visibleSlides]);

  useEffect(() => {
    if (maxIndex === 0 || isAutoplayPaused) return;
    const autoplayTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex === maxIndex ? 0 : currentIndex + 1));
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(autoplayTimer);
  }, [isAutoplayPaused, maxIndex]);

  const handlePrevious = () =>
    setActiveIndex((currentIndex) => (currentIndex === 0 ? maxIndex : currentIndex - 1));

  const handleNext = () =>
    setActiveIndex((currentIndex) => (currentIndex === maxIndex ? 0 : currentIndex + 1));

  return (
    <section className="bg-[linear-gradient(180deg,#f2f7ec_0%,#eef4f8_100%)] px-4 py-10 max-[470px]:py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="flex flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_24px_60px_rgba(17,69,32,0.12)] lg:flex-row"
          >
            <div className="flex items-center justify-center bg-white p-4 sm:p-6 lg:w-2/5 lg:p-8">
              <div className="relative w-full max-w-xs">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:h-80 lg:h-96">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 16rem"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -right-2 -top-2 z-20 rounded-full bg-[#f05623] px-3 py-1 text-xs font-semibold text-white shadow-lg sm:-right-3 sm:-top-3 sm:px-4 sm:py-2 sm:text-sm lg:-right-4 lg:-top-4">
                  {doctor.experience}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-4 text-center sm:gap-5 sm:p-6 lg:w-3/5 lg:gap-6 lg:p-8 lg:text-left">
              <div>
                <h2 className="mb-2 text-xl font-semibold text-[#014214] sm:text-2xl">
                  Meet Our Doctor
                </h2>
                <div className="mx-auto h-1 w-16 rounded bg-[#f05623] sm:w-20 lg:mx-0" />
              </div>

              <h1 className="text-2xl font-bold leading-tight text-[#114520] sm:text-3xl">
                {doctor.name}
              </h1>

              <div className="flex flex-col gap-3 sm:gap-4">
                {doctor.descriptions.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#114520] sm:mb-4 sm:text-xl">
                  Consultation Languages
                </h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                  {doctor.languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-full bg-[#80c141] px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div
          className="relative rounded-[28px] border border-white/70 bg-white/95 px-4 py-8 shadow-[0_20px_50px_rgba(17,69,32,0.1)] sm:px-12 lg:px-16"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
          onFocus={() => setIsAutoplayPaused(true)}
          onBlur={() => setIsAutoplayPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous gallery image"
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f3d9cf] bg-white text-[#f05623] shadow-[0_12px_26px_rgba(15,23,42,0.12)] transition hover:-translate-y-1/2 hover:bg-[#f05623] hover:text-white sm:left-4 sm:h-11 sm:w-11"
          >
            <span aria-hidden="true" className="text-2xl font-semibold leading-none">&lt;</span>
          </button>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-hidden scroll-smooth"
          >
            {carouselImages.map((image, index) => (
              <div
                key={image}
                data-carousel-slide="true"
                className="shrink-0 snap-start"
                style={{
                  width: `calc((100% - ${(visibleSlides - 1) * IMAGE_GAP}px) / ${visibleSlides})`,
                }}
              >
                <div className="relative aspect-[0.93/1] overflow-hidden bg-[#f4f4f4]">
                  <Image
                    src={image}
                    alt={`Doctor consultation gallery ${index + 1}`}
                    fill
                    sizes={
                      visibleSlides === 4
                        ? "(min-width: 1024px) 18rem"
                        : visibleSlides === 2
                          ? "(min-width: 640px) 22rem"
                          : "90vw"
                    }
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next gallery image"
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f3d9cf] bg-white text-[#f05623] shadow-[0_12px_26px_rgba(15,23,42,0.12)] transition hover:-translate-y-1/2 hover:bg-[#f05623] hover:text-white sm:right-4 sm:h-11 sm:w-11"
          >
            <span aria-hidden="true" className="text-2xl font-semibold leading-none">&gt;</span>
          </button>

          {/* <div className="mt-5 flex justify-center gap-3">
            {Array.from({ length: dotCount }, (_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Go to gallery position ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  activeIndex === index ? "bg-black" : "bg-[#d2d2d2]"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AvnLpDoctorProfile;
