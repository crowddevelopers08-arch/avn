"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { KPC_BOOKING_URL } from "./KneePainConsultationCtaButton";

export default function KneePainConsultationHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[#114520]/10 bg-[#fffaf4]/90 shadow-[0_6px_24px_rgba(17,69,32,0.08)] backdrop-blur-md"
          : "border-transparent bg-[#f7efe3]"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-[60px] md:py-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ik.imagekit.io/waseev72f/AVN-logo.png"
          alt="AVN Arogya Ayurvedic Hospital"
          className="h-10 w-auto min-w-0 shrink object-contain object-left sm:h-14 md:h-16"
        />

        <div className="flex shrink-0 items-center">
          <a
            href={KPC_BOOKING_URL}
            className="nsc-btn group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#114520] px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-[0_10px_24px_rgba(17,69,32,0.28)] hover:bg-[#014214] sm:px-5 sm:text-[14px]"
          >
            Book Your Consultation
            <ArrowRight className="h-[16px] w-[16px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
