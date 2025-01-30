import { Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import ChatBox from './ChatBox';

export default function AIChatIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText(prev => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Floating Text */}
          <div 
            className={`absolute bottom-full right-0 mb-4 transition-opacity duration-500 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-3 shadow-lg">
              <p className="text-white text-sm font-medium">
                Need help? Ask me anything!
              </p>
              {/* Triangle */}
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-purple-600 transform rotate-45" />
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="header-glow active group relative rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            aria-label="AI Chat"
          >
            <Bot className="w-8 h-8 text-white animate-robot-mechanism" />
          </button>
        </div>
      )}

      {isOpen && <ChatBox onClose={() => setIsOpen(false)} />}
    </>
  );
}