"use client";

import { useEffect } from "react";

type LpFormThankYouRedirectProps = {
  /** Page-specific thank-you route the visitor is sent to after submitting. */
  thankYouPath: string;
};

/**
 * Sends the visitor to a page-specific thank-you page once the Zoho
 * "Fix your Appointment" form inside `#appointment-form` is submitted.
 *
 * That Zoho form is shared with many other landing pages, so its own
 * "Thank You page" setting in Zoho can only point at one place. Instead we
 * watch the iframe from the parent page: after a successful submit Zoho always
 * navigates the iframe (to its thank-you message, or to a same-window redirect
 * URL), which fires the iframe's `load` event again.
 *
 * To never redirect someone who has not submitted, a reload only counts once
 * the visitor has actually been inside the form (the iframe took focus).
 * Before that, Zoho's own initial navigations (e.g. language redirect) are
 * ignored.
 *
 * Note: if the Zoho form is set to open its redirect URL in the *parent*
 * window, Zoho navigates the whole page itself and this never runs — keep the
 * Zoho thank-you setting on "message" or "same window".
 */
export default function LpFormThankYouRedirect({
  thankYouPath,
}: LpFormThankYouRedirectProps) {
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "#appointment-form iframe"
    );
    if (!iframe) return;

    let engaged = false;
    let redirected = false;

    const markEngaged = () => {
      if (document.activeElement === iframe) engaged = true;
    };

    // Focus moving into a cross-origin iframe blurs the parent window; the
    // activeElement only settles on the next tick. The interval covers taps
    // that don't fire a window blur on some mobile browsers.
    const handleBlur = () => window.setTimeout(markEngaged, 0);
    const focusPoll = window.setInterval(markEngaged, 500);

    const handleLoad = () => {
      if (!engaged || redirected) return;
      redirected = true;
      window.location.assign(thankYouPath);
    };

    window.addEventListener("blur", handleBlur);
    iframe.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.clearInterval(focusPoll);
      iframe.removeEventListener("load", handleLoad);
    };
  }, [thankYouPath]);

  return null;
}
