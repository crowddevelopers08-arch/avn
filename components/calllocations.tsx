"use client";
import React from 'react';
import { Phone, X } from 'lucide-react';

// Location data with phone numbers
export const locations = [
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

export const LocationModal = ({ isOpen, onClose }) => {
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <style jsx global>{`
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
          width: 100%;
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
      `}</style>
      
      <div className="location-modal-overlay">
        <div className="location-modal">
          <div className="location-modal-header">
            <h2 className="location-modal-title">Select Location</h2>
            <button 
              onClick={onClose}
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
    </>
  );
};

// Hook for using the location modal
export const useLocationModal = () => {
  const [isLocationModalOpen, setIsLocationModalOpen] = React.useState(false);

  const openLocationModal = () => setIsLocationModalOpen(true);
  const closeLocationModal = () => setIsLocationModalOpen(false);

  return {
    isLocationModalOpen,
    openLocationModal,
    closeLocationModal
  };
};