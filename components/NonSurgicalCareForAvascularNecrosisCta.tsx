"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  NscAccent,
  NscCta,
} from "@/components/NonSurgicalCareForAvascularNecrosisCtaButton";

export default function NonSurgicalCareForAvascularNecrosisCta() {
  return (
    <section
      className="relative overflow-hidden bg-[#fffaf4] px-4 py-11 sm:px-6 sm:py-14 md:px-[60px] md:py-16"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="relative mx-auto max-w-[1080px]">
        <AnimateOnScroll animation="fade-up">
          <div className="relative overflow-hidden rounded-[28px] bg-[#114520] px-5 py-10 text-center shadow-[0_40px_100px_rgba(17,69,32,0.3)] sm:px-12 sm:py-13 md:py-14">
            {/* Ambient light inside the card */}
            <div className="nsc-blob pointer-events-none absolute -left-20 -top-20 h-[340px] w-[340px] rounded-full bg-[#80c141]/22 blur-[110px]" />
            <div className="nsc-blob-2 pointer-events-none absolute -bottom-24 -right-16 h-[340px] w-[340px] rounded-full bg-[#f05623]/20 blur-[110px]" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1.4px)",
                backgroundSize: "26px 26px",
              }}
            />
            {/* Concentric rings */}
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/8" />
            <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-white/8" />

            <div className="relative">
              <span className="nsc-sweep relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#80c141]/40 bg-white/8 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#80c141] backdrop-blur-sm sm:text-[11px]">
                <span className="nsc-glow h-1.5 w-1.5 rounded-full bg-[#f05623]" />
                One call could change the plan
              </span>

              <h2 className="mx-auto mt-5 max-w-[760px] text-balance text-[25px] font-extrabold leading-[1.2] text-white sm:text-[35px] md:text-[43px]">
                Ready to live your life peacefully with{" "}
                <NscAccent tone="lime">better AVN care</NscAccent>?
              </h2>

              <NscCta
                className="mt-7"
                label="Book Expert 1:1 Call for Just ₹150"
                variant="orange"
                trust
                trustTone="light"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
