'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { NscCta } from '@/components/NonSurgicalCareForAvascularNecrosisCtaButton';

/**
 * Dr. Ramesh R Varier explaining non-surgical AVN care.
 * Swap this id to change the hero video — nothing else needs to move.
 */
const VIDEO_ID = '-RFgJN6rkrg';
const VIDEO_TITLE =
  'Avascular Necrosis treatment at AVN Arogya — Dr. Ramesh R Varier explains';

/**
 * Section 2 — the guidance video, followed by the Rs 150 consultation CTA.
 */
export function VideoOffer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      id="video"
      className="w-full scroll-mt-28"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="relative mx-auto w-full max-w-[840px]">
        {/* Aurora halo behind the player */}
        <div className="nsc-blob pointer-events-none absolute -inset-5 rounded-[36px] bg-gradient-to-r from-[#f05623]/35 via-[#80c141]/30 to-[#114520]/30 blur-3xl" />

        {/* Gold hairline frame */}
        <div className="relative rounded-[28px] bg-gradient-to-br from-[#80c141]/70 via-white/50 to-[#f05623]/50 p-[1.5px] shadow-[0_36px_90px_rgba(17,69,32,0.28)]">
          <div className="overflow-hidden rounded-[27px] bg-white p-2">
            {playing ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                  title={VIDEO_TITLE}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the video"
                className="group relative block aspect-video w-full overflow-hidden rounded-[20px] bg-black"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 h-full w-full scale-[1.01] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt={VIDEO_TITLE}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/15 to-transparent transition-colors group-hover:from-[#000000]/70" />

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/95 shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110 sm:h-[88px] sm:w-[88px]">
                    <span className="nsc-ring absolute inset-0 rounded-full border-2 border-white/70" />
                    <Play className="ml-1 h-[30px] w-[30px] fill-[#114520] text-[#114520] sm:h-[38px] sm:w-[38px]" />
                  </span>
                </span>

                <span className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-center gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:justify-start">
                  <span className="rounded-full bg-white/12 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:text-[11.5px]">
                    Watch before you decide
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Accepted payment methods, sitting just above the CTA */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/payicons.png"
        alt="Accepted payment methods"
        className="mx-auto mt-6 h-auto w-full max-w-[460px] sm:mt-8"
      />

      <NscCta
        className="mt-4 sm:mt-5"
        label="Book 1:1 Call with Our Doctor at Just ₹150"
        trust
      />
    </div>
  );
}
