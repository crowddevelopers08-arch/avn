"use client";
const AvascularNecrosisInfo = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <div 
        className="min-h-[40vh] flex items-center justify-center p-4"
        style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          fontFamily: "'Outfit', sans-serif"
        }}
      >
        <div className="max-w-2xl w-full text-center mx-auto">
          <div className="relative">
            {/* Simplified decorative elements */}
            <div 
              className="hidden sm:block absolute -top-4 -left-4 w-12 h-12 rounded-full opacity-20"
              style={{ backgroundColor: '#80c141' }}
            ></div>
            
            <div 
              className="hidden sm:block absolute -bottom-4 -right-4 w-14 h-14 rounded-full opacity-20"
              style={{ backgroundColor: '#f05623' }}
            ></div>

            {/* Main content container */}
            <div 
              className="relative bg-white rounded-xl shadow-lg p-6 border mx-2"
              style={{ borderColor: '#114520', borderWidth: '1px' }}
            >
              {/* Heading */}
              <h1 
                className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
                style={{ color: '#114520' }}
              >
                Understanding Avascular Necrosis (AVN)
              </h1>

              {/* Divider */}
              <div 
                className="w-16 h-1 mx-auto mb-4 rounded-full"
                style={{ backgroundColor: '#f05623' }}
              ></div>

              {/* Body Paragraphs - reduced spacing */}
              <div className="space-y-3 text-center">
                <p 
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#114520' }}
                >
                  <span 
                    className="font-semibold"
                    style={{ color: '#f05623' }}
                  >
                    Avascular Necrosis (AVN)
                  </span> occurs when blood flow to the hip bone is blocked, causing bone tissue to weaken and collapse.
                </p>

                <p 
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#114520' }}
                >
                  It's often mistaken for back pain or arthritis — even in early stages.
                </p>

                <p 
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#114520' }}
                >
                  If you've suffered from <span style={{ color: '#f05623' }}>COVID-19</span>, used <span style={{ color: '#f05623' }}>steroids</span> for long, or consume <span style={{ color: '#f05623' }}>alcohol</span> regularly, you may be at risk.
                </p>

                <div className="pt-2">
                  <p 
                    className="text-base sm:text-lg leading-relaxed font-semibold px-4 py-2 rounded-lg inline-block"
                    style={{ 
                      color: '#80c141',
                      backgroundColor: 'rgba(128, 193, 65, 0.1)',
                      border: '2px solid #80c141'
                    }}
                  >
                    Stages 1 & 2 can be reversed naturally without surgery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvascularNecrosisInfo;