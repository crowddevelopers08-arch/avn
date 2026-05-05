"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar, Shield, Star, Heart } from "lucide-react"
import { BackconsultationModal } from "./backpopupform"
import { LocationModal, useLocationModal } from "./calllocations"

export function Backhero() {
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
          background-image: url('/avnback.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
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
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .consultation-button,
        .phone-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          font-family: 'Rubik', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          min-width: auto;
          text-align: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
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

        /* Responsive adjustments */
        @media (min-width: 375px) {
          .consultation-button,
          .phone-button {
            padding: 9px 18px;
            font-size: 14px;
          }
        }

        @media (min-width: 480px) {
          .consultation-button,
          .phone-button {
            padding: 10px 20px;
            font-size: 15px;
          }
        }

        @media (min-width: 640px) {
          .consultation-button,
          .phone-button {
            padding: 11px 22px;
            font-size: 15px;
          }
        }

        @media (min-width: 768px) {
          .consultation-button,
          .phone-button {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
        }

        @media (min-width: 1024px) {
          .consultation-button,
          .phone-button {
            padding: 12px 26px;
            font-size: 16px;
          }
        }

        @media (min-width: 1280px) {
          .consultation-button,
          .phone-button {
            padding: 13px 28px;
            font-size: 17px;
          }
        }

        /* Icon sizes */
        .consultation-button svg,
        .phone-button svg {
          width: 16px;
          height: 16px;
        }

        @media (min-width: 480px) {
          .consultation-button svg,
          .phone-button svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (min-width: 768px) {
          .consultation-button svg,
          .phone-button svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    

      {/* Hero Section with Background Image */}
      <section className="pt-10 min-h-[80vh] md:pt-10 lg:pt-10 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 hero-background" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="container mx-auto hero-content">
          <div className="max-w-2xl text-white space-y-5 md:space-y-6">
            <h1 className="text-[40px] max-[470px]:text-[24px] max-[470px]:pt-[20px] sm:text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight">
              AVN Arogya Ayurvedic Hospital
              <span className="text-[#80c141] block mt-2">Say Goodbye to Back & Spine Pain Without Surgery</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Customised Treatments That Strengthen, Heal, and Prevent Recurrence
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <div className="bg-[#f05623] rounded-full p-2 mr-3 flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg">95+ Years of Ayurvedic Excellence Since 1930</span>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#80c141] rounded-full p-2 mr-3 flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg">First NABH-Accredited Ayurvedic Hospital in Tamil Nadu</span>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#114520] rounded-full p-2 mr-3 flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg">4.7/5 Google Ratings from Thousands of Patients</span>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f05623] rounded-full p-2 mr-3 flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg">98% of Surgery-Recommended Cases Treated Without Surgery</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="consultation-button flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold">Book Now</span>
              </button>

              {/* Updated Call Now Button */}
              <button
                onClick={openLocationModal}
                className="phone-button flex items-center justify-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold">Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <BackconsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  )
}