"use client";

import { CalendarCheck } from "lucide-react";
import { BPS_BOOKING_URL } from "./BackPainSciaticaConsultationCtaButton";

export default function BackPainSciaticaConsultationFooter() {
  return (
    <>
      <footer
        className="w-full bg-[#000000]"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3.5 px-4 py-6 sm:px-6 sm:py-7 md:px-[60px]">
          {/* Logo sits on a light plate so it keeps its own brand colours */}
          <span className="inline-flex items-center justify-center rounded-2xl bg-[#fffaf4] px-5 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ik.imagekit.io/waseev72f/AVN-logo.png"
              alt="AVN Arogya Ayurvedic Hospital"
              className="h-11 w-auto max-w-full object-contain sm:h-13"
            />
          </span>

          <a
            href="/privacy-policy-backpain"
            className="text-[13.5px] text-white/55 transition-colors hover:text-[#80c141] sm:text-[14.5px]"
          >
            Privacy Policy
          </a>

          <p className="border-t border-white/8 pt-3.5 text-center text-[12px] text-white/35 sm:text-[13px]">
            2026 © All Rights Reserved | AVN Arogya Ayurvedic Hospital
          </p>
        </div>

        {/* Clears the sticky mobile action bar */}
        <div className="h-[68px] sm:hidden" />
      </footer>

      {/* Sticky mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex sm:hidden">
        <div className="flex w-full items-stretch border-t border-black/10 bg-white shadow-[0_-6px_22px_rgba(0,0,0,0.12)]">
          <a
            href={BPS_BOOKING_URL}
            className="nsc-btn flex min-h-[62px] w-full items-center justify-center gap-2 bg-[#114520] text-[14.5px] font-bold text-white active:bg-[#014214]"
          >
            <CalendarCheck className="h-[18px] w-[18px]" />
            Book Your 1:1 Call at ₹150
          </a>
        </div>
      </div>
    </>
  );
}
