"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Phone, MapPin } from "lucide-react"

// Consultation Modal Component
interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

type Location = 'chennai' | 'bangalore' | 'madurai' | null

export function KneeconsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<Location>(null) // Start with no location selected
  const contentRef = useRef<HTMLDivElement>(null)
  const zohoFormRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to top when form opens and handle body scroll
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll
      document.body.style.overflow = 'hidden'
      
      if (contentRef.current) {
        contentRef.current.scrollTop = 0
      }
    } else {
      // Re-enable background scroll
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Reset selected location when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedLocation(null)
    }
  }, [isOpen])

  // Load Zoho form script when location is selected
  useEffect(() => {
    if (isOpen && selectedLocation) {
      const loadZohoForm = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        
        // Different form configurations based on selected location
        const formConfigs = {
          bangalore: {
            divId: "zf_div_A1IkGig8eUhoo8JQn0TARTmlj3evMmEcfUt06_FfYG4",
            formPerma: "A1IkGig8eUhoo8JQn0TARTmlj3evMmEcfUt06_FfYG4",
            ariaLabel: "Bangalore",
            height: "987px",
            formName: "Bangalore"
          },
          chennai: {
            divId: "zf_div_1Zr2CXNZe8D982NMy_Q0GVPqhSVMt3bC1MN5ozYaSgI",
            formPerma: "1Zr2CXNZe8D982NMy_Q0GVPqhSVMt3bC1MN5ozYaSgI",
            ariaLabel: "Chennai",
            height: "987px",
            formName: "Chennai"
          },
          madurai: {
            divId: "zf_div_5fJkELTYKD3b5DdoY6YgTqkYNgcw9oTf8f7rG7WUVsc",
            formPerma: "5fJkELTYKD3b5DdoY6YgTqkYNgcw9oTf8f7rG7WUVsc",
            ariaLabel: "Knee-treatments",
            height: "1034px",
            formName: "Kneetreatments"
          }
        }

        const config = formConfigs[selectedLocation]

        script.innerHTML = `
          (function() {
            try{
              var f = document.createElement("iframe");
              
              var ifrmSrc = 'https://forms.zohopublic.in/org60008244182/form/${config.formName}/formperma/${config.formPerma}?zf_rszfm=1';
              
              try{
                if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
                  for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                    var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                    utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                    var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                    if ( typeof utmVal !== "undefined" ) {
                      if ( utmVal != "" ) {
                        if(ifrmSrc.indexOf('?') > 0){
                             ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                        }else{
                            ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                        }
                      }
                    }
                  }
                }
                if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
                  for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                    var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                    var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                    if ( typeof utmVal !== "undefined" ) {
                      if ( utmVal != "" ){
                        if(ifrmSrc.indexOf('?') > 0){
                          ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                        }else{
                          ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                        }
                      }
                    }
                  }
                }
              }catch(e){}
              
              f.src = ifrmSrc;
              f.style.border="none";
              f.style.height="${config.height}";
              f.style.width="100%";
              f.style.transition="all 0.5s ease";
              f.setAttribute("aria-label", '${config.ariaLabel}');
              
              var d = document.getElementById("${config.divId}");
              if (d) {
                d.innerHTML = '';
                d.appendChild(f);
              }
              window.addEventListener('message', function (){
                var evntData = event.data;
                if( evntData && evntData.constructor == String ){
                  var zf_ifrm_data = evntData.split("|");
                  if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                    var zf_perma = zf_ifrm_data[0];
                    var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                    var iframe = document.getElementById("${config.divId}")?.getElementsByTagName("iframe")[0];
                    if ( iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                      var prevIframeHeight = iframe.style.height;
                      var zf_tout = false;
                      if( zf_ifrm_data.length == 3 ) {
                          iframe.scrollIntoView();
                          zf_tout = true;
                      }

                      if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                        if( zf_tout ) {
                            setTimeout(function(){
                                iframe.style.height = zf_ifrm_ht_nw;
                            },500);
                        } else {
                            iframe.style.height = zf_ifrm_ht_nw;
                        }
                      }
                    }
                  }
                }
              }, false);
            }catch(e){}
          })();
        `
        document.body.appendChild(script)
        
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script)
          }
        }
      }

      const cleanup = loadZohoForm()
      return cleanup
    }
  }, [isOpen, selectedLocation])

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
  }

  const handleBackToLocations = () => {
    setSelectedLocation(null)
  }

  if (!isOpen) return null

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" 
          onClick={onClose} 
        />

        {/* Modal Container */}
        <div className="relative w-full max-w-[90vw] h-[85vh] sm:max-w-[85vw] sm:h-[80vh] md:max-w-[80vw] md:h-[75vh] lg:max-w-[750px] lg:h-auto lg:max-h-[80vh] overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-2xl transform transition-all duration-300 flex flex-col">
          
          {/* Header - Sticky for mobile scrolling */}
          <div className="sticky top-0 bg-[#f05623] text-white p-3 sm:p-4 md:p-5 rounded-t-lg sm:rounded-t-xl z-20 flex-shrink-0">
            <div className="flex items-start justify-between gap-2 sm:gap-3">
              <div className="flex-1 text-center min-w-0">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-[white] mb-1 sm:mb-2 leading-tight">
                  {selectedLocation ? `Book Your Consultation` : 'Book Your Consultation'}
                </h2>
                <p className="text-xs text-gray-200 leading-relaxed">
                  {selectedLocation ? 'Fill out the form to get expert care' : 'Select your location to get started'}
                </p>
              </div>
              <div className="flex items-center gap-1">
                {/* Back button - Only show when a location is selected */}
                {selectedLocation && (
                  <button 
                    onClick={handleBackToLocations}
                    className="flex-shrink-0 text-gray-300 hover:text-white transition-colors duration-200 p-1.5 rounded-md hover:bg-white/10 mr-1"
                    aria-label="Back to locations"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <button 
                  onClick={onClose} 
                  className="flex-shrink-0 text-gray-300 hover:text-white transition-colors duration-200 p-1.5 rounded-md hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5"
          >
            {/* Location Selection View */}
            {!selectedLocation && (
              <div className="h-full flex flex-col items-center justify-center py-4 sm:py-6">
                <div className="text-center max-w-md mx-auto w-full">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-[#f05623]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Choose Your Location
                  </h3>
                  <p className="text-sm text-gray-600 mb-8">
                    Select your nearest clinic location to book a consultation with our knee pain specialists.
                  </p>
                  
                  {/* Location buttons displayed under the heading */}
                  <div className="space-y-4 w-full">
                       <button
                      onClick={() => handleLocationSelect('madurai')}
                      className="w-full px-6 py-4 text-base rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-[#f05623] transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                    >
                      <MapPin className="w-5 h-5 text-[#f05623]" />
                      <span className="font-medium">Madurai Hospital</span>
                    </button>
                    <button
                      onClick={() => handleLocationSelect('chennai')}
                      className="w-full px-6 py-4 text-base rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-[#f05623] transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                    >
                      <MapPin className="w-5 h-5 text-[#f05623]" />
                      <span className="font-medium">Chennai Clinic</span>
                    </button>
                    <button
                      onClick={() => handleLocationSelect('bangalore')}
                      className="w-full px-6 py-4 text-base rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-[#f05623] transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                    >
                      <MapPin className="w-5 h-5 text-[#f05623]" />
                      <span className="font-medium">Bengaluru Clinic</span>
                    </button>
                 
                  </div>
                </div>
              </div>
            )}

            {/* Zoho Form - Only show when a location is selected */}
            {selectedLocation && (
              <div className="h-full flex flex-col">
                {/* Chennai Form */}
                <div 
                  id="zf_div_1Zr2CXNZe8D982NMy_Q0GVPqhSVMt3bC1MN5ozYaSgI"
                  ref={selectedLocation === 'chennai' ? zohoFormRef : null}
                  className={`flex-1 min-h-[400px] ${selectedLocation !== 'chennai' ? 'hidden' : ''}`}
                />
                
                {/* Bangalore Form */}
                <div 
                  id="zf_div_A1IkGig8eUhoo8JQn0TARTmlj3evMmEcfUt06_FfYG4"
                  ref={selectedLocation === 'bangalore' ? zohoFormRef : null}
                  className={`flex-1 min-h-[400px] ${selectedLocation !== 'bangalore' ? 'hidden' : ''}`}
                />
                
                {/* Madurai Form (Knee Treatment) */}
                <div 
                  id="zf_div_5fJkELTYKD3b5DdoY6YgTqkYNgcw9oTf8f7rG7WUVsc"
                  ref={selectedLocation === 'madurai' ? zohoFormRef : null}
                  className={`flex-1 min-h-[400px] ${selectedLocation !== 'madurai' ? 'hidden' : ''}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}