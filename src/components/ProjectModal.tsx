import React, { useState } from 'react';
import { Project } from '../types';
import { X, Play, Cpu, CheckCircle, ExternalLink, Github, Sparkles, RefreshCw, Layers, Shield, FileText, ArrowRight, BarChart3, PieChart, QrCode, Search, Activity, Zap } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'overview'>('demo');

  // LUNG CD DEMO STATE
  const [lungCase, setLungCase] = useState<'Pneumonia' | 'COVID-19' | 'Tuberculosis' | 'Normal'>('Pneumonia');
  const [vitalsSpO2, setVitalsSpO2] = useState<number>(91);
  const [vitalsBpm, setVitalsBpm] = useState<number>(104);
  const [vitalsTemp, setVitalsTemp] = useState<number>(101.2);
  const [isInferring, setIsInferring] = useState<boolean>(false);
  const [inferenceDone, setInferenceDone] = useState<boolean>(true);

  // EXPENSE TRACKER DEMO STATE
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'AWS Cloud Hosting', amount: 45, category: 'Infrastructure', type: 'expense', date: '2026-07-22' },
    { id: '2', title: 'Freelance Frontend Stipend', amount: 350, category: 'Income', type: 'income', date: '2026-07-20' },
    { id: '3', title: 'React Course & Domain', amount: 20, category: 'Education', type: 'expense', date: '2026-07-18' },
  ]);
  const [newExpenseTitle, setNewExpenseTitle] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [newExpenseType, setNewExpenseType] = useState<'income' | 'expense'>('expense');

  // SHORTLY DEMO STATE
  const [longUrl, setLongUrl] = useState('https://github.com/nischal8585/lungcd-capstone-deep-learning');
  const [customAlias, setCustomAlias] = useState('lungcd-paper');
  const [generatedShortUrl, setGeneratedShortUrl] = useState('short.ly/lungcd-paper');
  const [clicksCount, setClicksCount] = useState(142);
  const [shortenedSuccess, setShortenedSuccess] = useState(true);

  // FINANCIAL NEWS DEMO STATE
  const [newsCategory, setNewsCategory] = useState<'All' | 'Crypto' | 'Tech' | 'Macro'>('All');

  const handleRunInference = () => {
    setIsInferring(true);
    setTimeout(() => {
      setIsInferring(false);
      setInferenceDone(true);
    }, 1200);
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpenseTitle || !newExpenseAmount) return;
    const item = {
      id: Date.now().toString(),
      title: newExpenseTitle,
      amount: parseFloat(newExpenseAmount),
      category: newExpenseType === 'income' ? 'Income' : 'General',
      type: newExpenseType,
      date: new Date().toISOString().split('T')[0],
    };
    setExpenses([item, ...expenses]);
    setNewExpenseTitle('');
    setNewExpenseAmount('');
  };

  const handleCreateShortUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!longUrl) return;
    const slug = customAlias || Math.random().toString(36).substring(2, 7);
    setGeneratedShortUrl(`short.ly/${slug}`);
    setClicksCount(0);
    setShortenedSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl my-8 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-zinc-100">{project.title}</h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-teal-400 border border-zinc-700">
                  {project.category}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Controls */}
        <div className="px-6 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'demo'
                ? 'bg-teal-400 text-zinc-950 shadow-[0_0_15px_rgba(20,184,166,0.3)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Interactive Live Simulation</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-zinc-800 text-teal-400 border border-zinc-700'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Overview & Highlights</span>
          </button>

          {project.architecture && (
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-zinc-800 text-teal-400 border border-zinc-700'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture Specs</span>
            </button>
          )}
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: INTERACTIVE SIMULATIONS */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              
              {/* DEMO 1: LUNG CD (CAPSTONE HEALTHCARE AI) */}
              {project.demoType === 'lung_cd' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Live Multimodal Clinical Diagnostic Simulator (EfficientNetB0 + Vitals Fusion)</span>
                    </div>
                    <span className="hidden sm:inline bg-teal-400 text-zinc-950 px-2 py-0.5 rounded font-bold">95.4% Accuracy</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Controls Panel */}
                    <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                      <h4 className="text-sm font-bold text-zinc-200 uppercase font-mono tracking-wider">
                        1. Select Patient X-Ray Case
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        {(['Pneumonia', 'COVID-19', 'Tuberculosis', 'Normal'] as const).map((c) => (
                          <button
                            key={c}
                            onClick={() => {
                              setLungCase(c);
                              if (c === 'Pneumonia') { setVitalsSpO2(91); setVitalsBpm(104); }
                              else if (c === 'COVID-19') { setVitalsSpO2(88); setVitalsBpm(112); }
                              else if (c === 'Normal') { setVitalsSpO2(98); setVitalsBpm(72); }
                              else { setVitalsSpO2(93); setVitalsBpm(92); }
                            }}
                            className={`p-2.5 rounded-xl text-xs font-mono font-medium border text-left transition-all ${
                              lungCase === c
                                ? 'bg-zinc-800 text-teal-400 border-teal-500/60 shadow-md'
                                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>

                      <h4 className="text-sm font-bold text-zinc-200 uppercase font-mono tracking-wider pt-2">
                        2. Patient Vital Telemetry
                      </h4>

                      <div className="space-y-3 text-xs font-mono">
                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Oxygen Saturation (SpO2)</span>
                            <span className="text-teal-400 font-bold">{vitalsSpO2}%</span>
                          </div>
                          <input
                            type="range"
                            min="75"
                            max="100"
                            value={vitalsSpO2}
                            onChange={(e) => setVitalsSpO2(Number(e.target.value))}
                            className="w-full accent-teal-400"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Heart Rate (BPM)</span>
                            <span className="text-teal-400 font-bold">{vitalsBpm} bpm</span>
                          </div>
                          <input
                            type="range"
                            min="60"
                            max="150"
                            value={vitalsBpm}
                            onChange={(e) => setVitalsBpm(Number(e.target.value))}
                            className="w-full accent-teal-400"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleRunInference}
                        disabled={isInferring}
                        className="w-full py-3 rounded-xl font-mono font-bold text-xs text-zinc-950 bg-teal-400 hover:bg-teal-300 transition-all flex items-center justify-center gap-2"
                      >
                        {isInferring ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                        <span>{isInferring ? 'Running Deep Inference...' : 'Run Multimodal AI Diagnostics'}</span>
                      </button>
                    </div>

                    {/* Results / Grad-CAM Simulation */}
                    <div className="lg:col-span-7 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
                          <span className="text-xs font-mono font-bold text-zinc-300 uppercase">Grad-CAM Radiograph Explainability Map</span>
                          <span className="text-xs font-mono text-teal-400">IEEE Capstone Model</span>
                        </div>

                        {/* Simulated Radiograph with Heatmap Overlay */}
                        <div className="relative h-48 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                          <img
                            src={`https://picsum.photos/seed/${lungCase.toLowerCase()}/600/300?grayscale`}
                            alt="Chest Radiograph"
                            className="w-full h-full object-cover opacity-60"
                          />
                          {/* Heatmap overlay spot */}
                          {lungCase !== 'Normal' && (
                            <div className="absolute top-12 left-24 w-28 h-28 rounded-full bg-gradient-to-r from-red-500/60 via-amber-500/40 to-transparent blur-md animate-pulse"></div>
                          )}
                          <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-zinc-950/90 text-[10px] font-mono text-teal-300 border border-zinc-800">
                            Heatmap: Grad-CAM Feature Activation Zone
                          </div>
                        </div>
                      </div>

                      {/* Diagnostic Report Output */}
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-zinc-400">Classified Pathology:</span>
                          <span className="text-sm font-bold font-mono text-teal-400">{lungCase}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-zinc-400">Ensemble Confidence:</span>
                          <span className="text-sm font-bold font-mono text-emerald-400">
                            {lungCase === 'Normal' ? '98.2%' : '96.5%'} Confidence
                          </span>
                        </div>

                        <p className="text-xs text-zinc-300 pt-1 border-t border-zinc-800">
                          <strong>Clinical Recommendation:</strong> {lungCase === 'Normal' ? 'No radiological abnormality detected.' : `High spatial correlation for ${lungCase}. Correlate with SpO2 (${vitalsSpO2}%) and supplemental lab vitals.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 2: EXPENSE TRACKER */}
              {project.demoType === 'expense_tracker' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div>
                        <h4 className="text-base font-bold text-zinc-100">MERN Expense Tracker Live Interface</h4>
                        <p className="text-xs font-mono text-teal-400">Protected Routes • JWT Bearer Token Simulation</p>
                      </div>
                      <div className="text-right font-mono text-xs text-zinc-400">
                        Total Balance: <strong className="text-teal-400 font-bold">$285.00</strong>
                      </div>
                    </div>

                    {/* Add Transaction Form */}
                    <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1">
                      <input
                        type="text"
                        placeholder="Expense Description"
                        value={newExpenseTitle}
                        onChange={(e) => setNewExpenseTitle(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-teal-500"
                      />
                      <input
                        type="number"
                        placeholder="Amount ($)"
                        value={newExpenseAmount}
                        onChange={(e) => setNewExpenseAmount(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-teal-500"
                      />
                      <select
                        value={newExpenseType}
                        onChange={(e) => setNewExpenseType(e.target.value as any)}
                        className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 focus:outline-none focus:border-teal-500"
                      >
                        <option value="expense">Expense (-)</option>
                        <option value="income">Income (+)</option>
                      </select>
                      <button
                        type="submit"
                        className="py-2 px-4 rounded-xl font-mono text-xs font-bold text-zinc-950 bg-teal-400 hover:bg-teal-300 transition-all"
                      >
                        + Add Record
                      </button>
                    </form>

                    {/* Transaction List */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Recent Transactions Log</p>
                      <div className="space-y-2">
                        {expenses.map((exp) => (
                          <div key={exp.id} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-between text-xs">
                            <div>
                              <p className="font-bold text-zinc-200">{exp.title}</p>
                              <p className="text-[10px] font-mono text-zinc-400">{exp.category} • {exp.date}</p>
                            </div>
                            <span className={`font-mono font-bold ${exp.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
                              {exp.type === 'income' ? '+' : '-'}${exp.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 3: FINANCIAL NEWS */}
              {project.demoType === 'financial_news' && (
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                      <div>
                        <h4 className="text-base font-bold text-zinc-100">TradingView & Market News Ticker Stream</h4>
                        <p className="text-xs font-mono text-teal-400">Live API Feeds & Mobile-First Responsive Layout</p>
                      </div>
                      
                      <div className="flex gap-1">
                        {(['All', 'Crypto', 'Tech', 'Macro'] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setNewsCategory(cat)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                              newsCategory === cat ? 'bg-teal-400 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-400'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Live Ticker Bar */}
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-wrap gap-4 text-xs font-mono">
                      <div className="flex items-center gap-1.5"><span className="text-zinc-400">NASDAQ:</span><span className="text-emerald-400 font-bold">18,245.10 (+1.2%)</span></div>
                      <div className="flex items-center gap-1.5"><span className="text-zinc-400">BTC/USD:</span><span className="text-emerald-400 font-bold">$67,420 (+2.4%)</span></div>
                      <div className="flex items-center gap-1.5"><span className="text-zinc-400">NVDA:</span><span className="text-teal-300 font-bold">$124.50 (+3.1%)</span></div>
                    </div>

                    {/* News Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800/80 space-y-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                          Bullish Sentiment
                        </span>
                        <h5 className="text-sm font-bold text-zinc-100">Federal Reserve Signal Easing Policy Boosts Tech Sector</h5>
                        <p className="text-xs text-zinc-400">Tech equities gain momentum following quarterly economic indicators.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800/80 space-y-2">
                        <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 text-[10px] font-mono border border-teal-500/20">
                          Crypto Update
                        </span>
                        <h5 className="text-sm font-bold text-zinc-100">Institutional ETF Inflows Reach All-Time Highs</h5>
                        <p className="text-xs text-zinc-400">Digital asset trading volumes surge across decentralized exchanges.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 4: SHORTLY URL SHORTENER */}
              {project.demoType === 'shortly' && (
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div>
                        <h4 className="text-base font-bold text-zinc-100">Shortly URL Shortener & QR Studio</h4>
                        <p className="text-xs font-mono text-teal-400">In-Progress Full-Stack Link Dashboard</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono">
                        Active Development
                      </span>
                    </div>

                    <form onSubmit={handleCreateShortUrl} className="space-y-3">
                      <div>
                        <label className="text-xs font-mono text-zinc-400 block mb-1">Destination Long URL</label>
                        <input
                          type="text"
                          value={longUrl}
                          onChange={(e) => setLongUrl(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-teal-500"
                        />
                      </div>

                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="text-xs font-mono text-zinc-400 block mb-1">Custom Slug (Optional)</label>
                          <input
                            type="text"
                            value={customAlias}
                            onChange={(e) => setCustomAlias(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-teal-500"
                          />
                        </div>

                        <div className="flex items-end">
                          <button
                            type="submit"
                            className="py-2 px-5 rounded-xl font-mono text-xs font-bold text-zinc-950 bg-teal-400 hover:bg-teal-300 transition-all"
                          >
                            Generate Short Link
                          </button>
                        </div>
                      </div>
                    </form>

                    {shortenedSuccess && (
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="space-y-1">
                          <p className="text-xs font-mono text-zinc-400">Your Shortened URL:</p>
                          <p className="text-base font-bold font-mono text-teal-400">{generatedShortUrl}</p>
                          <p className="text-[11px] text-zinc-400 font-mono">Analytics: {clicksCount} clicks recorded</p>
                        </div>

                        {/* Simulated QR Code Canvas */}
                        <div className="w-20 h-20 bg-white p-1.5 rounded-lg shrink-0 flex items-center justify-center">
                          <QrCode className="w-full h-full text-zinc-950" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: OVERVIEW & HIGHLIGHTS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                <h4 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider">Project Summary</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.fullOverview}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold font-mono text-zinc-200 uppercase tracking-wider">Key Functional Accomplishments</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE SPECS */}
          {activeTab === 'architecture' && project.architecture && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                <h4 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider">Data Flow & Execution Pipe</h4>
                <p className="text-xs font-mono text-zinc-300 bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                  {project.architecture.dataFlow}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                  <h4 className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-wider">Core Modules</h4>
                  <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                    {project.architecture.components.map((comp, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                  <h4 className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-wider">Stack Details</h4>
                  <div className="space-y-2 text-xs">
                    {project.architecture.techStackDetails.map((detail, dIdx) => (
                      <div key={dIdx} className="flex justify-between border-b border-zinc-900 pb-1">
                        <span className="text-zinc-500 font-mono">{detail.label}:</span>
                        <span className="text-zinc-200 font-semibold">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Shield className="w-4 h-4 text-teal-400" />
            <span>Nischal Kuncham Portfolio Codebase</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-all"
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
};
