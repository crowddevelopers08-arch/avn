"use client";

import { Check } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  KpcAccent,
  KpcCta,
  KpcEyebrow,
} from "@/components/KneePainConsultationCtaButton";

const lineItems = [
  { label: "1:1 Knee Pain Specialist Consultation", price: "₹1,500" },
  { label: "X-Ray/MRI Report Review & Condition Assessment", price: "₹500" },
  { label: "Knee Condition Evaluation & Guidance", price: "₹500" },
  { label: "Personalised Non-Surgical Care Plan", price: "₹1,000" },
  { label: "Mobility & Lifestyle Guidance Session", price: "₹500" },
  { label: "Pain Management & Daily Activity Guidance", price: "₹500" },
  { label: "Follow-up Support & Progress Review", price: "₹1,000" },
];

/** Headline value as given in the LP copy. */
const TOTAL_VALUE = "₹6,000";
const OFFER_PRICE = "₹150";
const SAVINGS = "₹5,850";

export default function KneePainConsultationValueStack() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#014214] px-4 py-11 scroll-mt-24 sm:px-6 sm:py-14 md:px-[60px] md:py-16"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="nsc-blob pointer-events-none absolute -left-28 top-0 h-[420px] w-[420px] rounded-full bg-[#80c141]/14 blur-[130px]" />
      <div className="nsc-blob-2 pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#f05623]/12 blur-[130px]" />

      <div className="relative mx-auto max-w-[1040px]">
        <AnimateOnScroll animation="fade-up" className="text-center">
          <KpcEyebrow tone="light">Everything included</KpcEyebrow>
          <h2 className="mx-auto mt-4 max-w-[680px] text-balance text-[25px] font-extrabold leading-[1.15] text-white sm:text-[34px] md:text-[40px]">
            Start Your Knee Pain Care <KpcAccent tone="lime">Journey Today</KpcAccent>
          </h2>
        </AnimateOnScroll>

        {/* The receipt */}
        <AnimateOnScroll animation="fade-up" delayMs={120} className="mt-7 sm:mt-9">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#80c141]/60 via-white/25 to-[#f05623]/40 p-[1.5px] shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
            <div className="rounded-[27px] bg-[#fffaf4]">
              {/* Line items */}
              <div className="relative px-5 pb-1.5 pt-5 sm:px-8 sm:pt-6">
                {/* Column rule, only once the list splits in two */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-px -translate-x-1/2 border-l border-dashed border-[#114520]/12 lg:block"
                />

                {/* Seven items: on two columns the 6th sits alone above the gap
                    beside the 7th, so it drops its rule too. */}
                <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
                  {lineItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 border-b border-dashed border-[#114520]/12 py-2.5 last:border-b-0 sm:py-3 lg:[&:nth-child(6)]:border-b-0"
                    >
                      <Check
                        className="mt-[3px] h-[16px] w-[16px] shrink-0 text-[#114520] sm:h-[17px] sm:w-[17px]"
                        strokeWidth={2.6}
                      />
                      <span className="min-w-0 flex-1 text-[13px] leading-[1.6] text-[#1A1A1A] sm:flex-none sm:text-[14.5px]">
                        {item.label}
                      </span>
                      <span className="nsc-leader hidden sm:block" />
                      <span className="shrink-0 self-center pl-2 text-[13px] font-bold text-[#114520] sm:pl-0 sm:text-[14.5px]">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Total value */}
              <div className="mx-5 flex items-center justify-between gap-4 rounded-2xl bg-[#114520]/6 px-4 py-3 sm:mx-8 sm:px-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#114520]/70 sm:text-[12px]">
                  Total value
                </span>
                <span className="text-[17px] font-extrabold text-[#114520]/45 line-through decoration-[#f05623] decoration-2 sm:text-[19px]">
                  {TOTAL_VALUE}
                </span>
              </div>

              {/* Perforation */}
              <div className="relative mt-5 h-px w-full border-t border-dashed border-[#114520]/18">
                <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#014214]" />
                <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-[#014214]" />
              </div>

              {/* The offer */}
              <div className="px-5 pb-6 pt-5 text-center sm:px-8 sm:pb-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f05623]/18 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c2431a]">
                  <span className="nsc-glow h-1.5 w-1.5 rounded-full bg-[#f05623]" />
                  You save {SAVINGS}
                </span>

                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2B2B2B]/50 sm:text-[13px]">
                  Start your knee pain care journey today
                </p>

                <div className="mt-1.5 flex items-end justify-center gap-3">
                  <span className="text-[46px] font-extrabold leading-none tracking-[-0.02em] text-[#114520] sm:text-[60px]">
                    {OFFER_PRICE}
                  </span>
                  <span className="pb-1.5 text-[15px] font-semibold text-[#2B2B2B]/40 line-through sm:text-[18px]">
                    {TOTAL_VALUE}
                  </span>
                </div>

                <KpcCta
                  className="mt-6"
                  label="Book Expert 1:1 Call for Just ₹150"
                  trust
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
