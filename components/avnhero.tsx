"use client"

import { useState, useEffect } from "react"
import { Phone, Calendar, Shield, Star, Heart } from "lucide-react"
import { AvnconsultationModal } from "./avnpopupform"
import { LocationModal, useLocationModal } from "./calllocations"

export function Avnhero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  
  // Use the location modal hook
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal()

  const backgroundImages = [
    "neck.jpeg",
    "avnthree.jpg",
    "ban6.jpeg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        @keyframes fadeInOut {
          0% { opacity: 0; }
          15% { opacity: 0.4; }
          30% { opacity: 0.4; }
          45% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        @keyframes pulse-grow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .btn-animation:hover {
          animation: pulse-grow 0.5s ease-in-out;
        }
        
        .animate-fade-in {
          animation: slideInUp 0.8s ease-out;
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
        
        .background-slideshow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: fadeInOut 12s infinite;
        }
        
        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.92) 0%,
            rgba(0, 0, 0, 0.85) 50%,
            rgba(0, 0, 0, 0.92) 100%
          );
          z-index: -1;
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
          font-family: 'Outfit', sans-serif;
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

        /* Content container with centered alignment */
        .centered-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
        }

        /* Feature items animation delay */
        .feature-item {
          animation: slideInUp 0.8s ease-out;
        }

        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        .feature-item:nth-child(4) { animation-delay: 0.4s; }

        /* Enhanced text readability */
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
        }
      `}</style>

      {/* Hero Section with Background Slideshow */}
      <section
        className="relative py-5 md:py-5 lg:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Background Slideshow with Reduced Opacity */}
        <div className="background-slideshow">
          <div className="background-overlay"></div>
          {backgroundImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className="background-image"
              style={{
                animationDelay: `${index * 4}s`,
                opacity: index === currentImage ? 0.4 : 0
              }}
            />
          ))}
        </div>

        {/* Centered Content */}
        <div className="container mx-auto">
          <div className="centered-content">
            <div className="text-white space-y-6 md:space-y-8 max-w-5xl mx-auto">
              {/* Main Heading */}
              <div className="animate-fade-in max-[470px]:mb-[10px]">
                <h1 className="text-[45px] max-[470px]:text-2xl sm:text-[45px] md:text-[45px] lg:text-[px] font-bold leading-tight text-shadow-lg">
                  AVN (Avascular Necrosis) isn't just hip pain —<br />
                  <span className="text-[#ff6b35] block mt-2 max-[400px]:text-[20px] sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
                    it's the "heart attack of your hip."
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="animate-fade-in max-[470px]:mb-[10px]" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto text-shadow">
                  Reverse it naturally through Ayurveda & Physiotherapy with a proven 3-week program.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-[470px]:mb-[10px] max-w-3xl mx-auto">
                <div className="feature-item flex items-start justify-center sm:justify-start">
                  <div className="bg-[#f05623] rounded-full p-2 sm:p-3 mr-3 flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-left text-white text-shadow">
                    <strong>95+ Years</strong> of Ayurvedic Excellence in Bone & Joint Care
                  </span>
                </div>

                <div className="feature-item flex items-start justify-center sm:justify-start">
                  <div className="bg-[#80c141] rounded-full p-2 sm:p-3 mr-3 flex-shrink-0">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-left text-white text-shadow">
                    First <strong>NABH-Accredited</strong> Ayurvedic Hospital in Tamil Nadu
                  </span>
                </div>

                <div className="feature-item flex items-start justify-center sm:justify-start">
                  <div className="bg-[#114520] rounded-full p-2 sm:p-3 mr-3 flex-shrink-0">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-left text-white text-shadow">
                    <strong>4.7 / 5</strong> Google Rating from Thousands of Satisfied Patients
                  </span>
                </div>

                <div className="feature-item flex items-start justify-center sm:justify-start">
                  <div className="bg-[#f05623] rounded-full p-2 sm:p-3 mr-3 flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-left text-white text-shadow">
                    <strong>1000+ AVN Cases</strong> Treated with Over 90% Avoiding Surgery
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
       <div 
  className="flex flex-col sm:flex-row gap-4 pt-3 justify-center items-center animate-fade-in"
  style={{ animationDelay: '0.5s' }}
>
  {/* Book Now Button */}
  <a 
    href="https://avnarogya.zohobookings.in/#/teleconsultation"
    className="w-full sm:w-auto flex justify-center"
  >
    <button
      className="consultation-button flex max-[325px]:text-[10px] items-center justify-center w-full sm:w-auto min-w-[140px] px-6 py-3"
    >
      <Calendar className="mr-2 w-5 h-5" />
      <span className="font-semibold max-[325px]:text-[10px]">Book Tele-Consultation for ₹150</span>
    </button>
  </a>

  {/* Call Now Button */}
  {/* <button
    onClick={openLocationModal}
    className="phone-button flex items-center justify-center w-full sm:w-auto min-w-[140px] px-6 py-3"
  >
    <Phone className="mr-2 w-5 h-5" />
    <span className="font-semibold">Call Now</span>
  </button> */}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <AvnconsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  )
}