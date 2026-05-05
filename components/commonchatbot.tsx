'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  message: string;
  timestamp: Date;
}

export default function Hipchatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      message: 'Hello! Welcome to AVN Arogya Ayurvedic Hospital. Say goodbye to hip pain & AVN without surgery. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage('');

    setMessages(prev => [...prev, { type: 'user', message: userMessage, timestamp: new Date() }]);

    // Simple bot responses based on keywords
    setTimeout(() => {
      let botResponse = '';
      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('hip') || lowerMessage.includes('avn') || lowerMessage.includes('arthritis')) {
        botResponse = 'I understand you\'re dealing with hip pain or AVN. Our specialists treat various hip conditions including Avascular Necrosis (AVN), arthritis, post-viral hip pain, and degenerative joint issues using non-surgical Ayurvedic methods. With 95+ years of excellence, we\'ve helped thousands of surgery-recommended hip cases avoid surgery.';
      } else if (lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
        botResponse = 'To book an appointment for hip treatment, please call +91 95002 92220. We\'re available daily from 10 AM to 8 PM. You can also visit us directly at our hospital.';
      } else if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        botResponse = 'Our hip treatment plans are competitively priced with special discounts for seniors and defense families. As a NABH-accredited hospital, we offer cashless treatment through 20+ insurance partners including Bajaj Allianz, Niva Bupa, and TATA AIG. Please call for detailed pricing.';
      } else if (lowerMessage.includes('location') || lowerMessage.includes('address')) {
        botResponse = 'We\'re located at AVN Arogya Ayurvedic Hospital, Chennai. We\'re open daily from 10 AM to 8 PM for hip consultations.';
      } else if (lowerMessage.includes('time') || lowerMessage.includes('hour')) {
        botResponse = 'Our hospital is open daily from 10 AM to 8 PM. We\'re here to help you with your hip pain and AVN concerns.';
      } else if (lowerMessage.includes('treatment') || lowerMessage.includes('plan')) {
        botResponse = 'We offer customized hip treatment plans based on individual conditions. All plans use non-surgical Ayurveda, Panchakarma detox, joint nutrition therapy, and modern rehabilitation therapies tailored to your specific needs.';
      } else if (lowerMessage.includes('insurance') || lowerMessage.includes('cashless')) {
        botResponse = 'Yes! We offer cashless treatment for hip conditions through 20+ insurance and TPA partners including Bajaj Allianz, Liberty General, Cholamandalam, Niva Bupa, Reliance, TATA AIG, SBI, and more. Our dedicated insurance team assists with pre-approvals and claims.';
      } else if (lowerMessage.includes('doctor') || lowerMessage.includes('varier')) {
        botResponse = 'Dr. Ramesh R Varier is our Managing Director & Chief Ayurvedic Physician with 35+ years of experience specializing in hip disorders, AVN, and joint conditions. He graduated as 1st Rank Holder from Madras University and is a nationally recognized authority in Ayurvedic joint care.';
      } else if (lowerMessage.includes('experience') || lowerMessage.includes('years')) {
        botResponse = 'We have 95+ years of Ayurvedic excellence since 1930. We\'re the first NABH-accredited Ayurvedic hospital in Tamil Nadu with 4.7/5 Google ratings from thousands of patients treated for hip conditions.';
      } else if (lowerMessage.includes('avascular') || lowerMessage.includes('necrosis')) {
        botResponse = 'For Hip AVN (Avascular Necrosis), we offer specialized Ayurvedic therapies that improve blood circulation to the hip joint, reduce pain, and help preserve the joint naturally without surgery. Early intervention can significantly improve outcomes.';
      } else if (lowerMessage.includes('viral') || lowerMessage.includes('fever')) {
        botResponse = 'Post-viral hip pain after infections like Chikungunya or Dengue responds very well to our Ayurvedic treatments. We focus on reducing inflammation and restoring joint function through natural therapies.';
      } else {
        botResponse = 'Thank you for your message! For specific medical queries about Hip AVN, arthritis, post-viral hip pain, or other hip conditions, I recommend speaking directly with our specialists. You can call +91 95002 92220 for personalized assistance.';
      }

      setMessages(prev => [...prev, { type: 'bot', message: botResponse, timestamp: new Date() }]);
    }, 1000);
  };

  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 max-[470px]:mb-[50px] sm:right-6 z-50"style={{fontFamily: "'Outfit', sans-serif" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
          style={{backgroundColor: '#014214', boxShadow: '0 4px 14px rgba(1, 66, 20, 0.4)'}}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 w-[calc(100vw-20px)] sm:w-80 h-80 sm:h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden"
             style={{boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'}}>
          {/* Header */}
          <div className="p-3 sm:p-4 rounded-t-2xl text-white flex items-center space-x-2 sm:space-x-3"
               style={{backgroundColor: '#014214', background: 'linear-gradient(135deg, #014214 0%, #013310 100%)'}}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm sm:text-base truncate">AVN Arogya Assistant</div>
              <div className="text-xs opacity-90 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                Online now
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 sm:space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] xs:max-w-xs p-2 sm:p-3 rounded-2xl ${
                  msg.type === 'user' 
                    ? 'bg-white text-gray-800 rounded-tr-none shadow-sm border border-gray-100' 
                    : 'text-white rounded-tl-none'
                }`}
                style={msg.type === 'bot' ? {background: 'linear-gradient(135deg, #014214 0%, #013310 100%)'} : {}}>
                  <div className="text-xs sm:text-sm whitespace-pre-line">{msg.message}</div>
                  <div className={`text-[10px] mt-1 opacity-70 ${msg.type === 'user' ? 'text-right text-gray-500' : 'text-left text-white'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 sm:p-3 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about hip pain or AVN treatment..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#114520] focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="w-8 h-8 rounded-full max-[470px]:w-[45px] text-white flex items-center justify-center hover:opacity-90 transition-all flex-shrink-0 shadow-sm hover:shadow-md"
                style={{backgroundColor: '#014214', background: 'linear-gradient(135deg, #014214 0%, #013310 100%)'}}
                aria-label="Send message"
                disabled={!inputMessage.trim()}
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}