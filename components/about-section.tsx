"use client";
import React, { useEffect, useRef, useState } from 'react';

const KneenewFeatures = () => {
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
          className="lucide lucide-calendar-heart">
          <path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"></path>
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <path d="M21 15.343a2.5 2.5 0 0 0-3 2.343"></path>
          <path d="M21.29 17.702a1 1 0 0 1 .71 1.228"></path>
          <path d="M18 22l3.3-3.3"></path>
          <path d="M18 18.7L21.3 22"></path>
        </svg>
      ),
      title: "95+ years of Ayurvedic expertise in Orthopaedic care."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-scroll-text">
          <path d="M15 12h-5"></path>
          <path d="M15 8h-5"></path>
          <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
          <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
        </svg>
      ),
      title: "Natural Pain Relief with Focus on Cartilage Health"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-scaling">
          <path d="M21 3 9 15"></path>
          <path d="M12 3H3v18h18v-9"></path>
          <path d="M16 3h5v5"></path>
          <path d="M14 15H9v-5"></path>
        </svg>
      ),
      title: "Full Suite of Ayurvedic + Physiotherapy + Rehab Services"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-languages">
          <path d="m5 8 6 6"></path>
          <path d="m4 14 6-6 2-3"></path>
          <path d="M2 5h12"></path>
          <path d="M7 2h1"></path>
          <path d="m22 22-5-10-5 10"></path>
          <path d="M14 18h6"></path>
        </svg>
      ),
      title: "Multilingual Care: Tamil, Hindi, Malayalam, English"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-building">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      ),
      title: "Cashless Insurance Tie-ups with Top Providers"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-award">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      ),
      title: "Headed by India's Renowned Ayurvedic Joint Expert"
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
              Why Choose <span className="text-[#f05623]">AVN Arogya?</span>
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
                  src="whyy.jpg"
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

export default KneenewFeatures;