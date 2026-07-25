import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ResumeButtons } from './ResumeDialog';

interface NavbarProps {
  activeSection?: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#top' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass border-b border-white/10' : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => go('#home')}
          data-testid="logo-button"
          className="font-display font-bold text-lg tracking-tight flex items-center gap-2 text-white hover:opacity-90 transition-opacity cursor-pointer"
        >
          <span className="text-teal-400">N</span>K
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
        </button>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="font-mono-x text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <ResumeButtons compact />
        </div>

        <button
          className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="font-display text-2xl text-left text-white/80 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/10">
                <ResumeButtons />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
