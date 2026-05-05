"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Navigation, Car, X } from "lucide-react"
import { FaWalking } from "react-icons/fa"
import { HipconsultationModal } from "./Hippopup"

export function HipLocationFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showDirections, setShowDirections] = useState(false)
  const [travelMode, setTravelMode] = useState<'driving' | 'walking'>('driving')
  const [selectedLocation, setSelectedLocation] = useState(0) // Default to first location
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Location data
  const locations = [
    {
      id: 0,
      name: "Madurai",
      address: "175-A, Vilachery Main Rd, near Sourashtra college, Kala Malai, Pasumalai, Madurai, Tamil Nadu 625004",
      phone: "+91 95002 92220",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125773.47422459422!2d77.98859119407275!3d9.898844565230256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b00cfb1ff86a3f5%3A0x90c39a1d543d0c4a!2s175-A%2C%20Vilachery%20Main%20Rd%2C%20near%20Sourashtra%20college%2C%20Kala%20Malai%2C%20Pasumalai%2C%20Madurai%2C%20Tamil%20Nadu%20625004!3m2!1d9.8988546!2d78.0709931!5e0!3m2!1sen!2sin!4v1759999288478!5m2!1sen!2sin",
      directions: "175-A, Vilachery Main Rd, near Sourashtra college, Kala Malai, Pasumalai, Madurai, Tamil Nadu 625004",
      type: "hospital" // Madurai is a hospital
    },
    {
      id: 1,
      name: "Chennai",
      address: "Plot No:108, Vasan Villa, 3rd Cross Road, VGP Selva Nagar, Velachery, Chennai, Tamil Nadu 600042",
      phone: "+91 95002 92220",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124416.2603388021!2d80.14122614353943!3d12.97133103891204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525d999cd00011%3A0xe422a6aee7337e75!2sPlot%20No%3A108%2C%20Vasan%20Villa%2C%203rd%20Cross%20Road%2C%20VGP%20Selva%20Nagar%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042!3m2!1d12.971344!2d80.22362799999999!5e0!3m2!1sen!2sin!4v1760000653507!5m2!1sen!2sin",
      directions: "AVN Arogya Ayurvedic Centre, Velachery, Chennai, Plot No:108, Vasan Villa, 3rd Cross Road, VGP Selva Nagar, Velachery, Chennai, Tamil Nadu 600042",
      type: "clinic"
    },
    {
      id: 2,
      name: "Bengaluru",
      address: "#46/47 ,Ground Floor ,Wasa Plaza Building Waza Layout, Near Cafe Coffee Day Doddenekundi, Marathahalli, Bengaluru, Karnataka 560037",
      phone: "+91 95002 92220",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124416.3247115708!2d77.6170033435371!3d12.971202339031727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae13d5517be6b9%3A0xfe547b3af69aa8fc!2s%2346%2F47%20%2CGround%20Floor%20%2CWasa%20Plaza%20Building%20Waza%20Layout%2C%20Near%20Cafe%20Coffee%20Day%20Doddenekundi%2C%20Marathahalli%2C%20Bengaluru%2C%20Karnataka%20560037!3m2!1d12.971216799999999!2d77.699367!5e0!3m2!1sen!2sin!4v1760000169784!5m2!1sen!2sin",
      directions: "AVN Arogya Ayurvedic Centre, #46/47 ,Ground Floor ,Wasa Plaza Building Waza Layout, Near Cafe Coffee Day Doddenekundi, Marathahalli, Bengaluru, Karnataka 560037",
      type: "clinic"
    },
    {
      id: 3,
      name: "Mumbai",
      address: "Janak Deep, B 108, Pushpanjali, Seven Bunglow, Andheri West, Mumbai, Maharashtra 400061",
      phone: "+91 95002 92220",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120623.35309368205!2d72.73626378167768!3d19.130464553557633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7b61c87e1655b%3A0xe9fd6bbcb92220fe!2sJanak%20Deep%2C%20B%20108%2C%20Pushpanjali%2C%20Seven%20Bunglow%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400061!3m2!1d19.1304829!2d72.8186655!5e0!3m2!1sen!2sin!4v1760000410032!5m2!1sen!2sin",
      directions: "AVN Arogya Ayurvedic Centre - Andheri - Mumbai, Janak Deep, B 108, Pushpanjali, Seven Bunglow, Andheri West, Mumbai, Maharashtra 400061",
      type: "clinic"
    },
    {
      id: 4,
      name: "Kochi",
      address: "Ravipuram Rd, Ravipuram, Perumanoor, Kochi, Ernakulam, Kerala 682016, India",
      phone: "+91 95002 92220",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26435.093955083637!2d76.28541326572815!3d9.967180414135559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872b9e63b73d3%3A0x60fd347591186c1c!2sArogya%20Ayurvedic%20Centre!5e0!3m2!1sen!2sus!4v1760001017280!5m2!1sen!2sus",
      directions: "Ravipuram Rd, Ravipuram, Perumanoor, Kochi, Ernakulam, Kerala 682016, India",
      type: "clinic"
    },
    {
      id: 5,
      name: "Malaysia",
      address: "136-A, Jln Laksamana Cheng Ho, 75000 Melaka, Malaysia",
      phone: "+91 95002 92220",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8924080247907!2d102.25827637472675!3d2.194412497786177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1ee222b0f4bbb%3A0xa3a14781d10785bb!2sAyush%20Arogya%20Ayurvedic%20Centre!5e0!3m2!1sen!2sus!4v1760001732257!5m2!1sen!2sus",
      directions: "136-A, Jln Laksamana Cheng Ho, 75000 Melaka, Malaysia",
      type: "clinic"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoom-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const directionsLink = travelMode === 'driving' 
    ? `https://www.google.com/maps/dir/?api=1&destination=${locations[selectedLocation].directions}`
    : `https://www.google.com/maps/dir/?api=1&destination=${locations[selectedLocation].directions}&travelmode=walking`

  // Helper function to get location type display text
  const getLocationType = (location: typeof locations[0]) => {
    return location.type === "hospital" ? "Hospital" : "Clinic"
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        
        .animate-zoom-in {
          animation: zoomIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 6s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        @keyframes zoomIn {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      {/* Location Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:px-6 max-[470px]:py-4 lg:px-8" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] max-[470px]:mb-5 mb-10">
              Find <span className="text-[#f05623]">Us</span>
            </h2>
          </div>

          {/* Location Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 max-[470px]:mb-4">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(index)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedLocation === index
                    ? 'bg-[#f05623] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-[#f05623] hover:text-[#f05623]'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-[470px]:gap-4 lg:gap-12 items-center">
            {/* Contact Information - LEFT SIDE */}
            <div className="space-y-8" style={{fontFamily: "'Outfit', sans-serif"}}>
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-[#f05623] rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {locations[selectedLocation].name} {getLocationType(locations[selectedLocation])}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-3 max-[470px]:mb-0 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-[#f05623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone Number</p>
                      <p className="text-gray-700">{locations[selectedLocation].phone}</p>
                      <p className="text-sm text-gray-500">Mon-Sun, 8AM-8PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <MapPin className="w-5 h-5 text-[#f05623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {getLocationType(locations[selectedLocation])} Address
                      </p>
                      <p className="text-gray-700 whitespace-pre-line">
                        {locations[selectedLocation].address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="shiny-button w-full h-[50px] max-[470px]:mt-3 mt-6 cursor-pointer py-6"
                >
                  Book Your Appointment Today
                </Button>
              </div>
            </div>

            {/* Map Container - RIGHT SIDE */}
            <div>
              <div 
                ref={mapContainerRef}
                className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform scale-95 opacity-0 transition-all duration-700"
              >
                {/* Pulsing border animation */}
                <div className="absolute inset-0 border-[10px] border-green-500/20 rounded-xl pointer-events-none animate-pulse-slow"></div>
                
                {/* Main map iframe */}
                <iframe 
                  src={locations[selectedLocation].mapEmbed}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10"
                  aria-label={`${locations[selectedLocation].name} ${getLocationType(locations[selectedLocation])} Location`}
                ></iframe>
                
                {/* Animated location pin */}
                <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-full">
                  <div className="animate-bounce-slow">
                    <div className="bg-blue-500 p-2 rounded-full shadow-lg">
                      <MapPin className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>

                {/* Clinic badge */}
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 px-3 py-1.5 rounded-full shadow-md max-w-[90%]">
                  <div className="flex items-center space-x-2 truncate">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-500 font-medium text-sm truncate">
                      {locations[selectedLocation].name} {getLocationType(locations[selectedLocation])}
                    </span>
                  </div>
                </div>

                {/* Directions button */}
                <button 
                  onClick={() => setShowDirections(true)}
                  className="absolute bottom-4 right-4 z-20 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-all text-sm font-medium"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Directions Modal */}
        {showDirections && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold text-blue-600 flex items-center">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions to {locations[selectedLocation].name} {getLocationType(locations[selectedLocation])}
                </h3>
                <button 
                  onClick={() => setShowDirections(false)}
                  className="text-gray-500 hover:text-gray-700 p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800">
                    {getLocationType(locations[selectedLocation])} Address:
                  </h4>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border">
                    {locations[selectedLocation].address}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-4 text-gray-800">Choose Your Travel Mode:</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      onClick={() => setTravelMode('driving')}
                      className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        travelMode === 'driving' 
                          ? 'bg-blue-50 text-blue-600 border-blue-200 shadow-sm' 
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Car className="w-5 h-5 mr-2" />
                      <span>By Car</span>
                    </button>
                    <button
                      onClick={() => setTravelMode('walking')}
                      className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        travelMode === 'walking' 
                          ? 'bg-blue-50 text-blue-600 border-blue-200 shadow-sm' 
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FaWalking className="w-5 h-5 mr-2" />
                      <span>Walking</span>
                    </button>
                  </div>
                  
                  <a
                    href={directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl shadow-md transition-all duration-300 font-semibold"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
                
                <div className="text-center text-sm text-gray-500">
                  <p>We have ample parking space available</p>
                  <p>Wheelchair accessible entrance</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consultation Modal */}
        <HipconsultationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </section>
    </>
  )
}