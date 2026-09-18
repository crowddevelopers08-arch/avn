"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Google Ads lead conversion for the back pain & sciatica landing page.
 *
 * TODO: paste this page's own conversion `send_to` (AW-XXXXXXXXX/label) here.
 * While it is null nothing is tracked and clicks go straight through — this
 * keeps back pain leads out of the AVN conversion action until a dedicated one exists.
 */
const BPS_LEAD_CONVERSION_SEND_TO: string | null = null;

/**
 * Mounted from app/direct-consultation-back-pain-sciatica/page.tsx only, so it is
 * scoped to that landing page (the nested /thankyou route does not inherit it).
 *
 * Every CTA here is an outbound link to Zoho Bookings (BPS_BOOKING_URL). So the
 * conversion is reported on the click and the navigation is handed to gtag's
 * event_callback, which is what the `url` argument of the snippet is for.
 *
 * The base gtag.js tag is already loaded globally in app/layout.tsx.
 */
export default function BackPainSciaticaConsultationLeadConversion() {
  useEffect(() => {
    if (!BPS_LEAD_CONVERSION_SEND_TO) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.(
        'a[href*="avnarogya.zohobookings.in"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;

      // Script not ready (blocked, still loading): never swallow the click.
      if (typeof window.bps_report_conversion !== "function") return;

      // New tab / modified click: the browser opens it anyway, so just report.
      const opensElsewhere =
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.button !== 0;

      if (opensElsewhere) {
        window.bps_report_conversion();
        return;
      }

      // Same-tab: hold the navigation until the conversion is recorded.
      event.preventDefault();
      window.bps_report_conversion(link.href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!BPS_LEAD_CONVERSION_SEND_TO) return null;

  return (
    <Script id="bps-lp-lead-conversion" strategy="afterInteractive">
      {`
        function bps_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': '${BPS_LEAD_CONVERSION_SEND_TO}',
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

declare global {
  interface Window {
    bps_report_conversion?: (url?: string) => boolean;
  }
}
