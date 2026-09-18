"use client";

import { AlertTriangle, ClipboardCheck, Footprints, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { withImageKit } from "@/lib/imagekit";
import {
  BpsAccent,
  BpsCta,
  BpsEyebrow,
} from "@/components/BackPainSciaticaConsultationCtaButton";

const insights = [
  {
    icon: Stethoscope,
    text: "Back pain or sciatica can develop due to multiple factors, including spinal changes, injuries, lifestyle patterns, prolonged sitting, physical strain, and nerve-related issues.",
  },
  {
    icon: AlertTriangle,
    text: "Many people ignore early symptoms until the pain starts affecting their everyday activities and mobility.",
  },
  {
    icon: Footprints,
    text: "If you experience persistent back pain, pain travelling into your leg, stiffness, difficulty sitting or standing, or discomfort while walking, early evaluation can help you understand your condition and explore suitable treatment options.",
  },
];

const languages = ["English", "Tamil", "Hindi", "Malayalam"];

const protocols = [
  {
    icon: ClipboardCheck,
    text: "Personalised back pain & sciatica evaluation based on symptoms and lifestyle factors",
  },
  {
    icon: ShieldCheck,
    text: "Non-surgical care approach focused on mobility support and pain management",
  },
];

export default function BackPainSciaticaConsultationWhyChoose() {
  return (
    <section
      id="about-clinic"
      className="relative overflow-hidden bg-[#f7efe3] px-4 py-9 scroll-mt-24 sm:px-6 sm:py-11 md:px-[60px] md:py-12"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(17,69,32,0.07) 1px, transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="nsc-blob pointer-events-none absolute -left-24 top-16 h-[380px] w-[380px] rounded-full bg-[#f05623]/22 blur-[130px]" />
      <div className="nsc-blob-2 pointer-events-none absolute -right-24 bottom-10 h-[400px] w-[400px] rounded-full bg-[#f05623]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1180px]">
        <AnimateOnScroll animation="fade-up" className="text-center">
          <BpsEyebrow>Why should you choose our back pain clinic?</BpsEyebrow>

          <h2 className="mx-auto mt-4 max-w-[820px] text-balance text-[25px] font-extrabold leading-[1.15] text-[#1A1A1A] sm:text-[34px] md:text-[42px]">
            Treated <BpsAccent tone="orange">10,000+ Joint Pain Patients!</BpsAccent> Your
            Journey Could Be Next
          </h2>
        </AnimateOnScroll>

        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-10">
          {/* Left — the doctor */}
          <AnimateOnScroll animation="slide-right">
            <div className="mx-auto w-full max-w-[330px] sm:max-w-[380px] lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[22px] border border-[#114520]/10 bg-[#114520] shadow-[0_24px_56px_rgba(17,69,32,0.22)]">
                {/* Portrait */}
                <div className="relative bg-[#fffaf4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withImageKit("Dr.Ramesh.jpg")}
                    alt="Dr. Ramesh Varier, India's leading Ayurvedic musculoskeletal expert"
                    className="aspect-[5/4] w-full object-cover object-top"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-[#114520]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#80c141] backdrop-blur-sm">
                    35+ Years
                  </span>
                </div>

                {/* Identity panel — text on solid green reads far better than over a face */}
                <div className="px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
                  <p className="text-[17px] font-bold leading-tight text-white sm:text-[18.5px]">
                    Dr. Ramesh Varier
                  </p>
                  <p className="mt-1 text-[12px] font-medium leading-[1.45] text-[#80c141] sm:text-[12.5px]">
                    India&apos;s leading Ayurvedic musculoskeletal expert
                  </p>

                  {/* Credentials as two balanced stats */}
                  <div className="mt-3 grid grid-cols-2 gap-3 border-y border-white/12 py-3">
                    <div>
                      <p className="text-[17px] font-extrabold leading-none text-white sm:text-[19px]">
                        10,000+
                      </p>
                      <p className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-white/45">
                        Joint pain patients
                      </p>
                    </div>
                    <div className="border-l border-white/12 pl-3">
                      <p className="text-[17px] font-extrabold leading-none text-white sm:text-[19px]">
                        Spine &amp; Joint
                      </p>
                      <p className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-white/45">
                        Disorders specialist
                      </p>
                    </div>
                  </div>

                  {/* Consultation languages */}
                  <p className="mt-3 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Consults in
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {languages.map((language) => (
                      <li
                        key={language}
                        className="rounded-full border border-[#80c141]/45 bg-[#80c141]/12 px-2.5 py-[3px] text-[11px] font-semibold text-[#80c141]"
                      >
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — what drives back pain, why early matters, and the approach */}
          <div className="flex flex-col gap-2.5">
            {insights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  delayMs={index * 90}
                  className="flex gap-3.5 rounded-[16px] border border-[#114520]/10 bg-white/75 px-4 py-3 backdrop-blur-sm sm:gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#114520]/8 text-[#114520]">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </span>
                  <p className="self-center text-[13.5px] leading-[1.6] text-[#2B2B2B]/85 sm:text-[14.5px]">
                    {item.text}
                  </p>
                </AnimateOnScroll>
              );
            })}

            {/* The headline promise */}
            <AnimateOnScroll animation="fade-up" delayMs={260}>
              <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-r from-[#114520] to-[#1a6b30] px-4 py-4 shadow-[0_18px_40px_rgba(17,69,32,0.28)] sm:px-5">
                <Sparkles className="absolute -right-3 -top-3 h-20 w-20 text-[#80c141]/12" />
                <p className="relative text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#80c141]">
                  The good news
                </p>
                <p className="relative mt-1.5 text-[16.5px] font-extrabold leading-[1.25] text-white sm:text-[20px]">
                  Early assessment and personalised care can help support better
                  mobility without immediately considering invasive options.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Approach pills */}
            <div className="grid gap-2.5 sm:grid-cols-2">
              {protocols.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimateOnScroll
                    key={index}
                    animation="fade-up"
                    delayMs={320 + index * 90}
                    className="group flex items-center gap-3 rounded-[16px] border border-[#f05623]/40 bg-white/85 px-4 py-3 backdrop-blur-sm hover:border-[#f05623] hover:shadow-[0_14px_30px_rgba(240,86,35,0.18)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f05623]/15 text-[#114520] transition-colors duration-500 group-hover:bg-[#f05623] group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    </span>
                    <p className="text-[13px] font-semibold leading-[1.5] text-[#1A1A1A] sm:text-[13.5px]">
                      {item.text}
                    </p>
                  </AnimateOnScroll>
                );
              })}
            </div>

            <BpsCta
              className="mt-1 sm:items-start"
              label="Book Expert 1:1 Call for Just ₹150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
