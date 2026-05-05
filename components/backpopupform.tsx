"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Phone, MapPin } from "lucide-react"

// Consultation Modal Component
interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BackconsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Handle body scroll
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable background scroll
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" 
          onClick={onClose} 
        />

        {/* Modal Container - No scroll */}
        <div className="relative w-full max-w-[750px] h-auto max-h-[90vh] overflow-visible bg-white rounded-xl shadow-2xl transform transition-all duration-300 flex flex-col">
          
          {/* Close Button - Floating */}
          <button 
            onClick={onClose} 
            className="absolute -top-3 -right-3 z-50 bg-[#f05623] text-white hover:bg-[#d13d1a] rounded-full p-2 shadow-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content Area - No scroll */}
          <div className="p-6">
            {/* Direct Zoho Form - No location selection */}
            <div className="flex flex-col w-full">
              {/* Form Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="bg-[#f05623]/10 p-1.5 rounded-full">
                    <MapPin className="w-4 h-4 text-[#f05623]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Book Your Appointment
                  </span>
                </div>
              </div>

              {/* Zoho Form */}
              <div className="w-full">
                <iframe 
                  ref={iframeRef}
                  aria-label='Fix your Appointment' 
                  frameBorder="0" 
                  style={{height:"550px", width:"100%", border:"none"}} 
                  src='https://forms.zohopublic.in/org60008244182/form/FixyourAppointment/formperma/U_iaPI1w5ybeZDxIn_6Z2PB5iO-1d-GM4Vp7VwNaSTU'
                  className="rounded-lg shadow-lg"
                  title="Appointment Form"
                />
              </div>
              
              {/* Form Footer */}
              <div className="mt-4 pt-3 text-center">
                <p className="text-xs text-gray-400">
                  By submitting this form, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}