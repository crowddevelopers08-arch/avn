"use client";
import React, { useEffect, useRef, useState } from 'react';

const InsurancePartners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'insurance' | 'tpa'>('insurance');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const insuranceCompanies = [
    "Bajaj Allianz", "Liberty General", "Cholamandalam", "Niva Bupa", 
    "Reliance", "Aditya Birla", "TATA AIG", "SBI", "Go Digit", 
    "Navi", "ManipalCigna", "Zuno General Insurance"
  ];

  const tpaPartners = [
    "Vidal Health", "Vipul Medcorp", "Good Health", "Safeway", 
    "Ericson", "Paramount", "FHPL", "Heritage Health", "Health India Insurance"
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full bg-white py-6 sm:py-8 max-[470px]:py-4 lg:py-8 px-4 sm:px-6 lg:px-8 font-sans"style={{fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 max-[470px]:mb-4 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#114520] mb-3 sm:mb-6 leading-tight">
            Insurance <span className="text-[#f05623] block sm:inline">& TPA Partners</span>
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            We offer cashless treatment in partnership with<br></br> India’s top insurance and TPA providers.
          </p>
        </div>

        {/* Tab Navigation - Responsive */}
        <div className="flex justify-center mb-6 max-[470px]:mb-4 sm:mb-12">
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-1 sm:p-2 w-full max-w-md sm:max-w-lg">
            <div className="flex">
              <button
                onClick={() => setActiveTab('insurance')}
                className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === 'insurance'
                    ? 'bg-[#114520] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#114520]'
                }`}
              >
                Insurance
              </button>
              <button
                onClick={() => setActiveTab('tpa')}
                className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === 'tpa'
                    ? 'bg-[#114520] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#114520]'
                }`}
              >
                TPA Partners
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Insurance Companies */}
          <div
            className={`transition-all duration-500 ${
              activeTab === 'insurance'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 absolute translate-y-4 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {insuranceCompanies.map((company, index) => (
                <div
                  key={company}
                  className={`bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 shadow-md hover:shadow-lg border border-gray-200 hover:border-[#014214] transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 ${
                    isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 0.03}s` : '0s'
                  }}
                >
                  <div className="text-center">
                    <h3 className="font-semibold sm:font-bold text-[#114520] text-xs sm:text-sm lg:text-base leading-tight">
                      {company}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TPA Partners */}
          <div
            className={`transition-all duration-500 ${
              activeTab === 'tpa'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 absolute translate-y-4 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {tpaPartners.map((tpa, index) => (
                <div
                  key={tpa}
                  className={`bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 shadow-md hover:shadow-lg border border-gray-200 hover:border-[#88be22] transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 ${
                    isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 0.03}s` : '0s'
                  }}
                >
                  <div className="text-center">
                    <h3 className="font-semibold sm:font-bold text-[#114520] text-xs sm:text-sm lg:text-base leading-tight">
                      {tpa}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements - Responsive */}
        <div className="fixed top-1/4 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#114520] rounded-full blur-2xl sm:blur-3xl opacity-5 -z-10"></div>
        <div className="fixed bottom-1/4 right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-[#80c141] rounded-full blur-2xl sm:blur-3xl opacity-5 -z-10"></div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-sans { 
          font-family: 'Inter', sans-serif;
        }
        
        /* Improve touch targets for mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default InsurancePartners;