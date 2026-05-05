"use client";

import React, { useEffect } from "react";
import { CheckCircle, Home, Phone, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Thankheader from "@/components/thankheader";
import { LocationModal, useLocationModal } from "@/components/calllocations";

const ThankYouPagebackandspine: React.FC = () => {
  const { isLocationModalOpen, openLocationModal, closeLocationModal } = useLocationModal();

  // Conversion tracking for Back Pain page
  useEffect(() => {
    // Track conversion when component mounts
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-947598506/ZfIqCMzP7MIbEKrp7MMD'
      });
    }
  }, []);

  return (
    <>
      <Thankheader />
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-5 bg-gradient-to-b max-[470px]:pt-[50px] pt-[100px] from-gray-900 to-black text-white text-center">
        {/* Icon */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-[#f05623] rounded-full opacity-20 animate-ping"></div>
          <CheckCircle className="w-20 h-20 text-[#80c141] relative z-10" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Thank You for Reaching Out!
        </h1>

        {/* Message */}
        <p className="text-base md:text-lg text-gray-300 max-w-xl mb-6">
          We have successfully received your inquiry about our back & spine pain treatments. 
          Our Ayurvedic specialists will get back to you within{" "}
          <span className="font-semibold text-[#80c141]">24 hours</span>.
          Meanwhile, here's what makes AVN Arogya special:
        </p>

        {/* AVN Arogya Highlights */}
        <div className="bg-gray-800 p-6 rounded-lg max-w-2xl mb-8 text-left">
          <h2 className="text-xl font-bold mb-4 text-[#f05623] text-center">Why Choose AVN Arogya for Back & Spine Pain?</h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>95+ Years</strong> of Ayurvedic Excellence since 1930</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>First NABH-Accredited</strong> Ayurvedic Hospital in Tamil Nadu</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>98% Success Rate</strong> - Surgery-Recommended Cases Treated Without Surgery</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span>Led by <strong>Dr. Ramesh R Varier</strong> - India's leading Ayurvedic musculoskeletal expert</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span>Specialized care for <strong>Herniated Discs, Sciatica, Spondylosis & Spinal Stenosis</strong></span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>Cashless Insurance</strong> with 20+ Insurance & TPA Partners</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#80c141] rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>4.7/5 Google Ratings</strong> from Thousands of Satisfied Patients</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Updated Call Now button to use LocationModal */}
          <button
            onClick={openLocationModal}
            className="inline-flex items-center gap-2 bg-[#f05623] text-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </button>
          <Link
            href="/Back&Spine-Treatment"
            className="inline-flex items-center gap-2 bg-[#114520] text-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <MapPin className="w-4 h-4" />
          <span>AVN Arogya Ayurvedic Hospital, Tamil Nadu</span>
        </div>

        {/* Timing */}
        <div className="flex items-center gap-2 text-gray-400 mb-6">
          <Calendar className="w-4 h-4" />
          <span>Open Daily</span>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AVN Arogya Ayurvedic Hospital. All rights reserved.
        </p>
      </section>

      {/* Location Selection Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={closeLocationModal} 
      />
    </>
  );
};

export default ThankYouPagebackandspine;