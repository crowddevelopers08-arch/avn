"use client";
import React, { useState } from 'react';
import { Phone, Calendar, X } from 'lucide-react';
import { AvnconsultationModal } from './avnpopupform';

export default function Avnheader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openCallModal = () => setIsCallModalOpen(true);
  const closeCallModal = () => setIsCallModalOpen(false);

  // Location data with phone numbers
  const locations = [
    {
      name: "Chennai",
      phone: "+919500292220",
      displayPhone: "+91 95002 92220"
    },
    {
      name: "Madurai", 
      phone: "+919500292220",
      displayPhone: "+91 95002 92220"
    },
    {
      name: "Bengaluru",
      phone: "+919500292220", 
      displayPhone: "+91 95002 92220"
    }
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
    closeCallModal();
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap');
        
        .contact-button-global {
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

        .contact-button-global::before {
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
          animation: shine-effect 2s linear infinite;
        }

        @keyframes shine-effect {
          0% { left: -75%; }
          100% { left: 120%; }
        }

        .contact-button-global:hover,
        .contact-button-global:focus {
          background: #d4561d;
          box-shadow: 0 6px 20px rgba(237, 95, 33, 0.4);
          transform: translateY(-1px);
        }

        .consultation-button-global {
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

        .consultation-button-global::before {
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
          animation: shine-effect 2s linear infinite;
        }

        .consultation-button-global:hover,
        .consultation-button-global:focus {
          background: #d4561d;
          box-shadow: 0 6px 20px rgba(237, 95, 33, 0.4);
          transform: translateY(-1px);
        }

        /* Location Modal Styles */
        .location-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .location-modal {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          position: relative;
        }

        .location-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .location-modal-title {
          font-family: 'Rubik', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          color: #6b7280;
          transition: color 0.2s ease;
        }

        .close-button:hover {
          color: #374151;
        }

        .location-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .location-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .location-button:hover {
          background: #f1f5f9;
          border-color: #f05623;
          transform: translateY(-1px);
        }

        .location-info {
          flex: 1;
        }

        .location-name {
          font-family: 'Rubik', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #1f2937;
          margin: 0 0 4px 0;
        }

        .location-phone {
          font-family: 'Rubik', sans-serif;
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        .call-icon {
          color: #f05623;
          margin-left: 12px;
        }

        /* Mobile First Styles */
        @media (min-width: 375px) {
          .contact-button-global,
          .consultation-button-global {
            padding: 9px 18px;
            font-size: 14px;
            gap: 6px;
          }
        }

        @media (min-width: 480px) {
          .contact-button-global,
          .consultation-button-global {
            padding: 10px 20px;
            font-size: 15px;
            gap: 7px;
          }
        }

        @media (min-width: 640px) {
          .contact-button-global,
          .consultation-button-global {
            padding: 11px 22px;
            font-size: 15px;
            gap: 8px;
          }
        }

        @media (min-width: 768px) {
          .contact-button-global,
          .consultation-button-global {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
        }

        @media (min-width: 1024px) {
          .contact-button-global,
          .consultation-button-global {
            padding: 12px 26px;
            font-size: 16px;
          }
        }

        @media (min-width: 1280px) {
          .contact-button-global,
          .consultation-button-global {
            padding: 13px 28px;
            font-size: 17px;
          }
        }

        /* Icon sizes */
        .contact-button-global svg,
        .consultation-button-global svg {
          width: 16px;
          height: 16px;
        }

        @media (min-width: 480px) {
          .contact-button-global svg,
          .consultation-button-global svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (min-width: 768px) {
          .contact-button-global svg,
          .consultation-button-global svg {
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
            src="https://ik.imagekit.io/waseev72f/AVN-logo.png" 
            alt="Ayush Ortho Logo" 
          />
        </div>

        {/* Buttons Container */}
        <div className="flex items-center gap-2">
          {/* Contact Button - Always visible */}
          <div className="flex-shrink-0">
            <button
              onClick={openCallModal}
              className="contact-button-global"
            >
              <Phone className="text-white" />
              <span className="hidden xs:inline">+91 95002 92220</span>
              <span className="xs:hidden">Call Now</span>
            </button>
          </div>

          {/* Book Consultation Button - Hidden on mobile */}
          <div className="hidden sm:flex flex-shrink-0">
            <a href="https://avnarogya.zohobookings.in/#/teleconsultation">
            <button
              className="consultation-button-global"
            >
              <Calendar className="text-white" />
              <span>Book Consultation</span>
            </button>
            </a>
          </div>
        </div>

        {/* Consultation Modal */}
        <AvnconsultationModal
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />

        {/* Location Selection Modal */}
        {isCallModalOpen && (
          <div className="location-modal-overlay">
            <div className="location-modal">
              <div className="location-modal-header">
                <h2 className="location-modal-title">Select Location</h2>
                <button 
                  onClick={closeCallModal}
                  className="close-button"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="location-list">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleCall(location.phone)}
                    className="location-button"
                  >
                    <div className="location-info">
                      <p className="location-name">{location.name}</p>
                      <p className="location-phone">{location.displayPhone}</p>
                    </div>
                    <Phone size={20} className="call-icon" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}