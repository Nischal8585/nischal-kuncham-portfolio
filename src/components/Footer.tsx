import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12 relative overflow-hidden text-white/50 text-xs font-mono-x" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-teal-400 font-display font-bold text-lg">
              NK
            </div>
            <div>
              <p className="font-bold text-white text-sm font-display">{PERSONAL_INFO.name}</p>
              <p className="text-white/40 text-[11px] font-mono-x">B.Tech CSE • SRM AP &apos;26 • {PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Socials & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:text-teal-400 hover:border-teal-400/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:text-teal-400 hover:border-teal-400/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-teal-400 border border-white/10 hover:border-teal-400/40 transition-all ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-[11px]">
          <p>© {new Date().getFullYear()} Nischal Kuncham. Built with React 19, Tailwind CSS &amp; Motion.</p>
          <div className="flex items-center gap-1.5 text-teal-400 font-mono-x">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Designed in Dark Theme with Teal Accent</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
