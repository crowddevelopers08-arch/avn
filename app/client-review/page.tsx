"use client";
import React from 'react'

const brandLogo = "https://ik.imagekit.io/waseev72f/AVN-logo.png";

const Review = () => {
  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <div
        className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3f8e8_0%,_#dbeac6_32%,_#114520_100%)] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
        style={{fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Card Container */}
        <div className="w-full max-w-xs rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-[0_24px_80px_rgba(17,69,32,0.22)] backdrop-blur sm:max-w-sm sm:p-8 md:max-w-md lg:max-w-lg lg:p-10 xl:max-w-xl mx-auto">
          {/* Logo Section */}
          <div className="mb-4 flex justify-center sm:mb-6 lg:mb-8">
            <div className="flex h-20 w-44 items-center justify-center overflow-hidden rounded-2xl bg-[#f6f9ee] ring-1 ring-[#d4e3bc] sm:h-24 sm:w-52 md:h-28 md:w-60 lg:h-32 lg:w-64">
              <img 
                src={brandLogo} 
                alt="AVN Arogya Logo" 
                className="h-full w-full object-contain p-3"
              />
            </div>
          </div>
          
          {/* Click & Review Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#80c141] sm:mb-4">
              Share Your Experience
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#114520] mb-3 sm:mb-4">
              Click & Review
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4c5f42] leading-relaxed max-w-md mx-auto">
              We'd love to hear your feedback!<br />
              Please click any one of the buttons below to share your review.<br />
              A short review of 4 to 5 lines would be greatly appreciated.
            </p>
          </div>
          
          {/* Buttons Section */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <a href="https://g.page/r/CUoMPVQdmsOQEBM/review">
              <button 
                className="w-full cursor-pointer rounded-xl bg-[#114520] py-2 text-base font-semibold text-white shadow-lg shadow-[#114520]/20 transition-all duration-200 hover:scale-105 hover:bg-[#0c3318] hover:shadow-xl sm:py-3 sm:text-lg lg:py-4 lg:text-xl"
              >
                Client Review
              </button>
            </a>
            <a href="/client-feedback">
              <button 
                className="w-full cursor-pointer rounded-xl border-2 border-[#f05623] bg-transparent py-2 text-base font-semibold text-[#f05623] transition-all duration-200 hover:scale-105 hover:bg-[#f05623] hover:text-white sm:py-3 sm:text-lg lg:py-4 lg:text-xl"
              >
                Client Feedback
              </button>
            </a>
          </div>

          <div className="mt-6 rounded-2xl bg-[#f6f9ee] px-4 py-3 text-center text-sm text-[#4c5f42] sm:mt-8">
            Your review helps more patients discover trusted non-surgical care with AVN Arogya.
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
