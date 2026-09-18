"use client";

import { useEffect } from "react";
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileHeart,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  KpcAccent,
  KpcEyebrow,
} from "@/components/KneePainConsultationCtaButton";

/** Care-coordinator number used across this landing page. */
const KPC_PHONE_DISPLAY = "+91 95002 92220";
const KPC_PHONE_TEL = "+919500292220";
const KPC_WHATSAPP = "https://wa.me/919500292220";

/** Landing page this thank-you page belongs to. */
const KPC_LANDING_PAGE = "/direct-consultation-knee-pain";

/**
 * Google Ads purchase conversion for the knee pain landing page.
 *
 * TODO: paste this page's own conversion `send_to` (AW-XXXXXXXXX/label) here.
 * While it is null nothing fires.
 */
const KPC_CONVERSION_SEND_TO: string | null = null;

const steps = [
  {
    icon: CalendarCheck,
    title: "Check your inbox & WhatsApp",
    body: "Your booking confirmation with the date, time and call link is already on its way from AVN Arogya.",
  },
  {
    icon: Phone,
    title: "Our care coordinator calls you",
    body: "We confirm your slot, note your knee pain history, and collect any scans or reports you already have.",
  },
  {
    icon: FileHeart,
    title: "Your 1:1 call with the specialist",
    body: "We review your X-ray or MRI, understand what is affecting your knee, and lay out what non-surgical care would look like for you.",
  },
];

const checklist = [
  "Your most recent X-ray or MRI of the knee",
  "A list of medicines you are currently taking",
  "How long you have had the pain, and what makes it worse",
  "Anything a previous doctor or surgeon has already advised",
];

const trust = [
  { icon: ShieldCheck, label: "First NABH-accredited Ayurvedic hospital in Tamil Nadu" },
  { icon: Star, label: "4.7/5 from thousands of patients" },
  { icon: CheckCircle2, label: "95+ years of Ayurvedic care since 1930" },
];

export default function KneePainConsultationThankYou() {
  // Google Ads conversion — fires once, when the visitor lands here after booking.
  useEffect(() => {
    if (!KPC_CONVERSION_SEND_TO) return;
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: KPC_CONVERSION_SEND_TO,
        transaction_id: "",
      });
    }
  }, []);

  return (
    <main
      className="min-h-screen w-full bg-[#fffaf4]"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Header — logo only: there is nothing left to book on this page */}
      <header className="w-full border-b border-transparent bg-[#f7efe3]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-[60px] md:py-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/waseev72f/AVN-logo.png"
            alt="AVN Arogya Ayurvedic Hospital"
            className="h-10 w-auto min-w-0 shrink object-contain object-left sm:h-14 md:h-16"
          />

          <a
            href={KPC_LANDING_PAGE}
            className="group inline-flex shrink-0 items-center gap-2 text-[12.5px] font-semibold text-[#114520]/70 transition-colors hover:text-[#114520] sm:text-[14px]"
          >
            <ArrowLeft className="h-[16px] w-[16px] shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to the page
          </a>
        </div>
      </header>

      {/* Confirmation hero */}
      <section className="relative overflow-hidden px-4 pb-11 pt-10 sm:px-6 sm:pb-14 sm:pt-14 md:px-[60px]">
        <div className="nsc-blob pointer-events-none absolute -left-24 -top-28 h-[360px] w-[360px] rounded-full bg-[#80c141]/18 blur-[120px]" />
        <div className="nsc-blob-2 pointer-events-none absolute -right-24 top-10 h-[340px] w-[340px] rounded-full bg-[#f05623]/14 blur-[120px]" />

        <div className="relative mx-auto max-w-[820px] text-center">
          <AnimateOnScroll animation="fade-up">
            {/* Tick, sitting in a soft pulsing ring */}
            <div className="relative mx-auto mb-6 flex h-[86px] w-[86px] items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-[#80c141]/25" />
              <span className="nsc-glow absolute inset-[10px] rounded-full bg-[#80c141]/35" />
              <CheckCircle2
                className="relative h-[54px] w-[54px] text-[#114520]"
                strokeWidth={2.2}
              />
            </div>

            <KpcEyebrow>Your slot is booked</KpcEyebrow>

            <h1 className="mx-auto mt-4 max-w-[720px] text-balance text-[28px] font-extrabold leading-[1.18] text-[#114520] sm:text-[38px] md:text-[46px]">
              Thank you — your{" "}
              <KpcAccent tone="orange">1:1 knee pain call</KpcAccent> is confirmed
            </h1>

            <p className="mx-auto mt-5 max-w-[620px] text-[14.5px] leading-[1.65] text-[#2B2B2B]/70 sm:text-[16.5px]">
              You have taken the step most people put off for years. Our team is
              already reviewing your details, and you will hear from us shortly
              on the number you booked with.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What happens next */}
      <section className="relative px-4 pb-12 sm:px-6 sm:pb-14 md:px-[60px]">
        <div className="mx-auto max-w-[1080px]">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center text-[22px] font-extrabold leading-[1.25] text-[#114520] sm:text-[30px] md:text-[34px]">
              What happens <KpcAccent>next</KpcAccent>
            </h2>
          </AnimateOnScroll>

          <div className="mt-9 grid gap-4 sm:mt-11 sm:grid-cols-3 sm:gap-5">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.title} animation="fade-up">
                <div className="flex h-full flex-col rounded-[22px] border border-[#114520]/10 bg-white p-6 shadow-[0_18px_44px_rgba(17,69,32,0.07)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f9f1] text-[#114520]">
                      <step.icon className="h-[21px] w-[21px]" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f05623]">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[17px] font-bold leading-[1.3] text-[#114520] sm:text-[18.5px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[#2B2B2B]/65 sm:text-[14.5px]">
                    {step.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Prep checklist + contact card */}
      <section className="relative px-4 pb-12 sm:px-6 sm:pb-14 md:px-[60px]">
        <div className="mx-auto grid max-w-[1080px] gap-5 md:grid-cols-[1.15fr_1fr]">
          <AnimateOnScroll animation="fade-up">
            <div className="h-full rounded-[24px] border border-[#114520]/10 bg-[#f4f9f1] p-6 sm:p-8">
              <span className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#114520]/70 sm:text-[11px]">
                <ClipboardList className="h-[15px] w-[15px] text-[#f05623]" />
                Keep these ready
              </span>

              <h3 className="mt-4 text-[20px] font-extrabold leading-[1.28] text-[#114520] sm:text-[24px]">
                Four things that make your call far more useful
              </h3>

              <ul className="mt-5 space-y-3.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[3px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#80c141]">
                      <CheckCircle2 className="h-[13px] w-[13px] text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[13.5px] leading-[1.6] text-[#2B2B2B]/75 sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <div className="relative h-full overflow-hidden rounded-[24px] bg-[#114520] p-6 text-center sm:p-8">
              <div className="nsc-blob pointer-events-none absolute -right-16 -top-16 h-[240px] w-[240px] rounded-full bg-[#80c141]/22 blur-[90px]" />

              <div className="relative flex h-full flex-col items-center justify-center">
                <h3 className="text-[19px] font-extrabold leading-[1.3] text-white sm:text-[22px]">
                  Something urgent before the call?
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-white/65 sm:text-[14.5px]">
                  Our coordinators are available Mon–Sun, 8 AM to 8 PM.
                </p>

                <a
                  href={`tel:${KPC_PHONE_TEL}`}
                  className="nsc-btn mt-6 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#f05623] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_14px_34px_rgba(240,86,35,0.38)] hover:bg-[#d4561d] sm:w-auto sm:px-9"
                >
                  <Phone className="h-[17px] w-[17px] shrink-0" />
                  {KPC_PHONE_DISPLAY}
                </a>

                <a
                  href={KPC_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#80c141] transition-colors hover:text-white sm:text-[14px]"
                >
                  <MessageCircle className="h-[16px] w-[16px] shrink-0" />
                  Or message us on WhatsApp
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 md:px-[60px]">
        <div className="mx-auto grid max-w-[1080px] gap-3 sm:grid-cols-3 sm:gap-4">
          {trust.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-[18px] border border-[#114520]/10 bg-white px-5 py-4"
            >
              <item.icon className="h-[19px] w-[19px] shrink-0 text-[#f05623]" />
              <span className="text-[12.5px] font-medium leading-[1.45] text-[#2B2B2B]/70 sm:text-[13.5px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer — no sticky booking bar, the visitor has already booked */}
      <footer className="w-full bg-[#000000]">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3.5 px-4 py-6 sm:px-6 sm:py-7 md:px-[60px]">
          <span className="inline-flex items-center justify-center rounded-2xl bg-[#fffaf4] px-5 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ik.imagekit.io/waseev72f/AVN-logo.png"
              alt="AVN Arogya Ayurvedic Hospital"
              className="h-11 w-auto max-w-full object-contain sm:h-13"
            />
          </span>

          <a
            href="/privacy-policy-knee"
            className="text-[13.5px] text-white/55 transition-colors hover:text-[#80c141] sm:text-[14.5px]"
          >
            Privacy Policy
          </a>

          <p className="border-t border-white/8 pt-3.5 text-center text-[12px] text-white/35 sm:text-[13px]">
            {new Date().getFullYear()} © All Rights Reserved | AVN Arogya
            Ayurvedic Hospital
          </p>
        </div>
      </footer>
    </main>
  );
}
