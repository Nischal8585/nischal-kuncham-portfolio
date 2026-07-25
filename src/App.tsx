import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBand } from './components/MarqueeBand';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-teal-400 selection:text-zinc-950">
      
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Portfolio Content */}
      <main id="top">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <MarqueeBand />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive AI Assistant */}
      <AIAssistantWidget />

      {/* Interactive Project Modal & Simulation */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Quick View & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Sonner Dark Toast Notifications */}
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#141414',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
          },
        }}
      />

    </div>
  );
}
