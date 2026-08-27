'use client';

import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { VideoOffer } from '@/components/VideoOffer';
import { NscAccent } from '@/components/NonSurgicalCareForAvascularNecrosisCtaButton';

export default function NonSurgicalCareForAvascularNecrosisHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7efe3] px-4 pb-9 pt-7 sm:px-6 sm:pb-12 sm:pt-9 md:px-[60px] md:pb-14 md:pt-11"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(17,69,32,0.08) 1px, transparent 1.4px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Soft top-to-bottom fade so the grid melts away */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#f7efe3]/40 to-[#f7efe3]" />

      {/* Decorative outlined rings */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full border border-[#114520]/10" />
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-[#114520]/10" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-[#f05623]/20" />

      {/* Decorative aurora glows */}
      <div className="nsc-blob pointer-events-none absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full bg-[#f05623]/25 blur-[110px]" />
      <div className="nsc-blob-2 pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-[#114520]/12 blur-[120px]" />
      <div className="nsc-blob pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#f05623]/18 blur-[120px]" />

      {/* Floating accent dots */}
      <div className="nsc-glow pointer-events-none absolute left-[10%] top-[24%] h-2 w-2 rounded-full bg-[#f05623]" />
      <div className="nsc-glow pointer-events-none absolute right-[12%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#f05623]" />
      <div className="nsc-glow pointer-events-none absolute bottom-[14%] left-[16%] h-1.5 w-1.5 rounded-full bg-[#114520]/40" />

      <div className="relative mx-auto max-w-[1280px]">
        <AnimateOnScroll animation="fade-up" className="flex flex-col items-center text-center">
          {/* H1 — the full positioning line, set as the page's primary heading */}
          <h1 className="nsc-sweep relative mb-5 max-w-full overflow-hidden rounded-[22px] border border-[#f05623]/40 bg-white/70 px-4 py-2.5 text-[9.5px] font-semibold uppercase leading-[1.75] tracking-[0.12em] text-[#114520] shadow-[0_6px_20px_rgba(240,86,35,0.18)] backdrop-blur-sm sm:rounded-full sm:px-7 sm:text-[10.5px] sm:tracking-[0.14em] lg:whitespace-nowrap lg:text-[11.5px]">
            <span className="nsc-glow mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#f05623] align-middle" />
            Personalised Non-Surgical Care for Avascular Necrosis, Treating
            Patients Across India
          </h1>

          <p className="max-w-4xl text-balance text-[27px] font-extrabold leading-[1.14] text-[#1A1A1A] sm:text-[38px] md:text-[46px] lg:text-[54px]">
            Before You Spend Lakhs on AVN Surgery,{' '}
            <NscAccent tone="orange">Watch This Video First</NscAccent>
          </p>

          <p className="mt-5 max-w-[720px] text-[14px] leading-[1.8] text-[#2B2B2B]/70 sm:text-[15.5px] md:text-[16.5px]">
            We help people explore non-surgical AVN treatment options, even if
            they have been advised to undergo surgery.
          </p>

          {/* Section 2 — the video, then the ₹150 consultation CTA */}
          <div className="mt-7 w-full sm:mt-9">
            <VideoOffer />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
