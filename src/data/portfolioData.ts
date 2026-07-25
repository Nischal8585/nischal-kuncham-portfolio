import { Skill, Education, WorkExperience, Certification, Project } from '../types';

export const PERSONAL_INFO = {
  name: 'Nischal Kuncham',
  first: 'Nischal',
  last: 'Kuncham',
  role: 'Full-Stack Developer | React & ML Enthusiast',
  tagline: 'Full-Stack Developer',
  taglineAccent: 'React & ML Enthusiast',
  intro: 'Recently graduated Computer Science engineer crafting responsive, component-based interfaces and full-stack systems — with a curiosity for applying machine learning to real-world problems.',
  bio: 'Recently graduated Computer Science undergraduate with hands-on experience building frontend and full-stack web applications. Comfortable working across the stack — from crafting responsive, component-based UIs with React and JavaScript to building RESTful APIs and working with databases. Also curious about applying machine learning to real-world problems, having built a deep learning-based clinical decision-support project. Always looking to learn, build, and improve.',
  location: 'Visakhapatnam, Andhra Pradesh',
  email: 'nischal8585@gmail.com',
  altEmail: 'nischalkuncham@gmail.com',
  emails: ['nischal8585@gmail.com', 'nischalkuncham@gmail.com'],
  phone: '9912366224',
  github: 'https://github.com/nischal8585',
  linkedin: 'https://linkedin.com/in/nischal-k',
  photo: '/portfolioimage1.png',
  resumePdf: '/my_latest_resume.pdf',
  stats: [
    { label: 'Degree', value: 'B.Tech CSE' },
    { label: 'Graduation Year', value: '2026' },
    { label: 'SRM AP CGPA', value: '7.63' },
    { label: 'DL Accuracy', value: '95%+' },
  ],
};

export const PROFILE = PERSONAL_INFO;
export const BIO_SUMMARY = PERSONAL_INFO.bio;
export const BIO = PERSONAL_INFO.bio;

export const TIMELINE_DATA = [
  {
    type: 'experience',
    role: 'Software Development Intern',
    org: 'Edunet Foundation',
    period: 'Jun 2024 – Jul 2024',
    meta: '',
    points: [
      'Built a responsive student portfolio web application using HTML, CSS & JavaScript.',
      'Engineered reusable front-end components focused on usability and cross-device compatibility.',
      'Validated behavior across devices and optimized performance.',
    ],
  },
  {
    type: 'education',
    role: 'B.Tech, Computer Science Engineering',
    org: 'SRM University AP',
    period: '2022 – 2026',
    meta: 'CGPA 7.63',
    points: [],
  },
  {
    type: 'education',
    role: 'Intermediate Education',
    org: 'Sri Chaitanya Educational Institutions',
    period: '2020 – 2022',
    meta: '87%',
    points: [],
  },
];

export const TIMELINE = TIMELINE_DATA;

export const SKILLS_DATA: Skill[] = [
  { name: 'React', category: 'frontend', level: 90, iconName: 'Code', tags: ['Hooks', 'Context API', 'Component Architecture'] },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 88, iconName: 'FileCode', tags: ['Async/Await', 'DOM', 'Promises'] },
  { name: 'HTML5', category: 'frontend', level: 95, iconName: 'Layout', tags: ['Semantic Markup', 'Accessibility'] },
  { name: 'CSS3 / Tailwind', category: 'frontend', level: 92, iconName: 'Palette', tags: ['Flexbox', 'Grid', 'Keyframe Animations'] },
  { name: 'Responsive Web Design', category: 'ui_design', level: 92, iconName: 'MonitorMobile', tags: ['Mobile-First', 'Fluid Layouts'] },
  { name: 'Component Architecture', category: 'ui_design', level: 88, iconName: 'Boxes', tags: ['Reusability', 'Design Tokens'] },
  { name: 'Node.js', category: 'backend', level: 82, iconName: 'Server', tags: ['Express.js', 'REST APIs'] },
  { name: 'Express.js', category: 'backend', level: 84, iconName: 'Cpu', tags: ['Middleware', 'Routing', 'JWT Auth'] },
  { name: 'MongoDB', category: 'backend', level: 80, iconName: 'Database', tags: ['Mongoose', 'Aggregation'] },
  { name: 'MySQL', category: 'backend', level: 78, iconName: 'DatabaseBackup', tags: ['Relational Schema', 'SQL Queries'] },
  { name: 'AWS (Fundamentals)', category: 'cloud_tools', level: 72, iconName: 'Cloud', tags: ['S3', 'EC2', 'Cloud Basics'] },
  { name: 'Git & GitHub', category: 'cloud_tools', level: 88, iconName: 'GitBranch', tags: ['Version Control', 'Pull Requests'] },
  { name: 'VS Code', category: 'cloud_tools', level: 95, iconName: 'Terminal', tags: ['Extensions', 'Debugging'] },
  { name: 'Python', category: 'languages_cs', level: 85, iconName: 'Braces', tags: ['Deep Learning', 'PyTorch/TensorFlow'] },
  { name: 'C / Java', category: 'languages_cs', level: 75, iconName: 'Binary', tags: ['OOP', 'Algorithms'] },
  { name: 'RESTful APIs', category: 'languages_cs', level: 88, iconName: 'Globe', tags: ['API Design', 'JSON', 'Endpoints'] },
];

export const SKILL_GROUPS_DATA = [
  { label: 'Frontend', span: 'lg:col-span-2', items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
  { label: 'UI & Design', span: '', items: ['Responsive Design', 'Component Architecture'] },
  { label: 'Backend & Databases', span: '', items: ['Node.js', 'Express', 'MySQL', 'MongoDB'] },
  { label: 'Cloud & Tools', span: 'lg:col-span-2', items: ['AWS (Fundamentals)', 'Git', 'GitHub', 'VS Code'] },
  {
    label: 'Other',
    span: 'lg:col-span-3',
    items: ['REST APIs', 'Authentication', 'Web Performance', 'C', 'Python', 'Java'],
  },
];

export const SKILL_GROUPS = SKILL_GROUPS_DATA;

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'nptel-python',
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL (IIT Ropar / SWAYAM)',
    date: 'Verified Certification',
    credentialUrl: '/nptel_joy_of_computing_python.pdf',
    fileType: 'pdf',
    badgeColor: 'border-teal-400/40 bg-teal-500/10 text-teal-300',
    description: 'Comprehensive certification in Python programming, algorithm design, data structures, and computational problem-solving by NPTEL.',
  },
  {
    id: 'aws-coursera',
    title: 'AWS Cloud Fundamentals & Services',
    issuer: 'AWS & Coursera',
    date: 'Verified Certificate',
    credentialUrl: '/aws_coursera_certificate.pdf',
    fileType: 'pdf',
    badgeColor: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-300',
    description: 'Professional certification covering core AWS cloud computing concepts, infrastructure services, IAM security, S3 storage, and serverless architectures.',
  },
  {
    id: 'cloud-certifications',
    title: 'Cloud Computing & Infrastructure',
    issuer: 'Cloud Accreditation & Training',
    date: 'Verified Credentials',
    credentialUrl: '/PHOTO-2024-11-20-10-33-21.jpg',
    fileType: 'image',
    images: [
      '/PHOTO-2024-11-20-10-33-21.jpg',
      '/PHOTO-2024-11-20-10-33-21 2.jpg',
      '/PHOTO-2024-11-20-10-33-21 3.jpg',
      '/PHOTO-2024-11-20-10-33-21 4.jpg',
    ],
    badgeColor: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300',
    description: 'Cloud training certifications and verification awards covering network administration, deployment, and cloud operations.',
  },
];

export const CERTIFICATIONS_LIST = CERTIFICATIONS_DATA.map((c) => c.title);

export const CERTS = CERTIFICATIONS_LIST;

export const MARQUEE_WORDS = [
  'React',
  'Machine Learning',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'Full-Stack',
  'UI Engineering',
  'REST APIs',
  'Python',
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'lungcd',
    title: 'LungCD',
    subtitle: 'Multimodal Clinical Decision-Support System for Lung Disease Classification',
    category: 'Capstone · Deep Learning',
    description:
      'A multimodal clinical decision-support system for lung-disease classification using chest X-rays and patient vitals. A hybrid CNN-Transformer architecture reaches 95%+ ensemble accuracy with EfficientNetB0 transfer learning, Grad-CAM explainability and a Streamlit clinical dashboard. Published as an IEEE-format research paper.',
    fullOverview:
      'LungCD is a capstone research project designed to assist radiologists and clinicians in rapid, accurate lung disease diagnostic triage. By combining EfficientNetB0 spatial features from chest X-ray images with patient vital telemetry in a hybrid CNN-Transformer network, the system achieves 95%+ ensemble accuracy. It incorporates Grad-CAM visual heatmaps for diagnostic explainability and exposes a doctor-friendly Streamlit dashboard.',
    tags: ['Python', 'TensorFlow', 'EfficientNetB0', 'Transformer', 'Grad-CAM', 'Streamlit'],
    imagePlaceholder: 'https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?auto=format&fit=crop&w=1400&q=80',
    badge: 'IEEE Research Paper',
    badgeType: 'ieee',
    highlights: [
      'Hybrid CNN-Transformer architecture fusing image feature vectors with clinical vitals data',
      'Achieved 95%+ ensemble classification accuracy across pneumonia, COVID-19, and tuberculosis cases',
      'Grad-CAM explainability maps highlight exact lesion locations on chest radiographs',
      'Published as an IEEE-formatted peer-reviewed research paper',
    ],
    architecture: {
      components: ['Chest X-Ray Preprocessor', 'EfficientNetB0 Encoder', 'Vitals Transformer Head', 'Grad-CAM Generator', 'Streamlit Clinical UI'],
      dataFlow: 'X-Ray Image -> Data Augmentation -> EfficientNetB0 Feature Map -> Multimodal Fusion Layer with Vitals -> Softmax Classifier -> Grad-CAM Visual Heatmap.',
      techStackDetails: [
        { label: 'Deep Learning', value: 'PyTorch / TensorFlow' },
        { label: 'Base Model', value: 'EfficientNetB0 Transfer Learning' },
        { label: 'Explainability', value: 'Grad-CAM (Gradient-weighted Class Activation)' },
        { label: 'Interface', value: 'Streamlit Interactive Dashboard' },
      ],
    },
    demoType: 'lung_cd',
  },
  {
    id: 'expense',
    title: 'Personal Expense Tracker',
    subtitle: 'MERN Stack Financial Management & Analytics Application',
    category: 'MERN · Full Stack',
    description:
      'Full-stack expense tracker with a dynamic React frontend (Hooks-based state), JWT authentication, protected routes and role-based access control. RESTful APIs built with Node.js/Express and optimized query performance.',
    fullOverview:
      'A comprehensive personal financial dashboard built with the MERN stack. Allows users to track income and expenditures, categorize transactions, set monthly budgets, and analyze spending patterns with responsive charts. Features secure password hashing, JWT bearer tokens, protected router views, and optimized MongoDB index queries.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    imagePlaceholder: 'https://images.pexels.com/photos/38375326/pexels-photo-38375326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Featured MERN Project',
    badgeType: 'featured',
    highlights: [
      'Custom React hooks for stateful transaction management and filtering',
      'JWT authentication flow with refresh tokens and HTTP-only cookie security options',
      'Interactive visual breakdown of category spending with responsive data charts',
      'RESTful Express APIs with schema validation and sub-50ms query responses',
    ],
    architecture: {
      components: ['React Dashboard UI', 'JWT Auth Middleware', 'Express API Routes', 'Mongoose Schema', 'MongoDB Cluster'],
      dataFlow: 'React Client -> Auth Context Token Header -> Express Route Guard -> Controller -> Mongoose Query -> Aggregation Response -> Recharts Rendering.',
      techStackDetails: [
        { label: 'Frontend', value: 'React 19, Hooks, Recharts' },
        { label: 'Backend', value: 'Node.js, Express.js' },
        { label: 'Database', value: 'MongoDB, Mongoose ODM' },
        { label: 'Security', value: 'JWT, bcrypt password hashing' },
      ],
    },
    demoType: 'expense_tracker',
  },
  {
    id: 'finnews',
    title: 'Financial News App',
    subtitle: 'Real-time Market Insights & Stock News Aggregator',
    category: 'React · Web App',
    description:
      'Real-time financial news and stock-market insights integrating News API and TradingView for live data. Responsive, mobile-first UI with robust edge-case and error handling.',
    fullOverview:
      'A high-performance news and stock market monitoring web application built with React. Integrates live Financial News APIs and TradingView ticker widgets to provide up-to-the-minute market intelligence, sentiment tags, sector heatmaps, and customizable watchlist features with client-side caching.',
    tags: ['React', 'News API', 'TradingView', 'REST'],
    imagePlaceholder: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Real-time Web App',
    badgeType: 'capstone',
    highlights: [
      'Live ticker stream and embedded interactive TradingView technical charts',
      'Real-time news feed with category filtering (Crypto, Stocks, Macro, Forex)',
      'Robust edge-case handling for offline states, rate limits, and network errors',
      'Client-side localStorage watchlist persistence for quick asset tracking',
    ],
    architecture: {
      components: ['News Grid Component', 'TradingView Chart Embed', 'Watchlist State', 'API Proxy Handler'],
      dataFlow: 'Market Events -> News API Fetch -> Client Cache -> Sector Filter -> TradingView Widget Event Dispatch -> UI Render.',
      techStackDetails: [
        { label: 'Framework', value: 'React 19, Vite' },
        { label: 'Integrations', value: 'News API, TradingView Charting Library' },
        { label: 'Styling', value: 'Tailwind CSS, Lucide Icons' },
      ],
    },
    demoType: 'financial_news',
  },
  {
    id: 'shortly',
    title: 'Shortly',
    subtitle: 'Smart Full-Stack URL Shortener with Analytics & QR Codes',
    category: 'Full Stack',
    description:
      'A full-stack URL shortener featuring authentication, click analytics, QR-code generation and a modern dark dashboard.',
    fullOverview:
      'Shortly is a modern full-stack web application that transforms long URLs into clean, trackable short links. Designed with a sleek dark dashboard, it generates vector QR codes for instant sharing, tracks click analytics by geographical location and referrer source, and supports custom link slug creation.',
    tags: ['React', 'Node.js', 'Analytics', 'QR'],
    imagePlaceholder: '/shortly-dashboard-cleaned.png',
    badge: 'First Phase ✔',
    badgeType: 'in_progress',
    highlights: [
      'Instant URL hash shortening algorithm with custom alias reservation',
      'Integrated QR code renderer for instant mobile scanning and sharing',
      'Click telemetry dashboard tracking visitor counts and browser distribution',
      'Modern dark theme UI with smooth motion micro-interactions',
    ],
    architecture: {
      components: ['URL Input Form', 'Hash Redirect Controller', 'Analytics Collector', 'QR Renderer'],
      dataFlow: 'Short Link Request -> Hash Generator -> DB Lookup / Express Redirect -> Asynchronous Telemetry Logger -> Dashboard Stream.',
      techStackDetails: [
        { label: 'Frontend', value: 'React, Lucide Icons, Canvas QR' },
        { label: 'Backend', value: 'Express.js, Nanoid Hash Engine' },
        { label: 'Status', value: 'Active Development (70% Completed)' },
      ],
    },
    demoType: 'shortly',
  },
];

export const PROJECTS = PROJECTS_DATA;

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'SRM University AP',
    period: '2022 – 2026',
    score: 'CGPA 7.52 / 10',
    location: 'Andhra Pradesh, India',
    description: 'Specialized in Full Stack Web Development, Machine Learning, Data Structures & Algorithms, Database Systems, and Cloud Architectures.',
    highlights: [
      'Capstone Project: IEEE-format Deep Learning Healthcare System (LungCD)',
      'Active contributor in web development clubs and technical hackathons',
      'Coursework: Data Structures, DBMS, Web Technologies, Machine Learning, Operating Systems',
    ],
  },
  {
    degree: 'Intermediate Education (MPC)',
    institution: 'Sri Chaitanya Educational Institutions',
    period: '2020 – 2022',
    score: '87% Marks',
    location: 'Andhra Pradesh, India',
    description: 'Focused on Mathematics, Physics, and Chemistry (MPC) with distinction in analytical problem solving and logical foundations.',
    highlights: [
      '87% overall aggregate score',
      'Strong foundational training in Mathematics and Logical Reasoning',
    ],
  },
];

export const WORK_EXPERIENCE_DATA: WorkExperience[] = [
  {
    role: 'Software Development Intern',
    company: 'Edunet Foundation',
    period: 'Jun 2024 – Jul 2024',
    type: 'Internship',
    location: 'Remote / India',
    bullets: [
      'Built a responsive student portfolio web application using HTML, CSS, and JavaScript from ground up.',
      'Engineered reusable front-end UI components focused on usability, clean visual hierarchy, and cross-device compatibility.',
      'Validated application behavior across mobile and desktop viewports, optimizing asset sizes and web performance.',
    ],
    skillsUsed: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Performance Optimization'],
  },
];
