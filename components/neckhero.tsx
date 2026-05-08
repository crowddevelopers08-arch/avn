"use client"

import { useState } from "react"
import { Menu, X, Phone, Calendar, Shield, Star, Heart } from "lucide-react"
import { NeckconsultationModal } from "./neckpopup"
import { LocationModal, useLocationModal } from "./calllocations"
import { withImageKit } from "@/lib/imagekit"

export function Neckhero() {
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

        .hero-background {
          background-image: url('${withImageKit("/neckbac.jpg")}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.75) 40%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero-background::before {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.7) 50%,
              rgba(0, 0, 0, 0.6) 100%
            );
          }
        }

        @media (max-width: 480px) {
          .hero-background::before {
            background: rgba(0, 0, 0, 0.75);
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
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
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          text-align: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          padding: 12px 20px;
          font-size: 14px;
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

        /* Button responsive adjustments - UPDATED FOR MOBILE */
        @media (max-width: 480px) {
          .consultation-button,
          .phone-button {
            padding: 12px 16px !important;
            font-size: 14px !important;
            flex: 1;
            min-width: 0;
            height: 44px;
          }
          
          .consultation-button svg,
          .phone-button svg {
            width: 16px !important;
            height: 16px !important;
          }
        }

        @media (min-width: 481px) and (max-width: 767px) {
          .consultation-button,
          .phone-button {
            padding: 12px 20px;
            font-size: 15px;
            flex: 1;
            min-width: 0;
          }
        }

        @media (min-width: 768px) {
          .consultation-button,
          .phone-button {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
          
          .consultation-button svg,
          .phone-button svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (min-width: 1024px) {
          .consultation-button,
          .phone-button {
            padding: 14px 28px;
            font-size: 17px;
            min-width: 170px;
          }
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section className="flex items-center justify-center py-6 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 hero-background" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="container mx-auto hero-content">
          <div className="max-w-5xl mx-auto text-center text-white space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4 md:space-y-5 px-2">
              <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                AVN Arogya Ayurvedic Hospital
                <span className="text-[#80c141] block mt-1 sm:mt-3 text-lg xs:text-xl sm:text-3xl md:text-4xl leading-tight">
                  Say Goodbye to Neck & Shoulder Pain Without Surgery
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="px-2">
              <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                Customised Treatments That Heal, Strengthen & Prevent Recurrence, Naturally
              </p>
            </div>

            {/* Description */}
            <div className="px-2">
              <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto italic">
                Experience targeted Ayurvedic care to relieve chronic neck and shoulder discomfort without surgery or steroids. AVN Arogya's 95+ year legacy delivers results through holistic healing and time-tested therapies.
              </p>
            </div>

    {/* Features List */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 max-w-4xl mx-auto px-2">
  <div className="flex items-center justify-center sm:justify-start space-x-2 p-2 sm:p-3 rounded-lg">
    <div className="bg-[#f05623] rounded-full p-1.5 sm:p-2 flex-shrink-0">
      <Shield className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
    </div>
    <span className="text-xs sm:text-base md:text-lg text-left text-white font-medium">95+ Years of Ayurvedic Excellence Since 1930</span>
  </div>
  
  <div className="flex items-center justify-center sm:justify-start space-x-2 p-2 sm:p-3 rounded-lg">
    <div className="bg-[#80c141] rounded-full p-1.5 sm:p-2 flex-shrink-0">
      <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
    </div>
    <span className="text-xs sm:text-base md:text-lg text-left text-white font-medium">First NABH-Accredited Ayurvedic Hospital in Tamil Nadu</span>
  </div>
  
  <div className="flex items-center justify-center sm:justify-start space-x-2 p-2 sm:p-3 rounded-lg">
    <div className="bg-[#114520] rounded-full p-1.5 sm:p-2 flex-shrink-0">
      <Star className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
    </div>
    <span className="text-xs sm:text-base md:text-lg text-left text-white font-medium">4.7/5 Google Ratings from Thousands of Patients</span>
  </div>
  
  <div className="flex items-center justify-center sm:justify-start space-x-2 p-2 sm:p-3 rounded-lg">
    <div className="bg-[#f05623] rounded-full p-1.5 sm:p-2 flex-shrink-0">
      <Shield className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
    </div>
    <span className="text-xs sm:text-base md:text-lg text-left text-white font-medium">98% of Surgery-Recommended Cases Treated Without Surgery</span>
  </div>
</div>
            
            {/* CTA Buttons */}
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-5 px-2 w-full max-w-xs sm:max-w-md mx-auto">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="consultation-button flex items-center justify-center flex-1 min-w-0"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">Book Now</span>
              </button>

              {/* Updated Call Now Button */}
              <button
                onClick={openLocationModal}
                className="phone-button flex items-center justify-center flex-1 min-w-0"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <NeckconsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  )
}
