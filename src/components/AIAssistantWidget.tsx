import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, EDUCATION_DATA, WORK_EXPERIENCE_DATA } from '../data/portfolioData';
import { Bot, X, Send, Sparkles, User, RefreshCw, ChevronDown } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hi! I'm Nischal's Portfolio AI Assistant. Ask me anything about Nischal's SRM AP B.Tech degree, LungCD capstone paper, MERN stack skills, or internship experience!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('lungcd') || q.includes('capstone') || q.includes('ieee') || q.includes('x-ray') || q.includes('disease')) {
      return `LungCD is Nischal's capstone project: a multimodal AI clinical decision-support system classifying lung diseases from chest X-rays & vitals. It combines EfficientNetB0 transfer learning with a Vitals Transformer for 95%+ accuracy, features Grad-CAM explainability maps, and is published as an IEEE research paper!`;
    }

    if (q.includes('cgpa') || q.includes('education') || q.includes('srm') || q.includes('college') || q.includes('university')) {
      return `Nischal graduated with a B.Tech in Computer Science Engineering from SRM University AP (2022–2026) with a CGPA of 7.63. Previously, he scored 87% in Intermediate MPC at Sri Chaitanya Institutions.`;
    }

    if (q.includes('intern') || q.includes('experience') || q.includes('edunet') || q.includes('work')) {
      return `Nischal worked as a Software Development Intern at Edunet Foundation (Jun 2024 – Jul 2024), where he engineered a responsive student portfolio web app, built reusable frontend UI components, and optimized cross-device performance.`;
    }

    if (q.includes('skills') || q.includes('react') || q.includes('stack') || q.includes('python') || q.includes('backend')) {
      return `Nischal's technical stack includes:
- Frontend: React 19, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
- Backend & DB: Node.js, Express.js, MongoDB, MySQL, REST APIs, JWT
- Cloud & Tools: AWS Fundamentals, Git/GitHub, VS Code
- ML/Languages: Python, PyTorch, EfficientNetB0, C, Java
- Certifications: AWS Cloud Fundamentals, NPTEL Python, Google AI Professional Certificate!`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('location')) {
      return `You can reach Nischal directly at:
- Email: nischal8585@gmail.com
- Phone: +91 9912366224
- Location: Visakhapatnam, Andhra Pradesh
- GitHub: github.com/nischal8585
- LinkedIn: linkedin.com/in/nischal-k`;
    }

    if (q.includes('project') || q.includes('expense') || q.includes('shortly') || q.includes('news')) {
      return `Nischal has built 4 key projects:
1. LungCD (Healthcare ML Capstone & IEEE Paper)
2. Personal Expense Tracker (MERN Stack with JWT Auth)
3. Financial News App (React & TradingView Charting)
4. Shortly (Full-Stack URL Shortener & QR Studio - In Progress)`;
    }

    return `Nischal Kuncham is a 2026 CS graduate from SRM University AP specializing in Full-Stack Web Development (React/Node.js) and Healthcare Machine Learning. Feel free to ask about his projects, skills, CGPA (7.63), or internship experience!`;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAnswer(userMsg.text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-zinc-900 border border-teal-500/50 text-teal-400 font-mono text-xs font-bold shadow-[0_0_25px_rgba(20,184,166,0.35)] hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-teal-400" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
          </div>
          <span>Ask Nischal's AI</span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] h-[500px] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Widget Header */}
          <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-zinc-100 flex items-center gap-1">
                  Nischal AI Assistant
                  <Sparkles className="w-3 h-3 text-teal-400 inline" />
                </h4>
                <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="p-2 bg-zinc-900/60 border-b border-zinc-800/80 flex gap-1.5 overflow-x-auto text-[10px] font-mono">
            <button
              onClick={() => { setInput("Tell me about the LungCD capstone project"); }}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 hover:text-teal-300 shrink-0 border border-zinc-700/60"
            >
              🫁 LungCD Capstone
            </button>
            <button
              onClick={() => { setInput("What is Nischal's CGPA & SRM AP degree?"); }}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 hover:text-teal-300 shrink-0 border border-zinc-700/60"
            >
              🎓 SRM AP Degree
            </button>
          </div>

          {/* Messages Feed */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[80%] space-y-1 ${
                    m.sender === 'user'
                      ? 'bg-teal-400 text-zinc-950 font-medium rounded-tr-none'
                      : 'bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{m.text}</p>
                  <span className={`text-[9px] font-mono block text-right ${m.sender === 'user' ? 'text-zinc-800' : 'text-zinc-500'}`}>
                    {m.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-400" />
                <span>Assistant is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Nischal's background..."
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-teal-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
