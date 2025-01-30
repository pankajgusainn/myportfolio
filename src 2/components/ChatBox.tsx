import { X, Send, Bot, User } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatBoxProps {
  onClose: () => void;
}

interface APIResponse {
  Join: string;
  successful: string;
  status: number;
  response: string;
  model: string;
}

const generateMessageId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export default function ChatBox({ onClose }: ChatBoxProps) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateMessageId(),
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const fetchAIResponse = async (prompt: string) => {
    try {
      const response = await fetch(`https://brainery.braineryy.workers.dev/chat/?prompt=${encodeURIComponent(prompt)}&model=gpt-4o-mini`);
      const data: APIResponse = await response.json();
      
      if (data.status === 200 && data.successful === "success") {
        return data.response;
      } else {
        throw new Error('Failed to get response from AI');
      }
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return "I apologize, but I'm having trouble processing your request right now. Please try again later.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateMessageId(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    // Show typing indicator
    const loadingMessage: Message = {
      id: generateMessageId(),
      text: "Typing...",
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, loadingMessage]);

    // Get AI response
    const aiResponse = await fetchAIResponse(message);
    
    // Remove loading message and add actual response
    setMessages(prev => prev.filter(msg => msg.id !== loadingMessage.id));
    setMessages(prev => [...prev, {
      id: generateMessageId(),
      text: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    }]);

    setIsLoading(false);
  };

  return (
    <div 
      ref={chatBoxRef}
      className="fixed top-32 right-6 w-[400px] bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-in slide-in-from-bottom duration-300"
    >
      {/* Header */}
      <div className={`header-glow ${isLoading ? 'active' : ''}`}>
        <div className="header-content p-3 flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">AI Assistant</h3>
            <p className="text-white/80 text-xs">Always here to help</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/10 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="h-[400px] p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2 ${
              msg.sender === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                  : 'bg-white/10'
              }`}
            >
              {msg.sender === 'user' ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={`relative group max-w-[85%] rounded-2xl p-3 ${
                msg.sender === 'user'
                  ? 'header-glow active bg-gradient-to-r from-cyan-500/10 to-purple-600/10'
                  : 'bg-white/10'
              }`}
            >
              <p className="text-white text-sm whitespace-pre-wrap">{msg.text}</p>
              <span className="absolute bottom-1 right-2 text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <div className="p-3 border-t border-white/10 bg-white/5">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 bg-white/10 text-white rounded-xl px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-2 rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}