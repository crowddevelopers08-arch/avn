"use client";
import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BackconsultationModal } from './backpopupform';
import { LocationModal, useLocationModal } from './calllocations';

export default function Thankheader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap');
        
        .shiny-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: #f05623;
          color: #fff;
          font-size: 14px;
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
            padding: 9px 18px;
            font-size: 14px;
            gap: 6px;
          }
        }

        @media (min-width: 480px) {
          .shiny-button {
            padding: 10px 20px;
            font-size: 15px;
            gap: 7px;
          }
        }

        @media (min-width: 640px) {
          .shiny-button {
            padding: 11px 22px;
            font-size: 15px;
            gap: 8px;
          }
        }

        @media (min-width: 768px) {
          .shiny-button {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
        }

        @media (min-width: 1024px) {
          .shiny-button {
            padding: 12px 26px;
            font-size: 16px;
          }
        }

        @media (min-width: 1280px) {
          .shiny-button {
            padding: 13px 28px;
            font-size: 17px;
          }
        }

        /* Icon sizes */
        .shiny-button svg {
          width: 16px;
          height: 16px;
        }

        @media (min-width: 480px) {
          .shiny-button svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (min-width: 768px) {
          .shiny-button svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
      
      <header 
        className="w-full flex flex-row items-center justify-between px-4 py-3 bg-white shadow-sm"
        style={{fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img 
            className="w-auto h-20 max-[470px]:h-10 max-[350px]:w-[170px] object-contain" 
            src="AVN-logo.png" 
            alt="Ayush Ortho Logo" 
          />
        </div>

        {/* Buttons Container */}
        <div className="flex items-center gap-2">
          {/* Contact Button - Always visible */}
          <div className="flex-shrink-0">
            <button
              onClick={openLocationModal}
              className="shiny-button"
            >
              <Phone className="text-white" />
              <span className="hidden xs:inline">+91 95002 92220</span>
              <span className="xs:hidden">Call Now</span>
            </button>
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
      </header>
    </>
  );
}