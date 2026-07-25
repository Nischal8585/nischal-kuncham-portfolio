import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, WORK_EXPERIENCE_DATA, SKILLS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
NISCHAL KUNCHAM
Full-Stack Developer | React & ML Enthusiast
Email: ${PERSONAL_INFO.emails[0]} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
- SRM University AP: B.Tech Computer Science Engineering (2022-2026) | CGPA: 7.52
- Sri Chaitanya Educational Institutions: Intermediate MPC (2020-2022) | 87%

EXPERIENCE:
- Edunet Foundation (Jun 2024 - Jul 2024): Software Development Intern
  • Built responsive student portfolio web app using HTML, CSS, JavaScript.
  • Engineered reusable frontend UI components focused on usability and cross-device performance.

PROJECTS:
1. LungCD (Capstone): Multimodal deep learning clinical decision support system (95%+ accuracy) combining EfficientNetB0 and patient vitals. Published IEEE paper.
2. Personal Expense Tracker: Full-stack MERN expense tracker with JWT authentication, protected routes, and custom React hooks.
3. Financial News App: Real-time stock news & insights app integrating News API and TradingView charts.
4. Shortly: Full-stack URL shortener with link analytics, QR generation, and custom slugs.

SKILLS:
React, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, Express, MongoDB, MySQL, PyTorch, Python, AWS Fundamentals, Git/GitHub.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Toolbar Header */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100">Nischal Kuncham — Curriculum Vitae</h3>
              <p className="text-xs font-mono text-zinc-400">ATS-Optimized Resume Preview</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 border border-zinc-700 transition-all"
              title="Copy Raw Resume Text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-teal-400" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <a
              href="/my_latest_resume.pdf"
              download="Nischal_Kuncham_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-xs font-mono font-bold text-zinc-950 shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-medium text-zinc-200 border border-zinc-700 transition-all"
            >
              <Printer className="w-4 h-4 text-teal-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Body (A4 Style Document Sheet) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-zinc-950 text-zinc-200 font-sans leading-relaxed text-sm">
          
          {/* Header Contact Block */}
          <div className="border-b border-zinc-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-zinc-100 tracking-tight">Nischal Kuncham</h1>
                <p className="text-sm font-mono text-teal-400 font-semibold">{PERSONAL_INFO.role}</p>
              </div>

              <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5"><Mail className="w-3.5 h-3.5 text-teal-400" /> {PERSONAL_INFO.emails[0]}</p>
                <p className="flex items-center sm:justify-end gap-1.5"><Phone className="w-3.5 h-3.5 text-teal-400" /> {PERSONAL_INFO.phone}</p>
                <p className="flex items-center sm:justify-end gap-1.5"><MapPin className="w-3.5 h-3.5 text-teal-400" /> {PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-teal-400">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> github.com/nischal8585
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/nischal-k
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 border-b border-zinc-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 border-b border-zinc-800 pb-1">
              Education
            </h2>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-bold text-zinc-100 text-sm">
                  <span>{edu.degree} — {edu.institution}</span>
                  <span className="font-mono text-xs text-teal-400">{edu.period}</span>
                </div>
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>{edu.location}</span>
                  <span className="font-mono text-zinc-300 font-semibold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 border-b border-zinc-800 pb-1">
              Work Experience
            </h2>
            {WORK_EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between font-bold text-zinc-100 text-sm">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-xs text-teal-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Technical Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 border-b border-zinc-800 pb-1">
              Technical Projects & IEEE Research
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-bold text-zinc-100">LungCD (Capstone Project — Multimodal DL Healthcare AI)</p>
                <p className="text-zinc-300">Achieved 95%+ classification accuracy using EfficientNetB0 CNN-Transformer architecture and Grad-CAM explainability. Published as IEEE research paper.</p>
              </div>
              <div>
                <p className="font-bold text-zinc-100">Personal Expense Tracker (MERN Stack)</p>
                <p className="text-zinc-300">Full-stack web application with JWT auth, custom React hooks, protected routes, role-based access control, and Node.js RESTful APIs.</p>
              </div>
              <div>
                <p className="font-bold text-zinc-100">Financial News Application (React Web App)</p>
                <p className="text-zinc-300">Real-time market insights app integrating News API & TradingView live technical chart widgets.</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 border-b border-zinc-800 pb-1">
              Skills & Certifications
            </h2>
            <p className="text-xs text-zinc-300 font-mono">
              <strong className="text-zinc-100">Frontend & UI:</strong> React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Component Architecture.<br />
              <strong className="text-zinc-100">Backend & DB:</strong> Node.js, Express.js, MongoDB, MySQL, RESTful APIs, JWT.<br />
              <strong className="text-zinc-100">Cloud & Tools:</strong> AWS Fundamentals, Git, GitHub, VS Code, Web Performance Optimization.<br />
              <strong className="text-zinc-100">Certifications:</strong> AWS Cloud Fundamentals, NPTEL Python, Google AI Professional Certificate.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
