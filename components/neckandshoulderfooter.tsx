"use client";

import React, { useState } from "react";
import { NeckconsultationModal } from "./neckpopup";
import { LocationModal, useLocationModal } from "./calllocations";

const NeckFooter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>

      <footer className="w-full" style={{fontFamily: "'Outfit', sans-serif" }}>
        {/* Top Links */}
        <div className="max-[470px]:pb-[55px]">
          <div className="w-full text-[18px] flex justify-center gap-6 py-3 bg-white text-sm md:text-base text-gray-700">
            <a
              href="/privacy-policy-neck&shoulder"
              className="hover:text-[#4c8cca] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="hover:text-[#4c8cca] transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
         
          {/* Black Copyright Bar */}
          <div className="w-full bg-black text-white text-center py-2 text-sm md:text-base font-medium tracking-wide">
            2025 © All Rights Reserved | AVN Arogya Ayurvedic Hospital
          </div>
        </div>

        {/* Mobile Fixed Bottom Bar */}
        <div className="lg:hidden max-[470px]:flex fixed bottom-0 left-0 right-0 z-50 w-full">
          {/* Updated Call Now button to use LocationModal */}
          <button 
            onClick={openLocationModal}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#80c141] text-white font-bold text-base transition-all duration-300 active:translate-y-px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Call Now
          </button>

          {/* Book Now button to open consultation modal */}
          <button 
            onClick={openModal}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#114520] text-white font-bold text-base transition-all duration-300 active:translate-y-px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
            </svg>
            Book Now
          </button>
        </div>
      </footer>

      {/* Consultation Modal */}
      <NeckconsultationModal 
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

export default NeckFooter;