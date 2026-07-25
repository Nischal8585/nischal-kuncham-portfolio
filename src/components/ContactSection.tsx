import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2, Copy, ExternalLink, RefreshCw } from 'lucide-react';
import { Reveal } from './Reveal';
import { PERSONAL_INFO } from '../data/portfolioData';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, tid: 'contact-email' },
  { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}`, tid: 'contact-phone' },
  { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null, tid: 'contact-location' },
  { icon: Github, label: 'GitHub', value: 'nischal8585', href: PERSONAL_INFO.github, tid: 'contact-github' },
  { icon: Linkedin, label: 'LinkedIn', value: 'nischal-k', href: PERSONAL_INFO.linkedin, tid: 'contact-linkedin' },
];

interface SentMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<SentMessage | null>(null);
  const [sentHistory, setSentHistory] = useState<SentMessage[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('nischal_portfolio_sent_messages');
      if (saved) {
        setSentHistory(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error('Please enter your name.');
      return;
    }

    if (!form.email.trim() || !validateEmail(form.email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!form.message.trim()) {
      toast.error('Please enter your message.');
      return;
    }

    setLoading(true);

    const newMessage: SentMessage = {
      id: Date.now().toString(),
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim() || 'Portfolio Contact Inquiry',
      message: form.message.trim(),
      timestamp: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    setTimeout(() => {
      setLoading(false);
      setSubmittedMessage(newMessage);

      const updatedHistory = [newMessage, ...sentHistory];
      setSentHistory(updatedHistory);
      try {
        localStorage.setItem('nischal_portfolio_sent_messages', JSON.stringify(updatedHistory));
      } catch {
        // Storage fail fallback
      }

      toast.success('Message created! Opening your email app to send...');

      // Trigger mailto link as fallback/direct send
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${newMessage.subject}`);
      const mailtoBody = encodeURIComponent(
        `Hi Nischal,\n\n${newMessage.message}\n\nBest regards,\n${newMessage.name}\n${newMessage.email}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      setForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Message copied to clipboard!');
  };

  const resetForm = () => {
    setSubmittedMessage(null);
  };

  const field =
    'w-full rounded-xl bg-zinc-900 border border-white/10 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-400 transition-colors font-sans text-sm';

  return (
    <section id="contact" className="relative bg-zinc-950 border-t border-white/10 grain overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
        <Reveal>
          <p className="font-mono-x text-teal-400 text-xs uppercase tracking-[0.3em] mb-6">04 — Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight text-white">
            Let&apos;s <span className="text-stroke-teal">talk</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-3">
            {CONTACTS.map((c) => {
              const Inner = (
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900 p-4 hover:border-teal-400/40 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                    <c.icon size={18} />
                  </span>
                  <div>
                    <div className="font-mono-x text-xs uppercase tracking-widest text-white/40">{c.label}</div>
                    <div className="text-white/85 text-sm sm:text-base font-semibold">{c.value}</div>
                  </div>
                </div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-testid={c.tid}
                  className="block"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label} data-testid={c.tid}>{Inner}</div>
              );
            })}

            {/* Message History Quick Drawer Badge */}
            <div className="pt-4">
              <button
                onClick={() => {
                  if (sentHistory.length === 0) {
                    toast.info('No message history saved in this browser yet. Send a test message!');
                  } else {
                    toast.success(`Showing ${sentHistory.length} saved message(s) in inbox viewer.`);
                  }
                }}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 hover:border-teal-400/30 text-left transition-colors text-xs font-mono-x text-zinc-400"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span>Where messages go:</span>
                </div>
                <span className="text-teal-400 font-medium">nischal8585@gmail.com</span>
              </button>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            {submittedMessage ? (
              <div className="rounded-2xl border border-teal-400/30 bg-zinc-900/90 p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-400/20 text-teal-400 border border-teal-400/30 shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      Message Prepared &amp; Sent!
                    </h3>
                    <p className="text-zinc-400 text-sm mt-1">
                      Thanks <span className="text-white font-medium">{submittedMessage.name}</span>. Your default email app was triggered to dispatch this directly to <span className="text-teal-400">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-zinc-950 p-4 space-y-2 text-sm">
                  <div className="flex justify-between text-xs font-mono-x text-zinc-500 pb-2 border-b border-white/5">
                    <span>Subject: {submittedMessage.subject}</span>
                    <span>{submittedMessage.timestamp}</span>
                  </div>
                  <p className="text-zinc-300 font-sans leading-relaxed whitespace-pre-line pt-1">
                    {submittedMessage.message}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      `[Portfolio Inquiry] ${submittedMessage.subject}`
                    )}&body=${encodeURIComponent(
                      `Hi Nischal,\n\n${submittedMessage.message}\n\nBest regards,\n${submittedMessage.name}\n${submittedMessage.email}`
                    )}`}
                    className="inline-flex items-center gap-2 rounded-full bg-teal-400 hover:bg-teal-300 px-6 py-3 text-xs font-semibold text-zinc-950 transition-colors font-mono-x"
                  >
                    <ExternalLink size={15} /> Re-open Email Client
                  </a>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `Subject: ${submittedMessage.subject}\nFrom: ${submittedMessage.name} <${submittedMessage.email}>\n\n${submittedMessage.message}`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-800 hover:bg-zinc-700 px-5 py-3 text-xs font-medium text-white transition-colors font-mono-x"
                  >
                    <Copy size={15} /> Copy Message Text
                  </button>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/20 px-5 py-3 text-xs font-medium text-zinc-400 hover:text-white transition-colors font-mono-x"
                  >
                    <RefreshCw size={14} /> Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6 md:p-8 space-y-4 shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-x uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      data-testid="contact-input-name"
                      className={field}
                      placeholder="e.g. Alex Johnson"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-x uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Email <span className="text-teal-400">*</span>
                    </label>
                    <input
                      data-testid="contact-input-email"
                      type="email"
                      className={field}
                      placeholder="e.g. alex@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-x uppercase tracking-wider text-zinc-400 mb-1.5">
                    Subject <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <input
                    data-testid="contact-input-subject"
                    className={field}
                    placeholder="e.g. Project Opportunity / Consultation"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-x uppercase tracking-wider text-zinc-400 mb-1.5">
                    Message <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    data-testid="contact-input-message"
                    rows={5}
                    className={`${field} resize-none`}
                    placeholder="Tell me about your project, timeline, or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 hover:bg-teal-300 px-8 py-3.5 text-sm font-semibold text-zinc-950 transition disabled:opacity-60 font-mono-x cursor-pointer shadow-lg"
                  >
                    {loading ? (
                      <Loader2 size={17} className="animate-spin" />
                    ) : (
                      <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <span className="text-xs text-zinc-500 font-mono-x text-center sm:text-right">
                    Direct email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-400 hover:underline">{PERSONAL_INFO.email}</a>
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

