"use client"

import { useState } from "react"
import { BackconsultationModal } from "./backpopupform"
import { LocationModal, useLocationModal } from "./calllocations";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
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
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 max-[470px]:py-5 lg:px-8" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="bg-[#114520] rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12 text-center">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4 px-2">
             Expert Ayurvedic Consultation for <br /> Back & Spine Treatment — Just ₹150
            </h2>
            <p className="text-sm sm:text-base text-[#80c141] leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
             Skip the travel. Get a customized non-surgical recovery roadmap from our specialists from the comfort of your home.
            </p>
          </div>

          {/* Combined CTA and Phone Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10 w-full max-w-2xl mx-auto">
            {/* Button 1 */}
            <button
              onClick={openModal}
              className="shiny-button"
            >
              Book Teleconsultation Now
            </button>

            {/* Button 2 (Phone Number) - Updated to use LocationModal */}
            <div className="w-full sm:w-auto flex-1 sm:flex-initial">
              <button
                onClick={openLocationModal}
                className="shiny-button text-lg sm:text-xl lg:text-2xl font-bold"
              >
                Call Now
              </button>
            </div>
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
        </div>
      </div>

      {/* Consultation Modal */}
      <BackconsultationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  );
};

export default CTASection;