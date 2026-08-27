"use client";

import { useEffect, useState } from "react";
import { Play, Quote, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  NscAccent,
  NscEyebrow,
} from "@/components/NonSurgicalCareForAvascularNecrosisCtaButton";

type PatientStory = {
  /** YouTube video id */
  id: string;
  patient: string;
  story: string;
  duration: string;
};

/** Real patient journeys from the AVN Arogya channel. Add ids here to extend the wall. */
const stories: PatientStory[] = [
  {
    id: "2Eyu-54lSnA",
    patient: "Mr. Gaurav",
    story: "Recovery from AVN without surgery",
    duration: "4:16",
  },
  {
    id: "0Q49zVFX9O8",
    patient: "Mrs. Dhinal",
    story: "Non-surgical recovery journey — AVN of the hip",
    duration: "2:01",
  },
];

function StoryCard({
  story,
  index,
  onPlay,
}: {
  story: PatientStory;
  index: number;
  onPlay: (story: PatientStory) => void;
}) {
  return (
    <AnimateOnScroll animation="fade-up" delayMs={index * 120}>
      <button
        type="button"
        onClick={() => onPlay(story)}
        className="group relative block w-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-2 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#80c141]/40 hover:bg-white/[0.07]"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${story.id}/maxresdefault.jpg`}
            alt={`${story.patient} — ${story.story}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.07]"
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${story.id}/hqdefault.jpg`;
            }}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#000000]/20 to-transparent" />

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/95 shadow-[0_14px_34px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110 sm:h-[66px] sm:w-[66px]">
              <span className="nsc-ring absolute inset-0 rounded-full border-2 border-white/60" />
              <Play className="ml-0.5 h-[24px] w-[24px] fill-[#114520] text-[#114520] sm:h-[27px] sm:w-[27px]" />
            </span>
          </span>

          <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
            {story.duration}
          </span>
        </div>

        <div className="flex items-start gap-3 px-4 pb-4 pt-5">
          <Quote className="mt-0.5 h-5 w-5 shrink-0 fill-[#80c141]/25 text-[#80c141]" />
          <div className="min-w-0">
            <p className="text-[17px] font-bold leading-tight text-white sm:text-[18.5px]">
              {story.patient}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-[1.6] text-white/55 sm:text-[14px]">
              {story.story}
            </p>
          </div>
        </div>
      </button>
    </AnimateOnScroll>
  );
}

export default function NonSurgicalCareForAvascularNecrosisTestimonials() {
  const [active, setActive] = useState<PatientStory | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section
      className="relative overflow-hidden bg-[#014214] px-4 py-11 sm:px-6 sm:py-14 md:px-[60px] md:py-16"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Ambient light */}
      <div className="nsc-blob pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#80c141]/12 blur-[130px]" />
      <div className="nsc-blob-2 pointer-events-none absolute -right-28 bottom-0 h-[380px] w-[380px] rounded-full bg-[#f05623]/12 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-[1120px]">
        <AnimateOnScroll animation="fade-up" className="text-center">
          <NscEyebrow tone="light">In their own words</NscEyebrow>

          <h2 className="mx-auto mt-4 max-w-[860px] text-balance text-[25px] font-extrabold leading-[1.16] text-white sm:text-[34px] md:text-[42px]">
            Real Patient Experiences with{" "}
            <NscAccent tone="lime">AVN</NscAccent>
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-[1.8] text-white/60 sm:text-[15.5px]">
            See What Our Patients Say About Their Journey and How We Supported
            Them
          </p>
        </AnimateOnScroll>

        <div className="mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {stories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              onPlay={setActive}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            className="nsc-pop relative w-full max-w-[900px]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.patient} — ${active.story}`}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25"
            >
              <X size={19} />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-[20px] bg-black shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&playsinline=1&rel=0`}
                title={`${active.patient} — ${active.story}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
