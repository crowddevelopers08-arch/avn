"use client"

import { useState } from "react"
import { Phone, Calendar, Shield, Star, Heart } from "lucide-react"
import { HipconsultationModal } from "./Hippopup"
import { LocationModal, useLocationModal } from "./calllocations"

export function Hiphero() {
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

        /* Three circular images in triangular arrangement */
        .circular-image-collage {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 500px;
          margin: 0 auto;
        }

        .circular-image {
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
          border: 5px solid white;
        }

        .circular-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Top image */
        .circular-image-top {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 240px;
          height: 240px;
        }

        /* Bottom left image */
        .circular-image-left {
          bottom: 40px;
          left: 40px;
          width: 220px;
          height: 220px;
        }

        /* Bottom right image */
        .circular-image-right {
          bottom: 40px;
          right: 40px;
          width: 220px;
          height: 220px;
        }

        /* Responsive adjustments */
        @media (min-width: 1024px) {
          .circular-image-collage {
            height: 550px;
            max-width: 650px;
          }
          
          .circular-image-top {
            width: 260px;
            height: 260px;
            top: 30px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 240px;
            height: 240px;
            bottom: 50px;
          }
          
          .circular-image-left {
            left: 50px;
          }
          
          .circular-image-right {
            right: 50px;
          }
        }

        @media (min-width: 1280px) {
          .circular-image-collage {
            height: 600px;
            max-width: 700px;
          }
          
          .circular-image-top {
            width: 280px;
            height: 280px;
            top: 40px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 260px;
            height: 260px;
            bottom: 60px;
          }
          
          .circular-image-left {
            left: 60px;
          }
          
          .circular-image-right {
            right: 60px;
          }
        }

        @media (max-width: 1023px) {
          .circular-image-collage {
            height: 450px;
            max-width: 100%;
            width: 100%;
            margin-top: 20px;
            padding: 0 20px;
          }
          
          .circular-image-top {
            width: 200px;
            height: 200px;
            top: 20px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 180px;
            height: 180px;
            bottom: 30px;
          }
          
          .circular-image-left {
            left: 10%;
          }
          
          .circular-image-right {
            right: 10%;
          }
        }

        @media (max-width: 768px) {
          .circular-image-collage {
            height: 420px;
            padding: 0 15px;
          }
          
          .circular-image-top {
            width: 190px;
            height: 190px;
            top: 20px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 170px;
            height: 170px;
            bottom: 25px;
          }
          
          .circular-image-left {
            left: 8%;
          }
          
          .circular-image-right {
            right: 8%;
          }
        }

        @media (max-width: 640px) {
          .circular-image-collage {
            height: 400px;
            padding: 0 10px;
          }
          
          .circular-image-top {
            width: 180px;
            height: 180px;
            top: 20px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 160px;
            height: 160px;
            bottom: 20px;
          }
          
          .circular-image-left {
            left: 5%;
          }
          
          .circular-image-right {
            right: 5%;
          }
        }

        @media (max-width: 480px) {
          .circular-image-collage {
            height: 380px;
            padding: 0 5px;
          }
          
          .circular-image-top {
            width: 170px;
            height: 170px;
            top: 20px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 150px;
            height: 150px;
            bottom: 20px;
          }
          
          .circular-image-left {
            left: 3%;
          }
          
          .circular-image-right {
            right: 3%;
          }
        }

        @media (max-width: 375px) {
          .circular-image-collage {
            height: 350px;
          }
          
          .circular-image-top {
            width: 160px;
            height: 160px;
            top: 15px;
          }
          
          .circular-image-left,
          .circular-image-right {
            width: 140px;
            height: 140px;
            bottom: 15px;
          }
          
          .circular-image-left {
            left: 2%;
          }
          
          .circular-image-right {
            right: 2%;
          }
        }
      `}</style>

      {/* Hero Section with Two Columns */}
      <section
        className="py-8 md:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-[470px]:gap-0 items-center">
            {/* Left Content Section */}
            <div className="text-white space-y-4 md:space-y-5 order-1 lg:order-1">
              <h1 className="text-2xl max-[470px]:text-xl max-[470px]:text-center sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight">
                AVN Arogya Ayurvedic Hospital
                <span className="text-[#80c141] block mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                  Reverse Hip Pain & AVN Without Surgery
                </span>
              </h1>

              <p className="text-sm sm:text-base max-[470px]:text-center md:text-lg text-gray-300 leading-relaxed">
                Proven Ayurvedic Therapies That Heal the Hip Joint & Restore Natural Movement
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-gray-800 text-xs sm:text-sm italic">
                  <strong>Facing difficulty walking, stiffness in the hip, or advised hip replacement due to Avascular Necrosis (AVN)?</strong> AVN Arogya offers integrative Ayurvedic treatment that relieves pain, improves joint nutrition, and delays or avoids surgery.
                </p>
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
                  <span className="text-sm sm:text-base md:text-lg">
                    First NABH-Accredited Ayurvedic Hospital in Tamil Nadu
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#114520] rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">
                    4.7/5 Google Ratings from Thousands of Patients
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f05623] rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">
                    98% of Surgery-Recommended Cases Treated Without Surgery
                  </span>
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

            {/* Right Image Section - Three circular images in triangular arrangement */}
            {/* Now visible on all screen sizes */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="circular-image-collage" aria-label="Knee pain treatment collage">
                {/* Top circular image */}
                <div className="circular-image circular-image-top">
                  <img
                    src="oman.jpg"
                    alt="Knee joint anatomy illustration"
                  />
                </div>
                
                {/* Bottom left circular image */}
                <div className="circular-image circular-image-left">
                  <img
                    src="phyi.jpeg"
                    alt="Ayurvedic knee treatment"
                  />
                </div>
                
                {/* Bottom right circular image */}
                <div className="circular-image circular-image-right">
                  <img
                    src="hipu.jpg"
                    alt="Healthy knee mobility"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <HipconsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  )
}