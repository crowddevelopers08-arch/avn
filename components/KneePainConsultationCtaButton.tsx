"use client";

import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Booking destination shared by every CTA on the knee pain landing page.
 * Currently the same Zoho paid-consultation page as the AVN LP — swap it here
 * if knee pain gets its own booking page.
 */
export const KPC_BOOKING_URL =
  "https://avnarogya.zohobookings.in/paid-consultation-lp";

type CtaVariant = "forest" | "orange" | "cream";

const variantClasses: Record<CtaVariant, string> = {
  forest:
    "bg-[#114520] text-white shadow-[0_14px_34px_rgba(17,69,32,0.32)] hover:bg-[#014214]",
  orange:
    "bg-[#f05623] text-white shadow-[0_14px_34px_rgba(240,86,35,0.38)] hover:bg-[#d4561d]",
  cream:
    "bg-[#fffaf4] text-[#114520] shadow-[0_14px_34px_rgba(0,0,0,0.28)] hover:bg-white",
};

type KpcCtaProps = {
  label: string;
  variant?: CtaVariant;
  className?: string;
  /** Renders the Razorpay reassurance line underneath. */
  trust?: boolean;
  /** Tone of the trust line — flip on dark backgrounds. */
  trustTone?: "dark" | "light";
};

export function KpcCta({
  label,
  variant = "forest",
  className,
  trust = false,
  trustTone = "dark",
}: KpcCtaProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <a
        href={KPC_BOOKING_URL}
        /* Font scales with the viewport so even the longest label stays on one line */
        style={{ fontSize: "clamp(11.5px, 3.05vw, 15.5px)" }}
        className={cn(
          "nsc-btn group inline-flex w-full max-w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-4 py-3.5 text-center font-semibold leading-none tracking-[0.01em] sm:w-auto sm:px-9 sm:py-4",
          variantClasses[variant]
        )}
      >
        {label}
        <ArrowRight className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {trust ? (
        <p
          className={cn(
            "mt-3 flex items-center justify-center gap-1.5 text-center text-[11.5px] sm:text-[12.5px]",
            trustTone === "light" ? "text-white/60" : "text-[#2B2B2B]/55"
          )}
        >
          <Lock
            className={cn(
              "h-[14px] w-[14px] shrink-0",
              trustTone === "light" ? "text-[#80c141]" : "text-[#114520]"
            )}
          />
          Secure payment via Razorpay — pick your slot right after
        </p>
      ) : null}
    </div>
  );
}

/**
 * The hand-drawn tapered stroke used to underline the accent phrase of every
 * section heading. Stretches to the width of whatever it sits under.
 */
export function KpcUnderline({
  tone = "forest",
  className,
}: {
  tone?: "forest" | "orange" | "lime" | "cream";
  className?: string;
}) {
  const fill =
    tone === "orange"
      ? "#f05623"
      : tone === "lime"
        ? "#80c141"
        : tone === "cream"
          ? "#fffaf4"
          : "#114520";

  return (
    <svg
      viewBox="0 0 240 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none absolute -bottom-1 left-0 h-[8px] w-full sm:h-[11px]",
        className
      )}
    >
      <path
        d="M4 11C70 3 165 1 236 6C165 5 70 8 4 11Z"
        fill={fill}
      />
    </svg>
  );
}

/** Accent phrase inside a heading, wearing the hand-drawn underline. */
export function KpcAccent({
  children,
  tone = "forest",
  className,
}: {
  children: React.ReactNode;
  tone?: "forest" | "orange" | "lime" | "cream";
  className?: string;
}) {
  const textColor =
    tone === "orange"
      ? "text-[#f05623]"
      : tone === "lime"
        ? "text-[#80c141]"
        : tone === "cream"
          ? "text-[#fffaf4]"
          : "text-[#114520]";

  return (
    <span className={cn("relative inline-block", textColor, className)}>
      {children}
      <KpcUnderline tone={tone} />
    </span>
  );
}

/** Small uppercase eyebrow used above every section heading. */
export function KpcEyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px]",
        tone === "light" ? "text-[#80c141]" : "text-[#114520]/70",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-7",
          tone === "light" ? "bg-[#80c141]/60" : "bg-[#f05623]"
        )}
      />
      {children}
    </span>
  );
}
