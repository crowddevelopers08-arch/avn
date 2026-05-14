"use client";

import type { ReactNode } from "react";

function CircleCheck() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D94E1A"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export type ComparisonRow = {
  condition: ReactNode;
  conditionDescription?: ReactNode;
  benefits: ReactNode[];
};

type ResponsiveComparisonSectionProps = {
  title: ReactNode;
  introBold: ReactNode;
  intro: ReactNode;
  ctaHeading?: ReactNode;
  leftHeader: ReactNode;
  rightHeader: ReactNode;
  rows: ComparisonRow[];
  sectionClassName?: string;
  contentClassName?: string;
};

type ResponsiveComparisonTableProps = {
  leftHeader: ReactNode;
  rightHeader: ReactNode;
  rows: ComparisonRow[];
};

export function ResponsiveComparisonTable({
  leftHeader,
  rightHeader,
  rows,
}: ResponsiveComparisonTableProps) {
  return (
    <>
      <div className="space-y-4 sm:hidden">
        {rows.map((row, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-[#d9d1c4] bg-white/95 shadow-[0_12px_32px_rgba(17,69,32,0.08)]"
          >
            <div className="border-b border-[#e7ddcf] bg-[#F5D5C5] px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7d3c1f]">
                {leftHeader}
              </p>
              <div className="mt-1 text-lg font-bold text-gray-900">{row.condition}</div>
              {row.conditionDescription ? (
                <div className="mt-2 text-sm leading-relaxed text-[#C0471F]">
                  {row.conditionDescription}
                </div>
              ) : null}
            </div>

            <div className="px-4 py-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#114520]">
                {rightHeader}
              </p>
              <div className="flex flex-col gap-3">
                {row.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-3">
                    <CircleCheck />
                    <div className="text-sm leading-snug text-gray-900">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-2xl border border-[#d9d1c4] bg-white/90 shadow-[0_18px_45px_rgba(17,69,32,0.08)] backdrop-blur-sm sm:block">
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ backgroundColor: "#F5D5C5" }}>
              <th className="w-1/2 border border-gray-300 px-5 py-3 text-left text-base font-semibold text-gray-800 sm:px-8 sm:text-lg">
                {leftHeader}
              </th>
              <th className="w-1/2 border border-gray-300 px-5 py-3 text-left text-base font-semibold text-gray-800 sm:px-8 sm:text-lg">
                {rightHeader}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="align-top">
                <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                  <div className="text-base font-bold text-gray-900 sm:text-lg">{row.condition}</div>
                  {row.conditionDescription ? (
                    <div className="mt-2 text-base leading-relaxed text-[#C0471F]">
                      {row.conditionDescription}
                    </div>
                  ) : null}
                </td>
                <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                  <div className="flex flex-col divide-y divide-gray-200">
                    {row.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3 py-2">
                        <CircleCheck />
                        <div className="text-base leading-snug text-gray-900">{benefit}</div>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function ResponsiveComparisonSection({
  title,
  introBold,
  intro,
  ctaHeading,
  leftHeader,
  rightHeader,
  rows,
  sectionClassName = "section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12",
  contentClassName = "section-content mx-auto max-w-6xl",
}: ResponsiveComparisonSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className={contentClassName}>
        <h2 className="mb-3 text-center text-2xl font-bold leading-tight text-[#114520] sm:mb-4 sm:text-3xl lg:text-4xl xl:text-[42px]">
          {title}
        </h2>

        <p className="mx-auto mb-3 max-w-4xl text-center text-lg font-bold leading-snug text-gray-800 sm:text-xl">
          {introBold}
        </p>

        <p className="mx-auto mb-6 max-w-4xl text-center text-base leading-relaxed text-gray-700 max-[470px]:mb-4 sm:text-lg">
          {intro}
        </p>

        {ctaHeading ? (
          <h3 className="mb-6 text-center text-xl font-bold text-[#114520] sm:text-2xl">
            {ctaHeading}
          </h3>
        ) : null}

        <ResponsiveComparisonTable
          leftHeader={leftHeader}
          rightHeader={rightHeader}
          rows={rows}
        />
      </div>
    </section>
  );
}
