"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Google Ads "AVN LP Lead form conversion" (AW-947598506/aioOCNb_u-kcEKrp7MMD).
 *
 * Mounted from app/non-surgical-care-for-avascular-necrosis/layout.tsx only, so
 * it is scoped to that landing page.
 *
 * Unlike the AVN LP — where the CTAs scroll to an on-page form — every CTA here
 * is an outbound link to Zoho Bookings (NSC_BOOKING_URL). So the conversion is
 * reported on the click and the navigation is handed to gtag's event_callback,
 * which is what the `url` argument of the snippet is for.
 *
 * The base gtag.js tag is already loaded globally in app/layout.tsx.
 */
export default function NonSurgicalCareForAvascularNecrosisLeadConversion() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.(
        'a[href*="avnarogya.zohobookings.in"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;

      // Script not ready (blocked, still loading): never swallow the click.
      if (typeof window.gtag_report_conversion !== "function") return;

      // New tab / modified click: the browser opens it anyway, so just report.
      const opensElsewhere =
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.button !== 0;

      if (opensElsewhere) {
        window.gtag_report_conversion();
        return;
      }

      // Same-tab: hold the navigation until the conversion is recorded.
      event.preventDefault();
      window.gtag_report_conversion(link.href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Script id="nsc-lp-lead-conversion" strategy="afterInteractive">
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
