"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar, Shield, Star, Heart } from "lucide-react"
import { BackconsultationModal } from "./backpopupform"
import { KneeconsultationModal} from "./kneepopupform"
import { LocationModal, useLocationModal } from "./calllocations"

export function Kneehero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal()

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        @keyframes pulse-grow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .btn-animation:hover {
          animation: pulse-grow 0.5s ease-in-out;
        }
        
        .mobile-menu-animation {
          animation: slide-in 0.3s ease-out;
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(237, 95, 33, 0.1),
            transparent
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass-morphism {
          background: rgba(30, 30, 30, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(237, 95, 33, 0.1);
        }
        
        .phone-button {
          position: relative;
          overflow: hidden;
          background: #014214;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(1, 66, 20, 0.3);
          transition: all 0.3s ease;
        }
        
        .phone-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .phone-button:hover::before {
          left: 100%;
        }
        
        .phone-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(1, 66, 20, 0.5);
          background: #015a1a;
        }
        
        .consultation-button {
          background: #88be22;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(136, 190, 34, 0.2);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .consultation-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .consultation-button:hover::after {
          transform: translateX(100%);
        }
        
        .consultation-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(136, 190, 34, 0.4);
          background: #94cc25;
        }
        
        .consultation-button,
        .phone-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          font-family: 'Rubik', sans-serif;
          font-weight: 500;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          text-align: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          width: 100%;
        }

        /* Different base colors */
        .consultation-button {
          background: #80c141;
        }
        
        .consultation-button:hover {
          box-shadow: 0 6px 20px rgba(136, 190, 34, 0.4);
          transform: translateY(-1px);
          background: #94cc25;
        }

        .phone-button {
          background: #114520;
        }
        
        .phone-button:hover {
          box-shadow: 0 6px 20px rgba(1, 66, 20, 0.4);
          transform: translateY(-1px);
          background: #015a1a;
        }

        /* Shiny effect */
        .consultation-button::before,
        .phone-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.15) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          animation: shine 2s linear infinite;
        }

        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 120%;
          }
        }

        /* Responsive button adjustments */
        .consultation-button,
        .phone-button {
          padding: 12px 20px;
          font-size: 16px;
          min-width: 140px;
        }

        @media (min-width: 375px) {
          .consultation-button,
          .phone-button {
            padding: 12px 22px;
            font-size: 16px;
            min-width: 150px;
          }
        }

        @media (min-width: 480px) {
          .consultation-button,
          .phone-button {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
        }

        @media (min-width: 640px) {
          .consultation-button,
          .phone-button {
            width: auto;
            min-width: 170px;
          }
        }

        @media (min-width: 768px) {
          .consultation-button,
          .phone-button {
            padding: 13px 26px;
            font-size: 17px;
            min-width: 180px;
          }
        }

        @media (min-width: 1024px) {
          .consultation-button,
          .phone-button {
            padding: 14px 28px;
            font-size: 18px;
            min-width: 190px;
          }
        }

        /* Icon sizes */
        .consultation-button svg,
        .phone-button svg {
          width: 18px;
          height: 18px;
        }

        @media (min-width: 768px) {
          .consultation-button svg,
          .phone-button svg {
            width: 20px;
            height: 20px;
          }
        }

        /* Image styling */
        .hero-image {
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        .hero-image:hover {
          transform: translateY(-5px);
        }

        /* Image container */
        .image-container {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .image-container {
            max-width: 550px;
          }
        }

        @media (min-width: 1024px) {
          .image-container {
            max-width: 600px;
          }
        }

        @media (min-width: 1280px) {
          .image-container {
            max-width: 650px;
          }
        }
      `}</style>

      {/* Hero Section with Two Columns */}
      <section className="py-8 md:py-10 lg:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Content Section */}
            <div className="text-white space-y-4 md:space-y-5 order-1 lg:order-1">
              <h1 className="text-2xl max-[470px]:text-xl max-[470px]:text-center sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight">
                AVN Arogya Ayurvedic Hospital
                <span className="text-[#80c141] block mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                  Find Long-Term Relief from Knee Pain Without Surgery
                </span>
              </h1>
              
              <p className="text-sm sm:text-base max-[470px]:text-center md:text-lg text-gray-300 leading-relaxed">
Tailored Ayurvedic Treatments That Heal, Strengthen & Restore Mobility, Naturally              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-gray-800 text-xs sm:text-sm italic">
                  <strong>Struggling with knee stiffness, pain while walking, or swelling around joints?</strong>AVN Arogya's proven Ayurvedic care helps you avoid or delay knee replacement and return to an active life.
                </p>
              </div>

              {/* Image Section - Shows under paragraph on mobile */}
              <div className="lg:hidden flex justify-center">
                <div className="relative image-container">
                  <img 
                    src="/Joint.jpg" 
                    alt="AVN Arogya Ayurvedic Hospital - Knee Pain Treatment"
                    className="hero-image w-full h-auto"
                  />
                  {/* Optional decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-[#80c141] rounded-full opacity-20 -z-10"></div>
                  <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-14 sm:h-14 bg-[#f05623] rounded-full opacity-20 -z-10"></div>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start">
                  <div className="bg-[#f05623] rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">95+ Years of Ayurvedic Excellence Since 1930</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#80c141] rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">First NABH-Accredited Ayurvedic Hospital in Tamil Nadu</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#114520] rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">4.7/5 Google Ratings from Thousands of Patients</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#f05623] rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">98% of Surgery-Recommended Cases Treated Without Surgery</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="consultation-button flex items-center justify-center"
                >
                  <Calendar className="mr-2" />
                  <span className="font-semibold">Book Now</span>
                </button>

                {/* Updated Call Now Button */}
                <button
                  onClick={openLocationModal}
                  className="phone-button flex items-center justify-center"
                >
                  <Phone className="mr-2" />
                  <span className="font-semibold">Call Now</span>
                </button>
              </div>
            </div>

            {/* Right Image Section - Hidden on mobile, shows on desktop */}
            <div className="hidden lg:flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="relative image-container">
                <img 
                  src="/Joint.jpg" 
                  alt="AVN Arogya Ayurvedic Hospital - Knee Pain Treatment"
                  className="hero-image w-full h-auto"
                />
                {/* Optional decorative element */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#80c141] rounded-full opacity-20 -z-10"></div>
                <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#f05623] rounded-full opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <KneeconsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  )
}