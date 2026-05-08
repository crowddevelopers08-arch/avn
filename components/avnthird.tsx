"use client";
import React, { useEffect, useRef, useState } from 'react';
import { withImageKit } from "@/lib/imagekit";

const Avnthird = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const designRef1 = useRef<HTMLDivElement>(null);
  const designRef2 = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-award">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      ),
      title: "1000+ AVN patients successfully treated through Ayurveda & Physiotherapy"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-clock-alert">
          <path d="M12 6v6l4 2"></path>
          <path d="M16 21.16a10 10 0 1 1 5-13.16"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      ),
      title: "3-Week AVN reversal protocol focused on early-stage recovery"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-leaf">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      ),
      title: "Stage-based diagnosis and clinical evaluation"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-users">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Non-surgical solutions that prevent hip replacement"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-shield-check">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: "Led by Dr. Ramesh Varier — India's leading Ayurvedic musculoskeletal expert"
    }
  ];

  return (
    <>
     
    <section 
      ref={sectionRef} 
      className={`bg-white py-8 px-4 sm:py-8 max-[470px]:py-0 sm:px-6 lg:py-8 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container max-w-xl p-4 mx-auto space-y-8 lg:px-8 lg:max-w-7xl lg:space-y-12 lg:p-6" style={{fontFamily: "'Outfit', sans-serif" }}>
        {/* Header Section */}
        <div className="text-center max-[470px]:mb-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] max-[470px]:mb-0 mb-4">
            Why Choose <span className="text-[#f05623]">AVN Arogya for Avascular Necrosis?</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          {/* Features List */}
          <div className="order-2 lg:order-1">
            <div ref={featuresRef} className="mt-6 space-y-4 sm:mt-8 sm:space-y-6 lg:mt-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex group cursor-pointer transition-all duration-500 p-2 rounded-lg hover:bg-gray-50 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#80c141] text-white group-hover:bg-[#114520] group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl sm:w-12 sm:h-12">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-sm font-medium leading-5 text-[#114520] group-hover:text-[#f05623] transition-colors duration-300 sm:text-base sm:leading-6 lg:text-lg">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section with Design Elements */}
          <div aria-hidden="true" className="order-1 mt-6 lg:mt-0 relative lg:order-2">
            {/* Main Image Container */}
            <div className="relative z-10">
              <img
                ref={imageRef}
                width="600"
                height="600"
                src={withImageKit("neck.jpeg")}
                alt="AVN Arogya Ayurvedic Treatment Center"
                className={`mx-auto rounded-xl shadow-xl border-4 border-white bg-gray-300 transition-all duration-1000 hover:shadow-2xl relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-none ${
                  isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8'
                }`}
                style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
              />
            </div>
            
            {/* Design Element 1 - Top Right */}
            <div
              ref={designRef1}
              className={`absolute -top-3 -right-3 w-16 h-16 bg-[#f05623] rounded-full opacity-90 z-0 shadow-lg sm:-top-4 sm:-right-4 sm:w-20 sm:h-20 lg:-top-6 lg:-right-6 lg:w-24 lg:h-24 transition-all duration-1000 ${
                isVisible ? 'opacity-90 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-45'
              }`}
              style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
            ></div>
            
            {/* Design Element 2 - Bottom Left */}
            <div
              ref={designRef2}
              className={`absolute -bottom-4 -left-4 w-20 h-20 bg-[#80c141] rounded-2xl opacity-80 z-0 shadow-lg sm:-bottom-5 sm:-left-5 sm:w-24 sm:h-24 lg:-bottom-8 lg:-left-8 lg:w-32 lg:h-32 transition-all duration-1000 ${
                isVisible ? 'opacity-80 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'
              }`}
              style={{ transitionDelay: isVisible ? '900ms' : '0ms' }}
            ></div>
            
            {/* Design Element 3 - Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className={`absolute top-1/4 left-1/4 w-12 h-12 border-4 border-[#114520] rounded-lg opacity-20 transform transition-all duration-1000 ${
                isVisible ? 'opacity-20 rotate-45' : 'opacity-0 rotate-0'
              } sm:w-16 sm:h-16`}></div>
              <div className={`absolute bottom-1/4 right-1/4 w-10 h-10 border-4 border-[#f05623] rounded-full opacity-20 transition-all duration-1000 ${
                isVisible ? 'opacity-20' : 'opacity-0 scale-0'
              } sm:w-12 sm:h-12`}></div>
            </div>

            {/* Floating Elements */}
            <div className={`absolute -top-2 left-4 w-6 h-6 bg-[#80c141] rounded-full opacity-70 animate-pulse transition-all duration-1000 ${
              isVisible ? 'opacity-70' : 'opacity-0'
            } sm:-top-3 sm:left-6 sm:w-8 sm:h-8`}></div>
            <div className={`absolute bottom-8 -right-2 w-4 h-4 bg-[#f05623] rounded-full opacity-80 animate-bounce transition-all duration-1000 ${
              isVisible ? 'opacity-80' : 'opacity-0'
            } sm:bottom-10 sm:-right-3 sm:w-6 sm:h-6`}></div>
          </div>
        </div>
      </div>


 <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-on-scroll {
          animation-duration: 0.8s;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
    </>
  );
};

export default Avnthird;
