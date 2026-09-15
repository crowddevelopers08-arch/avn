"use client";

import { useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  FileHeart,
  Phone,
  PhoneCall,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";
import AvnLpHeader from "@/components/AvnLpHeader";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

/** Call-centre number used across the AVN LP / Knee LP pages. */
const LP_PHONE_DISPLAY = "+91 80470-91234";
const LP_PHONE_TEL = "+918047091234";

export type AvnLpThankYouConfig = {
  /** Landing page this thank-you page belongs to ("Back to the page"). */
  landingPage: string;
  /** Google Ads conversion `send_to` fired when the visitor lands here. */
  conversionSendTo: string;
  /** Condition name as used in copy, e.g. "AVN" or "knee pain". */
  condition: string;
  /** Scans / reports worth keeping ready for the call. */
  checklist: string[];
  /** Privacy policy linked in the footer. */
  privacyPolicy: string;
};

const trust = [
  { icon: ShieldCheck, label: "First NABH-accredited Ayurvedic hospital in Tamil Nadu" },
  { icon: Star, label: "Trusted by 1 lakh+ patients" },
  { icon: CheckCircle2, label: "90+ years of Ayurvedic care across 4 generations" },
];

export default function AvnLpThankYou({
  landingPage,
  conversionSendTo,
  condition,
  checklist,
  privacyPolicy,
}: AvnLpThankYouConfig) {
  // Google Ads conversion — fires once, when the visitor lands here after the form.
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", { send_to: conversionSendTo });
    }
  }, [conversionSendTo]);

  const steps = [
    {
      icon: PhoneCall,
      title: "Our care coordinator calls you",
      body: "Within 24 hours, on the number you shared, to understand your concern and fix a convenient slot.",
    },
    {
      icon: UserCheck,
      title: "Consultation with our specialist",
      body: `An experienced Ayurvedic doctor goes through your ${condition} history, symptoms and reports.`,
    },
    {
      icon: FileHeart,
      title: "Your personalised treatment plan",
      body: "You get a clear, non-surgical plan — what it involves, how long it takes and what to expect.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fffaf4] pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />

      {/* Confirmation hero */}
      <section className="relative overflow-hidden bg-[#F0DDD3] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-10">
        <div className="relative mx-auto max-w-[820px] text-center">
          <AnimateOnScroll animation="fade-up">
            <a
              href={landingPage}
              className="group mb-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#114520]/70 transition-colors hover:text-[#114520] sm:text-[14px]"
            >
              <ArrowLeft className="h-[16px] w-[16px] shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to the page
            </a>

            <div className="relative mx-auto mb-6 flex h-[86px] w-[86px] items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#80c141]/25" />
              <span className="absolute inset-[8px] rounded-full bg-white" />
              <CheckCircle2
                className="relative h-[54px] w-[54px] text-[#114520]"
                strokeWidth={2.2}
              />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D94E1A] sm:text-[12px]">
              Request received
            </span>

            <h1 className="mx-auto mt-3 max-w-[720px] text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:text-[2.65rem]">
              Thank you — your appointment request is{" "}
              <span className="text-[#D94E1A]">confirmed</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-gray-700 sm:text-lg">
              Our team has your details and will call you within{" "}
              <span className="font-semibold text-[#114520]">24 hours</span> to
              book your consultation for {condition} treatment at AVN Arogya.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What happens next */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-[1080px]">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center text-[24px] font-extrabold leading-[1.25] text-[#114520] sm:text-[32px]">
              What happens <span className="text-[#D94E1A]">next</span>
            </h2>
          </AnimateOnScroll>

          <div className="mt-9 grid gap-4 sm:mt-11 sm:grid-cols-3 sm:gap-5">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.title} animation="fade-up" delayMs={index * 80}>
                <div className="flex h-full flex-col rounded-[22px] border border-[#114520]/10 bg-white p-6 shadow-[0_18px_44px_rgba(17,69,32,0.07)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e9] text-[#D94E1A]">
                      <step.icon className="h-[21px] w-[21px]" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#114520]/60">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[17px] font-bold leading-[1.3] text-[#114520] sm:text-[18.5px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-gray-600 sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Prep checklist + contact card */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-14 lg:px-10">
        <div className="mx-auto grid max-w-[1080px] gap-5 md:grid-cols-[1.15fr_1fr]">
          <AnimateOnScroll animation="fade-up">
            <div className="h-full rounded-[24px] border border-[#114520]/10 bg-[#f4f9f1] p-6 sm:p-8">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#114520]/70">
                <ClipboardList className="h-[15px] w-[15px] text-[#D94E1A]" />
                Keep these ready
              </span>

              <h3 className="mt-4 text-[20px] font-extrabold leading-[1.28] text-[#114520] sm:text-[24px]">
                A few things that make your consultation more useful
              </h3>

              <ul className="mt-5 space-y-3.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[3px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#80c141]">
                      <CheckCircle2 className="h-[13px] w-[13px] text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] leading-[1.6] text-gray-700 sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <div className="flex h-full flex-col items-center justify-center rounded-[24px] bg-[#114520] p-6 text-center sm:p-8">
              <h3 className="text-[20px] font-extrabold leading-[1.3] text-white sm:text-[23px]">
                Can&apos;t wait for our call?
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-white/70 sm:text-[15px]">
                Speak to our team directly — Mon–Sun, 8 AM to 8 PM.
              </p>

              <a
                href={`tel:${LP_PHONE_TEL}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#D94E1A] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_34px_rgba(217,78,26,0.38)] transition-colors hover:bg-[#80c141] sm:w-auto sm:px-9"
              >
                <Phone className="h-[17px] w-[17px] shrink-0" />
                {LP_PHONE_DISPLAY}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10">
        <div className="mx-auto grid max-w-[1080px] gap-3 sm:grid-cols-3 sm:gap-4">
          {trust.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-[18px] border border-[#114520]/10 bg-white px-5 py-4"
            >
              <item.icon className="h-[19px] w-[19px] shrink-0 text-[#D94E1A]" />
              <span className="text-[13px] font-medium leading-[1.45] text-gray-700 sm:text-[14px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer — no "Book Now" bar, the visitor has already submitted the form */}
      <footer className="w-full bg-[#114520]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3.5 px-4 py-7 sm:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/waseev72f/AVN-logo.png"
            alt="AVN Arogya Ayurvedic Hospital"
            className="h-auto w-[200px] object-contain sm:w-[260px]"
          />

          <a
            href={privacyPolicy}
            className="text-[14px] text-white/60 transition-colors hover:text-[#80c141]"
          >
            Privacy Policy
          </a>

          <p className="border-t border-white/10 pt-3.5 text-center text-[12px] text-white/45 sm:text-[13px]">
            {new Date().getFullYear()} © All Rights Reserved | AVN Arogya
            Ayurvedic Hospital
          </p>
        </div>
      </footer>
    </main>
  );
}
