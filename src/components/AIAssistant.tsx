
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! I\'m your quantum phishing detection assistant. How can I help you today?' },
    { sender: 'bot', text: 'You can ask me questions about phishing emails, quantum detection, or request analysis insights.' }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { sender: 'user', text: message }]);
    setMessage('');
    
    // Mock response - in a real app, this would call an AI API
    setTimeout(() => {
      let response = '';
      const lowerMsg = message.toLowerCase();
      
      if (lowerMsg.includes('flagged') || lowerMsg.includes('why')) {
        response = 'Your email was flagged because it contained suspicious links and unusual sender patterns typical of phishing attempts.';
      } else if (lowerMsg.includes('quantum') || lowerMsg.includes('computing')) {
        response = 'Quantum computing helps detect phishing by analyzing message patterns using quantum algorithms that can process multiple possibilities simultaneously.';
      } else if (lowerMsg.includes('trend')) {
        response = 'Recent phishing trends show an increase in AI-generated content and sophisticated supply chain attacks targeting corporate environments.';
      } else {
        response = 'I can help with phishing detection information, security recommendations, or analyzing suspicious emails. What would you like to know?';
      }
      
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    }, 1000);
  };

  // Example questions
  const exampleQuestions = [
    "Why was my email flagged?",
    "How does quantum computing detect phishing?",
    "Show me recent phishing trends"
  ];

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full shadow-lg h-14 w-14 p-0 ${
          isOpen ? 'bg-cyber-purple' : 'bg-cyber-blue'
        } text-white hover:brightness-110 transition-all`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6 animate-pulse-glow" />
        )}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] flex flex-col cyber-panel shadow-2xl border border-cyber-blue/30 rounded-xl overflow-hidden z-50">
          {/* Header */}
          <div className="bg-cyber-darkblue p-3 border-b border-cyber-blue/30 flex items-center">
            <Avatar className="h-8 w-8 bg-cyber-blue text-cyber-black mr-2">
              <span className="font-bold text-xs">AI</span>
            </Avatar>
            <div>
              <h3 className="font-orbitron text-sm text-cyber-blue">Quantum AI Assistant</h3>
              <p className="text-xs text-foreground/70">Online | Ready to help</p>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 backdrop-blur-md">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-cyber-blue/20 border border-cyber-blue/30 text-white' 
                      : 'bg-cyber-purple/20 border border-cyber-purple/30 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Suggested questions */}
          <div className="p-2 bg-cyber-darkblue/50 border-t border-cyber-blue/30 overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-2">
              {exampleQuestions.map((q, idx) => (
                <button 
                  key={idx}
                  className="px-3 py-1 text-xs bg-cyber-darkblue border border-cyber-blue/30 rounded-full text-cyber-blue hover:bg-cyber-blue/20 whitespace-nowrap"
                  onClick={() => {
                    setMessage(q);
                    setMessages([...messages, { sender: 'user', text: q }]);
                    
                    // Same mock response logic
                    setTimeout(() => {
                      let response = '';
                      if (q.includes('flagged')) {
                        response = 'Your email was flagged because it contained suspicious links and unusual sender patterns typical of phishing attempts.';
                      } else if (q.includes('quantum')) {
                        response = 'Quantum computing helps detect phishing by analyzing message patterns using quantum algorithms that can process multiple possibilities simultaneously.';
                      } else if (q.includes('trends')) {
                        response = 'Recent phishing trends show an increase in AI-generated content and sophisticated supply chain attacks targeting corporate environments.';
                      }
                      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
                    }, 1000);
                    setMessage('');
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <div className="p-3 bg-cyber-darkblue border-t border-cyber-blue/30 flex items-end">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="min-h-[60px] flex-1 bg-cyber-black/50 border-cyber-blue/30 focus-visible:ring-cyber-blue resize-none text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <Button 
              onClick={sendMessage} 
              size="icon" 
              className="ml-2 bg-cyber-blue text-cyber-black hover:bg-cyber-brightblue self-end"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
