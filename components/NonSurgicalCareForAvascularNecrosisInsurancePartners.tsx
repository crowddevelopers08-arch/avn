"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  NscAccent,
  NscEyebrow,
} from "@/components/NonSurgicalCareForAvascularNecrosisCtaButton";

const insuranceCompanies = [
  "Bajaj Allianz",
  "Liberty General",
  "Cholamandalam",
  "Niva Bupa",
  "Reliance",
  "Aditya Birla",
  "TATA AIG",
  "SBI",
  "Go Digit",
  "Navi",
  "ManipalCigna",
  "Zuno General Insurance",
];

const tpaPartners = [
  "Vidal Health",
  "Vipul Medcorp",
  "Good Health",
  "Safeway",
  "Ericson",
  "Paramount",
  "FHPL",
  "Heritage Health",
  "Health India Insurance",
];

type Tab = "insurance" | "tpa";

export default function NonSurgicalCareForAvascularNecrosisInsurancePartners() {
  const [activeTab, setActiveTab] = useState<Tab>("insurance");
  const partners = activeTab === "insurance" ? insuranceCompanies : tpaPartners;

  return (
    <section
      className="relative overflow-hidden bg-[#fffaf4] px-4 py-11 sm:px-6 sm:py-14 md:px-[60px] md:py-16"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="nsc-blob pointer-events-none absolute -left-24 top-8 h-[320px] w-[320px] rounded-full bg-[#f05623]/12 blur-[130px]" />
      <div className="nsc-blob-2 pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#f05623]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1100px]">
        <AnimateOnScroll animation="fade-up" className="text-center">
          <NscEyebrow>Cashless treatment</NscEyebrow>

          <h2 className="mx-auto mt-4 max-w-[700px] text-balance text-[25px] font-extrabold leading-[1.15] text-[#1A1A1A] sm:text-[32px] md:text-[38px]">
            Insurance &amp; <NscAccent tone="orange">TPA Partners</NscAccent>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-[1.8] text-[#2B2B2B]/70 sm:text-[15.5px]">
            We offer cashless treatment in partnership with India&apos;s top
            insurance and TPA providers.
          </p>
        </AnimateOnScroll>

        {/* Segmented control */}
        <AnimateOnScroll animation="fade-up" delayMs={100} className="mt-6 flex justify-center sm:mt-8">
          <div
            role="tablist"
            aria-label="Partner type"
            className="flex w-full max-w-[420px] gap-1 rounded-full border border-[#114520]/10 bg-white/80 p-1.5 shadow-[0_6px_20px_rgba(17,69,32,0.06)] backdrop-blur-sm"
          >
            {(
              [
                { key: "insurance", label: "Insurance" },
                { key: "tpa", label: "TPA Partners" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 rounded-full px-3 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:py-3 sm:text-[14.5px] ${
                  activeTab === tab.key
                    ? "bg-[#114520] text-white shadow-[0_8px_20px_rgba(17,69,32,0.25)]"
                    : "text-[#2B2B2B]/60 hover:text-[#114520]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Partner grid — keyed so cards restagger on tab change */}
        <div
          key={activeTab}
          className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4"
        >
          {partners.map((partner, index) => (
            <AnimateOnScroll
              key={partner}
              animation="fade-up"
              delayMs={index * 45}
              className="group flex min-h-[62px] items-center justify-center gap-2 rounded-2xl border border-[#114520]/10 bg-white/85 px-3 py-3 text-center backdrop-blur-sm hover:-translate-y-1 hover:border-[#f05623]/60 hover:shadow-[0_14px_30px_rgba(17,69,32,0.09)] sm:min-h-[72px] sm:px-4"
            >
              <ShieldCheck
                className="hidden h-4 w-4 shrink-0 text-[#f05623] sm:block"
                strokeWidth={2}
              />
              <span className="min-w-0 break-words text-[12.5px] font-semibold leading-[1.4] text-[#114520] sm:text-[13.5px]">
                {partner}
              </span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
