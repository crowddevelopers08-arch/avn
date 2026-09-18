"use client";

import {
  Activity,
  ClipboardList,
  FileSearch,
  HeartPulse,
  RefreshCcw,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  KpcAccent,
  KpcCta,
  KpcEyebrow,
} from "@/components/KneePainConsultationCtaButton";

const audience = [
  {
    icon: FileSearch,
    text: "Experience recurring knee pain, stiffness, or discomfort and want to understand the underlying factors affecting their mobility.",
  },
  {
    icon: RefreshCcw,
    text: "Have been advised surgery or knee replacement and are looking for expert guidance before making a decision.",
  },
  {
    icon: Activity,
    text: "Face difficulty while walking, climbing stairs, sitting, or performing daily activities due to knee discomfort.",
  },
  {
    icon: ClipboardList,
    text: "Want a personalised non-surgical care approach based on their symptoms, lifestyle, medical history, and condition assessment.",
  },
  {
    icon: HeartPulse,
    text: "Are looking for expert guidance to support pain management and improve mobility through a structured care plan.",
  },
];

export default function KneePainConsultationWhoFor() {
  return (
    <section
      id="who-is-this-for"
      className="relative bg-[#fffaf4] px-4 pb-7 pt-11 scroll-mt-24 sm:px-6 sm:py-14 md:px-[60px] md:py-16"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Soft corner washes — clipped here, NOT on the section, so the sticky
          card stack below still anchors to the viewport. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="nsc-blob absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-[#f05623]/14 blur-[130px]" />
        <div className="nsc-blob-2 absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#f05623]/14 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
        {/* Left — sticky intro */}
        <AnimateOnScroll animation="fade-up">
          <div className="lg:sticky lg:top-28">
            <KpcEyebrow>Is this you?</KpcEyebrow>

            <h2 className="mt-4 text-balance text-[25px] font-extrabold leading-[1.15] text-[#1A1A1A] sm:text-[34px] md:text-[40px]">
              Who Is This Knee Pain <KpcAccent tone="orange">Care Program</KpcAccent> For?
            </h2>

            <p className="mt-4 max-w-[560px] text-[14px] leading-[1.8] text-[#2B2B2B]/70 sm:text-[15.5px]">
              This personalised knee pain care program is designed for
              individuals looking for deeper clarity about their condition
              through detailed evaluation of symptoms, medical reports,
              lifestyle factors, and mobility challenges to understand suitable
              non-surgical care options.
            </p>

            <KpcCta
              className="mt-6 items-start"
              label="Book Expert 1:1 Call for Just ₹150"
            />
          </div>
        </AnimateOnScroll>

        {/* Right — the five profiles */}
        <div className="relative">
          {/* Vertical rail connecting the numerals */}
          <div className="pointer-events-none absolute bottom-6 left-[26px] top-6 hidden w-px bg-gradient-to-b from-[#f05623]/0 via-[#f05623]/35 to-[#f05623]/0 sm:block" />

          <ul className="flex flex-col gap-3 sm:gap-3.5">
            {audience.map((item, index) => {
              const Icon = item.icon;
              return (
                /* On mobile each card pins under the header and the next one
                   slides over it, leaving a sliver of the card beneath.
                   Reverts to a plain list from `sm` up. */
                <li
                  key={index}
                  className="sticky sm:static"
                  style={{
                    top: `calc(4.5rem + ${index * 12}px)`,
                    zIndex: index + 1,
                  }}
                >
                  <AnimateOnScroll
                    animation="fade-up"
                    delayMs={index * 90}
                    className="group relative flex gap-4 rounded-[20px] border border-[#114520]/8 bg-white p-4 shadow-[0_10px_30px_rgba(17,69,32,0.1)] hover:border-[#f05623]/45 hover:shadow-[0_18px_40px_rgba(17,69,32,0.1)] sm:gap-5 sm:bg-white/80 sm:p-5 sm:shadow-[0_2px_10px_rgba(17,69,32,0.04)] sm:backdrop-blur-sm sm:hover:-translate-y-1 sm:hover:bg-white"
                  >
                    {/* Numeral + icon medallion */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#114520] text-white shadow-[0_10px_24px_rgba(17,69,32,0.25)] transition-colors duration-500 group-hover:bg-[#f05623] group-hover:text-white">
                        <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                      </span>
                      <span className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#f05623]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="self-center text-[14px] leading-[1.75] text-[#2B2B2B]/85 sm:text-[15px]">
                      {item.text}
                    </p>
                  </AnimateOnScroll>
                </li>
              );
            })}
          </ul>

          {/* Small tail so the last card clears the stack cleanly */}
          <div className="h-4 sm:hidden" />
        </div>
      </div>
    </section>
  );
}
