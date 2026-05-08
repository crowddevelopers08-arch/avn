"use client";

import Image from "next/image";
import React from "react";

const AvnLpFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#114520] text-[#1f2937]">
      <div className="mx-auto max-w-5xl px-4 py-8 pb-8 sm:px-6 sm:py-10 md:pb-10 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center text-center">
          <Image
            src="https://ik.imagekit.io/waseev72f/AVN-logo.png"
            alt="AVN Arogya Ayurvedic Hospital"
            width={420}
            height={108}
            className="h-auto w-[220px] object-contain sm:w-[300px] lg:w-[380px]"
          />
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-snug text-white sm:text-2xl">
            Get the best health care solution for you from AVN Arogya
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Our doctors provide a comprehensive range of services with a personal approach.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.88fr_0.78fr] lg:items-stretch">
          <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_50px_rgba(8,28,18,0.24)] sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-8 w-3 rounded-full bg-[#f05623]" />
              <h3 className="text-[22px] font-bold tracking-tight text-[#1e293b] sm:text-[26px]">
                Madurai Hospital
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1e9]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f05623"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.61 2.64a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.44-1.22a2 2 0 0 1 2.11-.45c.85.28 1.74.49 2.64.61A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#1e293b] sm:text-[19px]">Phone Number</h4>
                  <a
                    href="tel:+918047091234"
                    className="mt-1 block text-sm font-medium text-[#475467] sm:text-base"
                  >
                    80470-91234
                  </a>
                  <p className="mt-1 text-sm text-[#667085] sm:text-base">Mon-Sun, 8AM-8PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1e9]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f05623"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#1e293b] sm:text-[19px]">Hospital Address</h4>
                  <p className="mt-2 max-w-[420px] text-sm leading-[1.65] text-[#475467] sm:text-base">
                    175, Vilachery Main Rd, Kala Malai, Pasumalai, Madurai,
                    Tamil Nadu 625004
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#appointment-form"
              className="mt-8 inline-flex w-full justify-center rounded-xl bg-[#f05623] px-6 py-4 text-center text-base font-bold text-white shadow-[0_16px_30px_rgba(240,86,35,0.28)] transition-colors hover:bg-[#80c141] sm:w-auto sm:min-w-[340px] sm:px-8 sm:text-lg"
            >
              Get your Teleconsultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[22px] border-2 border-white/70 bg-white shadow-[0_18px_50px_rgba(8,28,18,0.24)]">
            <div className="relative h-full min-h-[240px] w-full sm:min-h-[280px]">
              <iframe
                title="Madurai Hospital Location"
                src="https://www.google.com/maps?q=AVN%20Arogya%20Ayurvedic%20Hospital%2C%20175-A%2C%20Vilachery%20Main%20Rd%2C%20near%20Sourashtra%20college%2C%20Kala%20Malai%2C%20Pasumalai%2C%20Madurai%2C%20Tamil%20Nadu%20625004&z=13&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pb-[68px] md:pb-0">
        <div className="w-full py-2 text-center text-sm font-medium tracking-wide text-white md:text-base">
          2026 {"©"} All Rights Reserved | AVN Arogya Ayurvedic Hospital
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[9999] flex w-full md:hidden pb-[env(safe-area-inset-bottom)]">
        <div className="pointer-events-none absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-white/70" />
        <a
          href="tel:+918047091234"
          className="flex flex-1 items-center justify-center gap-2 bg-[#f05623] py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#80c141] active:translate-y-px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          Call Now
        </a>

        <a
          href="#appointment-form"
          className="flex flex-1 items-center justify-center gap-2 bg-[#f05623] py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#80c141] active:translate-y-px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
          </svg>
          Book Now
        </a>
      </div>
    </footer>
  );
};

export default AvnLpFooter;
