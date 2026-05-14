"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { withImageKit } from "@/lib/imagekit";
import {
  LpDoctorProfileCards,
  type LpDoctorProfile,
} from "@/components/shared/LpDoctorProfileCards";

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

type LpDoctorProfileSectionProps = {
  doctors: LpDoctorProfile[];
  heading?: string;
};

export function LpDoctorProfileSection({
  doctors,
  heading,
}: LpDoctorProfileSectionProps) {
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
        <LpDoctorProfileCards doctors={doctors} heading={heading} />

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
            <span aria-hidden="true" className="text-2xl font-semibold leading-none">
              &lt;
            </span>
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
                <div className="relative h-52 overflow-hidden rounded-2xl bg-[#f4f4f4] sm:h-52 lg:h-56 xl:h-60">
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
            <span aria-hidden="true" className="text-2xl font-semibold leading-none">
              &gt;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
