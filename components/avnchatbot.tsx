'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  message: string;
  timestamp: Date;
}

export default function Avnchatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      message: 'Hello! Welcome to AVN Arogya Ayurvedic Hospital. AVN (Avascular Necrosis) isn\'t just hip pain — it\'s the "heart attack of your hip." Reverse it naturally through Ayurveda & Physiotherapy with our proven 3-week program. How can I help you today?',
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

      if (lowerMessage.includes('avn') || lowerMessage.includes('avascular') || lowerMessage.includes('necrosis')) {
        botResponse = 'AVN (Avascular Necrosis) is the "heart attack of your hip" where blood flow to bone tissue gets blocked, causing bone collapse. It\'s often mistaken for back pain or arthritis. Stages 1 & 2 can be reversed naturally without surgery through our 3-week Ayurveda & Physiotherapy program. Have you been diagnosed with AVN or experiencing hip pain?';
      } else if (lowerMessage.includes('hip') || lowerMessage.includes('arthritis') || lowerMessage.includes('pain')) {
        botResponse = 'I understand you\'re dealing with hip pain. Our specialists treat various hip conditions including Avascular Necrosis (AVN), arthritis, post-viral hip pain, and degenerative joint issues using non-surgical Ayurvedic methods. With 1000+ AVN cases treated and over 90% avoiding surgery, we offer proven solutions. Would you like to know if your condition can be reversed naturally?';
      } else if (lowerMessage.includes('stage') || lowerMessage.includes('mri') || lowerMessage.includes('diagnos')) {
        botResponse = 'AVN has 4 stages. Early stages (1 & 2) show minimal symptoms and can be reversed naturally. MRI is crucial for accurate diagnosis as X-rays often miss early AVN. Our specialists can help identify your stage through consultation and recommend appropriate treatment.';
      } else if (lowerMessage.includes('covid') || lowerMessage.includes('steroid') || lowerMessage.includes('alcohol')) {
        botResponse = 'These are major AVN risk factors! Post-COVID patients, long-term steroid users, and regular alcohol consumers are at high risk for Avascular Necrosis. Early detection and treatment can prevent surgery. We\'ve successfully treated many such cases through Ayurveda.';
      } else if (lowerMessage.includes('treatment') || lowerMessage.includes('plan') || lowerMessage.includes('program')) {
        botResponse = 'We offer a proven 3-week AVN reversal program combining:\n• Panchakarma detox\n• Specialized physiotherapy\n• Bone nutrition therapy\n• Joint strengthening exercises\n• Herbal medications\n1000+ patients successfully treated with over 90% avoiding surgery.';
      } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('insurance')) {
        botResponse = 'Our AVN treatment plans are competitively priced with special discounts. As a NABH-accredited hospital, we offer cashless treatment through 20+ insurance partners including Bajaj Allianz, Niva Bupa, and TATA AIG. Treatment cost depends on AVN stage and duration.';
      } else if (lowerMessage.includes('success') || lowerMessage.includes('result') || lowerMessage.includes('recover')) {
        botResponse = 'We have over 90% success rate in helping AVN patients avoid surgery! Our patients show significant improvement in pain relief, mobility restoration, and MRI report improvements within 3 weeks. Many return to normal activities without hip replacement.';
      } else if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('week')) {
        botResponse = 'Our core AVN treatment program is 3 weeks, with noticeable improvements often within the first week. Total duration depends on AVN stage and individual response. Early stages (1-2) respond fastest to treatment.';
      } else if (lowerMessage.includes('doctor') || lowerMessage.includes('varier')) {
        botResponse = 'Dr. Ramesh R Varier is our Managing Director & Chief Ayurvedic Physician with 35+ years specializing in AVN and hip disorders. He graduated as 1st Rank Holder from Madras University and is a nationally recognized authority in Ayurvedic joint care, having treated 1000+ AVN cases.';
      } else {
        botResponse = 'Thank you for your message! For specific AVN-related queries about stages, treatment, recovery, or consultation, I recommend speaking with our specialists. You can call +91 95002 92220 to get personalized AVN guidance.';
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
                placeholder="Ask about AVN treatment..."
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