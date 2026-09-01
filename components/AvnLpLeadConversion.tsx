"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * Google Ads "AVN LP Lead form conversion" (AW-947598506/aioOCNb_u-kcEKrp7MMD).
 *
 * Mounted from app/avascular-necrosis-treatment/layout.tsx only, so it is scoped
 * to that landing page — AvnLpFooter and AvnLpTreatmentPackage are shared with
 * ~10 other LPs and are deliberately left untouched.
 *
 * Fires on any CTA that sends the visitor to the "Fix your Appointment" form
 * (every `a[href="#appointment-form"]` on the page: hero, video section,
 * treatment package, footer and the mobile sticky "Book Now" bar).
 * The base gtag.js tag is already loaded globally in app/layout.tsx.
 */
export default function AvnLpLeadConversion() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest?.('a[href="#appointment-form"]')) return;

      // No url passed: these are in-page anchors, so the browser keeps
      // handling the scroll to the form itself.
      window.gtag_report_conversion?.();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Script id="avn-lp-lead-conversion" strategy="afterInteractive">
      {`
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': 'AW-947598506/aioOCNb_u-kcEKrp7MMD',
              'value': 1.0,
              'currency': 'INR',
              'event_callback': callback
          });
          return false;
        }
      `}
    </Script>
  );
}
