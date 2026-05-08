"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { withImageKit } from "@/lib/imagekit";

interface Doctor {
  name: string;
  image: string;
  experience: string;
  title: string;
  specialization: string;
  description: string;
  education: string;
  achievements?: string;
  languages: string[];
}

const doctors: Doctor[] = [
  {
    name: "Dr. Ramesh R Varier",
    image: withImageKit("/Dr.Ramesh.jpg"),
    experience: "35+ Years",
    title: "Managing Director and Senior Physician",
    specialization: "Treatment of Musculoskeletal and Spinal Conditions",
    description:
      "Dr. Ramesh R Varier graduated as 1st Rank Holder from Madras University in 1986. With over 35 years of mastery in musculoskeletal and spinal conditions, he offers unmatched expertise in cervical and spine care.",
    education:
      "Pioneer in non-surgical Cervical Spondylosis treatment, delivering lasting relief from neck pain, nerve compression, and stiffness through proven Ayurvedic protocols and herbal formulations.",
    achievements:
      "Guides patients toward holistic wellness by optimizing diet, lifestyle, and mind-body balance with clear multilingual care.",
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
  },
  {
    name: "Dr. Sridevi Rajeev",
    image: withImageKit("/doctwo.jpg"),
    experience: "32 Years",
    title: "Director and Chief Physician",
    specialization: "Treatment of Musculoskeletal, Rheumatological and Developmental Disorders",
    description:
      "Dr. Sridevi Rajeev is a highly accomplished Ayurvedic physician with exceptional expertise in treating complex musculoskeletal and rheumatological conditions. Her compassionate approach and deep understanding of developmental disorders make her a trusted healer.",
    education:
      "B.A.M.S (1st Rank Holder from Mahatma Gandhi University). Fine-tuning Ayurvedic Therapies for personalized treatment protocols. Great listener and healer.",
    achievements:
      "Treated more than 3,500 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
  {
    name: "Dr. Biju Madhavan",
    image: withImageKit("/docthree.jpg"),
    experience: "23 Years",
    title: "Medical Superintendent",
    specialization: "Treatment of Musculoskeletal and Neurological Disorders",
    description:
      "Dr. Biju Madhavan brings extensive expertise in integrating traditional Ayurvedic wisdom with modern medical diagnostics. His holistic approach to treating musculoskeletal and neurological disorders has helped numerous patients achieve optimal health.",
    education:
      "MD (Ayu) - integrates Ayurvedic treatment with modern diagnostics and therapeutic methods; a strong proponent of holistic healing.",
    achievements:
      "Treated more than 5,000 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
];

const carouselImages = [
  withImageKit("/1-1.jpg"),
  withImageKit("/1-2.jpg"),
  withImageKit("/2-1.jpg"),
  withImageKit("/2-2.jpg"),
  withImageKit("/3-1.jpg"),
  withImageKit("/3-2.jpg"),
  withImageKit("/4-1.jpg"),
  withImageKit("/5-1.jpg"),
  withImageKit("/6-1.jpg"),
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

const CsLpDoctorProfile = () => {
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
                  Meet Your Doctor
                </h2>
                <div className="mx-auto h-1 w-16 rounded bg-[#f05623] sm:w-20 lg:mx-0" />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold leading-tight text-[#114520] sm:text-3xl">
                  {doctor.name}
                </h1>
                <p className="text-lg font-semibold leading-snug text-[#80c141] sm:text-xl">
                  {doctor.title}
                </p>
                <p className="text-base font-medium text-[#f05623] sm:text-lg">
                  {doctor.specialization}
                </p>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {doctor.description}
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-[#014214] sm:mb-3 sm:text-xl">
                  Education & Expertise
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {doctor.education}
                </p>
              </div>

              {doctor.achievements ? (
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#014214] sm:mb-3 sm:text-xl">
                    Achievements
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {doctor.achievements}
                  </p>
                </div>
              ) : null}

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
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f3d9cf] bg-white text-[#f05623] shadow-[0_12px_26px_rgba(15,23,42,0.12)] transition hover:-translate-y-1/2 hover:bg-[#80c141] hover:text-white sm:left-4 sm:h-11 sm:w-11"
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
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f3d9cf] bg-white text-[#f05623] shadow-[0_12px_26px_rgba(15,23,42,0.12)] transition hover:-translate-y-1/2 hover:bg-[#80c141] hover:text-white sm:right-4 sm:h-11 sm:w-11"
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

export default CsLpDoctorProfile;
