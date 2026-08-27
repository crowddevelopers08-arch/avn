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
  NscAccent,
  NscCta,
  NscEyebrow,
} from "@/components/NonSurgicalCareForAvascularNecrosisCtaButton";

const audience = [
  {
    icon: FileSearch,
    text: "Have been diagnosed with Avascular Necrosis (AVN) and want to understand their condition better through detailed evaluation and guidance.",
  },
  {
    icon: RefreshCcw,
    text: "Have been advised surgery or hip replacement and are looking for a second opinion before making a decision.",
  },
  {
    icon: Activity,
    text: "Experience hip pain, joint discomfort, stiffness, or mobility difficulties affecting their daily activities.",
  },
  {
    icon: ClipboardList,
    text: "Want a personalised non-surgical care approach based on their symptoms, medical reports, lifestyle, and condition assessment.",
  },
  {
    icon: HeartPulse,
    text: "Are looking for expert guidance to support pain management and improve mobility through a structured treatment plan.",
  },
];

export default function NonSurgicalCareForAvascularNecrosisWhoFor() {
  return (
    <section
      id="who-is-this-for"
      className="relative overflow-hidden bg-[#fffaf4] px-4 py-11 scroll-mt-24 sm:px-6 sm:py-14 md:px-[60px] md:py-16"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Soft corner washes */}
      <div className="nsc-blob pointer-events-none absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-[#f05623]/14 blur-[130px]" />
      <div className="nsc-blob-2 pointer-events-none absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#f05623]/14 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
        {/* Left — sticky intro */}
        <AnimateOnScroll animation="fade-up">
          <div className="lg:sticky lg:top-28">
            <NscEyebrow>Is this you?</NscEyebrow>

            <h2 className="mt-4 text-balance text-[25px] font-extrabold leading-[1.15] text-[#1A1A1A] sm:text-[34px] md:text-[40px]">
              Who Is This AVN <NscAccent tone="orange">Treatment Program</NscAccent> For?
            </h2>

            <p className="mt-4 max-w-[560px] text-[14px] leading-[1.8] text-[#2B2B2B]/70 sm:text-[15.5px]">
              This personalised treatment program is designed for individuals
              seeking deeper clarity about their Avascular Necrosis (AVN)
              condition, with detailed evaluation of symptoms, medical reports,
              lifestyle factors, and stage-based assessment to understand
              suitable non-surgical care options and support better mobility.
            </p>

            <NscCta
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
                <li key={index}>
                  <AnimateOnScroll
                    animation="fade-up"
                    delayMs={index * 90}
                    className="group relative flex gap-4 rounded-[20px] border border-[#114520]/8 bg-white/80 p-4 shadow-[0_2px_10px_rgba(17,69,32,0.04)] backdrop-blur-sm hover:-translate-y-1 hover:border-[#f05623]/45 hover:bg-white hover:shadow-[0_18px_40px_rgba(17,69,32,0.1)] sm:gap-5 sm:p-5"
                  >
                    {/* Numeral + icon medallion */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#114520] text-white shadow-[0_10px_24px_rgba(17,69,32,0.25)] transition-colors duration-500 group-hover:bg-[#f05623] group-hover:text-[#1A1A1A]">
                        <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                      </span>
                      <span className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#f05623]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="self-center text-[14px] leading-[1.8] text-[#2B2B2B]/85 sm:text-[15px]">
                      {item.text}
                    </p>
                  </AnimateOnScroll>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
