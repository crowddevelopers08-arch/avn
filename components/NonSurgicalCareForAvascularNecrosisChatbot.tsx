"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type Message = {
  type: "bot" | "user";
  message: string;
  timestamp: Date;
};

export default function NonSurgicalCareForAvascularNecrosisChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      message:
        "Hello! Welcome to AVN Arogya Ayurvedic Hospital. AVN (Avascular Necrosis) isn't just hip pain - it's the heart attack of your hip. Reverse it naturally through Ayurveda and Physiotherapy with our proven 3-week program. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage("");
    setMessages((prev) => [...prev, { type: "user", message: userMessage, timestamp: new Date() }]);

    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let botResponse = "";

      if (lowerMessage.includes("avn") || lowerMessage.includes("avascular") || lowerMessage.includes("necrosis")) {
        botResponse = `AVN (Avascular Necrosis) is the "heart attack of your hip" where blood flow to bone tissue gets blocked, causing bone collapse. It's often mistaken for back pain or arthritis. Stages 1 and 2 can be reversed naturally without surgery through our 3-week Ayurveda and Physiotherapy program. Have you been diagnosed with AVN or experiencing hip pain?`;
      } else if (lowerMessage.includes("hip") || lowerMessage.includes("arthritis") || lowerMessage.includes("pain")) {
        botResponse = "I understand you're dealing with hip pain. Our specialists treat various hip conditions including Avascular Necrosis (AVN), arthritis, post-viral hip pain, and degenerative joint issues using non-surgical Ayurvedic methods. With 1000+ AVN cases treated and over 90% avoiding surgery, we offer proven solutions. Would you like to know if your condition can be reversed naturally?";
      } else if (lowerMessage.includes("stage") || lowerMessage.includes("mri") || lowerMessage.includes("diagnos")) {
        botResponse = "AVN has 4 stages. Early stages (1 and 2) show minimal symptoms and can be reversed naturally. MRI is crucial for accurate diagnosis as X-rays often miss early AVN. Our specialists can help identify your stage through consultation and recommend appropriate treatment.";
      } else if (lowerMessage.includes("covid") || lowerMessage.includes("steroid") || lowerMessage.includes("alcohol")) {
        botResponse = "These are major AVN risk factors. Post-COVID patients, long-term steroid users, and regular alcohol consumers are at high risk for Avascular Necrosis. Early detection and treatment can prevent surgery. We've successfully treated many such cases through Ayurveda.";
      } else if (lowerMessage.includes("treatment") || lowerMessage.includes("plan") || lowerMessage.includes("program")) {
        botResponse = "We offer a proven 3-week AVN reversal program combining:\n- Panchakarma detox\n- Specialized physiotherapy\n- Bone nutrition therapy\n- Joint strengthening exercises\n- Herbal medications\n1000+ patients successfully treated with over 90% avoiding surgery.";
      } else if (lowerMessage.includes("cost") || lowerMessage.includes("price") || lowerMessage.includes("insurance")) {
        botResponse = "Our AVN treatment plans are competitively priced with special discounts. As a NABH-accredited hospital, we offer cashless treatment through 20+ insurance partners including Bajaj Allianz, Niva Bupa, and TATA AIG. Treatment cost depends on AVN stage and duration.";
      } else if (lowerMessage.includes("success") || lowerMessage.includes("result") || lowerMessage.includes("recover")) {
        botResponse = "We have over 90% success rate in helping AVN patients avoid surgery. Our patients show significant improvement in pain relief, mobility restoration, and MRI report improvements within 3 weeks. Many return to normal activities without hip replacement.";
      } else if (lowerMessage.includes("time") || lowerMessage.includes("duration") || lowerMessage.includes("week")) {
        botResponse = "Our core AVN treatment program is 3 weeks, with noticeable improvements often within the first week. Total duration depends on AVN stage and individual response. Early stages (1-2) respond fastest to treatment.";
      } else if (lowerMessage.includes("doctor") || lowerMessage.includes("varier")) {
        botResponse = "Dr. Ramesh R Varier is our Managing Director and Chief Ayurvedic Physician with 35+ years specializing in AVN and hip disorders. He graduated as 1st Rank Holder from Madras University and is a nationally recognized authority in Ayurvedic joint care, having treated 1000+ AVN cases.";
      } else {
        botResponse = "Thank you for your message. For specific AVN-related queries about stages, treatment, recovery, or consultation, I recommend speaking with our specialists. You can call +91 95002 92220 to get personalized AVN guidance.";
      }

      setMessages((prev) => [...prev, { type: "bot", message: botResponse, timestamp: new Date() }]);
    }, 1000);
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 max-[470px]:mb-[50px]" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:h-16 sm:w-16"
          style={{ backgroundColor: "#014214", boxShadow: "0 4px 14px rgba(1, 66, 20, 0.4)" }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-2 z-50 flex h-80 w-[calc(100vw-20px)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:bottom-24 sm:right-6 sm:h-96 sm:w-80" style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)" }}>
          <div className="flex items-center space-x-2 rounded-t-2xl p-3 text-white sm:space-x-3 sm:p-4" style={{ background: "linear-gradient(135deg, #014214 0%, #013310 100%)" }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 sm:h-10 sm:w-10">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold sm:text-base">AVN Arogya Assistant</div>
              <div className="flex items-center text-xs opacity-90">
                <div className="mr-1 h-2 w-2 rounded-full bg-green-400"></div>
                Online now
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white transition-colors hover:text-gray-200" aria-label="Close chat">
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto bg-gray-50 p-3 sm:space-y-3 sm:p-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl p-2 sm:max-w-xs sm:p-3 ${
                    msg.type === "user"
                      ? "rounded-tr-none border border-gray-100 bg-white text-gray-800 shadow-sm"
                      : "rounded-tl-none text-white"
                  }`}
                  style={msg.type === "bot" ? { background: "linear-gradient(135deg, #014214 0%, #013310 100%)" } : {}}
                >
                  <div className="whitespace-pre-line text-xs sm:text-sm">{msg.message}</div>
                  <div className={`mt-1 text-[10px] opacity-70 ${msg.type === "user" ? "text-right text-gray-500" : "text-left text-white"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 bg-white p-2 sm:p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about AVN treatment..."
                className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-xs focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#114520] sm:text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 max-[470px]:w-[45px]"
                style={{ background: "linear-gradient(135deg, #014214 0%, #013310 100%)" }}
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
