"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLocationModal } from "@/components/calllocations"
import Script from "next/script"
import { withImageKit } from "@/lib/imagekit"

const ZOHO_FORM_URL = "https://zcform.in/7xGlK"
const ZOHO_BOOKINGS_URL = "https://avnarogya.zohobookings.in/#/69322000002683022"

const AvnctaSection = () => {
  const [showForm, setShowForm] = useState(false)
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal()

    useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const gclid = params.get("gclid")
    const fbclid = params.get("fbclid")

    if (gclid) localStorage.setItem("gclid", gclid)
    if (fbclid) localStorage.setItem("fbclid", fbclid)

    localStorage.setItem("landing_url", window.location.href)
    localStorage.setItem("user_agent", navigator.userAgent)

    // Delay to allow Meta Pixel to set cookies
    setTimeout(() => {
      const fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1]
      const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1]

      if (fbp) localStorage.setItem("fbp", fbp)
      if (fbc) localStorage.setItem("fbc", fbc)
    }, 2000)
  }, [])

  // 🔑 IMPORTANT: redirect when showForm becomes true
  useEffect(() => {
    if (!showForm) return

    const trackingData = {
      gclid: localStorage.getItem("gclid") || "",
      fbclid: localStorage.getItem("fbclid") || "",
      fbp:
        document.cookie.match(/_fbp=([^;]+)/)?.[1] ||
        localStorage.getItem("fbp") ||
        "",
      fbc:
        document.cookie.match(/_fbc=([^;]+)/)?.[1] ||
        localStorage.getItem("fbc") ||
        "",
      landing_url: localStorage.getItem("landing_url") || "",
      user_agent: localStorage.getItem("user_agent") || "",
    }

    const filtered = Object.fromEntries(
      Object.entries(trackingData).filter(([_, v]) => v !== "")
    )

    const queryString = new URLSearchParams(filtered).toString()

    // ⚠️ IMPORTANT: query params MUST be BEFORE #
    const finalUrl = queryString
      ? `https://avnarogya.zohobookings.in/?${queryString}#/69322000002683022`
      : ZOHO_BOOKINGS_URL

    // Meta browser-side Lead event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead")
    }

    window.location.href = finalUrl
  }, [showForm])

  return (
    <>
     {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '274951771016535');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=274951771016535&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-947598506"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-947598506');
        `}
      </Script>
      {/* End Google tag */}

      <header className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 h-[72px] flex items-center justify-center gap-3 sm:gap-4">
          <Image
            src={withImageKit("/AVN_Leaf_Logo.jpg")}
            alt="AVN Arogya"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-gray-800 font-semibold text-base sm:text-lg text-center">
            AVN Arogya Ayurvedic Hospital
          </h1>
        </div>
      </header>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        .shiny-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: #f05623;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Rubik', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(237, 95, 33, 0.3);
          transition: all 0.3s ease;
          min-width: auto;
          text-align: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          width: 100%;
        }
        
        .shiny-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.2) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          animation: shine 2s linear infinite;
        }
        
        @keyframes shine {
          0% { left: -75%; }
          100% { left: 120%; }
        }
        
        .shiny-button:hover,
        .shiny-button:focus {
          background: #d4561d;
          box-shadow: 0 6px 20px rgba(237, 95, 33, 0.4);
          transform: translateY(-1px);
        }
        
        /* Mobile First Styles */
        @media (min-width: 375px) {
          .shiny-button {
            padding: 12px 22px;
            font-size: 16px;
          }
        }
        
        @media (min-width: 480px) {
          .shiny-button {
            padding: 12px 24px;
            font-size: 16px;
          }
        }
        
        @media (min-width: 640px) {
          .shiny-button {
            width: auto;
          }
        }
        
        @media (min-width: 768px) {
          .shiny-button {
            padding: 13px 26px;
            font-size: 17px;
          }
        }
        
        @media (min-width: 1024px) {
          .shiny-button {
            padding: 14px 28px;
            font-size: 18px;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-12 max-[470px]:px-0 lg:px-20 py-6 sm:py-8 max-[470px]:pt-2 flex flex-col items-center justify-center relative pb-16">
        {/* Only show the main content when form is NOT open */}
        {!showForm ? (
          <div 
            className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 pt-0 max-[470px]:py-5 lg:px-8 w-full" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <div className="bg-[#114520] rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12 text-center">
              {/* Header Section */}
              <div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
                <h2 className="font-display text-2xl max-[376px]:text-[20px] sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4 px-2">
                  <span className="sm:hidden">
                    Expert Ayurvedic Consultation for AVN – Just ₹150
                  </span>
                  <span className="hidden sm:inline">
                    Expert Ayurvedic Consultation for AVN – Just ₹150
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#80c141] leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
                  Skip the travel. Get a customized non-surgical recovery roadmap from our specialists from the comfort of your home.
                </p>
              </div>

              {/* Combined CTA and Phone Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10 w-full max-w-2xl mx-auto">
                {/* Button 1 - triggers redirect to Zoho Bookings */}
                <button
                  onClick={() => setShowForm(true)}
                  className="shiny-button"
                >
                  Book Teleconsultation Now
                </button>
              </div>

              {/* Features List */}
              <div className="max-w-3xl mx-auto">
                <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm font-medium text-white">
                  <li className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/5 rounded-lg">
                    <div className="bg-[#88be22]/20 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-[#80c141]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-center sm:text-left">Verified Doctors</span>
                  </li>
                  <li className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/5 rounded-lg">
                    <div className="bg-[#88be22]/20 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-[#80c141]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-center sm:text-left">Pan-India</span>
                  </li>
                  <li className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/5 rounded-lg xs:col-span-2 sm:col-span-1">
                    <div className="bg-[#88be22]/20 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-[#80c141]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-center sm:text-left">Multilingual Support</span>
                  </li>
                </ul>
              </div>

              {/* Additional Benefits Section */}
              <div className="max-w-4xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <div className="text-[#80c141] font-bold text-lg sm:text-xl mb-2">
                    Identify your <span className="text-[#f05623]">Avascular Necrosis (AVN)</span> stage
                  </div>
                  <p className="text-white text-sm">through symptoms and reports</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <div className="text-[#80c141] font-bold text-lg sm:text-xl mb-2">
                    Know if <span className="text-[#f05623]">NON-SURGICAL</span> recovery
                  </div>
                  <p className="text-white text-sm">is possible</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <div className="text-[#80c141] font-bold text-lg sm:text-xl mb-2">
                    Receive a <span className="text-[#f05623]">personalized</span> treatment plan
                  </div>
                  <p className="text-white text-sm">before visiting in person</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Show loading state while redirecting */
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#f05623]"></div>
                <span className="text-gray-700">Redirecting to booking page...</span>
              </div>
              <p className="text-gray-600 mb-4">
                If you are not redirected automatically, click the button below:
              </p>
              <a
                href={ZOHO_BOOKINGS_URL}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#f05623] text-white rounded-lg font-medium hover:bg-[#d4561d] transition-colors"
              >
                Go to Booking Page
              </a>
            </div>
          </div>
        )}

        {/* Static Mobile-Only Button */}
        {!showForm && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
            <div className="p-2">
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-gradient-to-r from-[#f05623] to-[#d4561d] text-white text-sm sm:text-base font-bold rounded-2xl py-3.5 flex items-center justify-center gap-2 hover:from-[#f05623]/90 hover:to-[#d4561d]/90 active:translate-y-0.5 transition-all duration-200 shadow-[0_4px_0_#b8451a] hover:shadow-[0_2px_0_#b8451a]"
              >
                <div className="bg-white/20 p-1.5 rounded-full">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="tracking-wide">Book Consultation @ ₹150</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mb-2">
          AVN Arogya Ayurvedic Hospital
        </p>
      </div>
    </>
  )
}

export default AvnctaSection
