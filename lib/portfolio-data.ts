export const contact = {
  name: 'Keval Amin',
  location: 'Berkeley, CA',
  email: 'keval.amin@berkeley.edu',
  linkedin: 'https://linkedin.com/in/kevalamin',
  github: 'https://github.com/kxvlar',
}

export const experiences = [
  {
    role: 'Blockchain Developer',
    org: 'SM Web Systems',
    type: 'Internship',
    location: 'Remote',
    period: 'January 2026 - Present',
    bullets: [
      'Engineer data pipelines and analytics workflows under cross-border privacy and data-sovereignty constraints in African markets.',
      'Build privacy-preserving AI/ML and Web3 solutions, translating ambiguous requirements into production-ready systems.',
    ],
  },
  {
    role: 'ML / Web3 Engineer',
    org: 'Stellar Development Foundation (Stellar.org)',
    type: 'Internship',
    location: 'Bay Area, CA',
    period: 'September 2025 - December 2025',
    href: 'https://berkeley.joinhandshake.com/e/350661',
    bullets: [
      'Built and deployed a production ML model for asset authenticity detection on blockchain datasets, achieving F1 of 0.93.',
      'Engineered pipelines processing 64M+ ledgers, combining on-chain metadata, off-chain features, Python, SQL, and scikit-learn.',
      'Designed validation workflows surfacing high-risk assets and translating raw data into actionable decisions.',
    ],
  },
  {
    role: 'Research Associate',
    org: 'University of California Berkeley',
    type: 'Internship',
    location: 'Berkeley, CA',
    period: 'May 2025 - September 2025',
    href: 'https://berkeley.joinhandshake.com/e/18390',
    bullets: [
      'Constructed NLP pipelines to analyze political and legislative discourse across temporal and geographic dimensions.',
      'Applied causal inference, instrumental variables, and matching methods to evaluate policy effects.',
    ],
  },
  {
    role: 'Civic Intern',
    org: 'C4C',
    type: 'Internship',
    location: 'London, England',
    period: 'June 2023 - August 2023',
    bullets: [
      'Utilized Excel to record and optimise large scale clothes, SIM cards, and essential distributions.',
      'Taught English to asylum seekers.',
      'Communicated clearly in various languages to accommodate needs of asylum seekers.',
    ],
  },
  {
    role: 'Tutor / Founder',
    org: 'K2Tuition',
    type: 'Part-time',
    location: 'London, England',
    period: 'August 2020 - October 2021',
    bullets: [
      'Ran a small tutoring business with about 30 clients in Mathematics and Geography for students aged 9-15.',
    ],
  },
  {
    role: 'Student Intern',
    org: 'Deloitte',
    type: 'Internship',
    location: 'London, England',
    period: 'October 2019 - October 2019',
    href: 'https://berkeley.joinhandshake.com/e/8594',
    bullets: [
      'Delivered a strategy for a customer strategic game to overcome barriers in the catering industry.',
      'Applied analytical reasoning to a large number of case studies ranging from FTSE 100 companies to start-ups.',
    ],
  },
  {
    role: 'Business Intelligence Intern',
    org: 'Vodafone',
    type: 'Internship',
    location: 'London, England',
    period: 'April 2019 - April 2019',
    href: 'https://berkeley.joinhandshake.com/e/63914',
    bullets: [
      'Designed and delivered an app visualizing trading information using Qlik Sense, SQL, and Excel.',
      'Contributed to meetings including a joint project with Google on Google Home.',
      'Demonstrated data modeling, analytical, and numerical skills to drive decision making.',
    ],
  },
]

export const projects = [
  {
    id: '01',
    name: 'CallRunner',
    tag: 'Voice AI',
    period: 'May 2026 - Present',
    description:
      'Built AI agents to make outbound calls for consumer administration tasks such as refunds and price shopping.',
    image: '/projects/callrunner.png',
    technologies: ['Codex', 'Claude Code', 'Vapi', 'AI Agents', 'Voice Automation'],
    features: ['Outbound calls', 'Consumer admin tasks', 'Refunds and price shopping'],
    links: [{ label: 'Live', href: 'https://callrunner-production.up.railway.app/' }],
  },
  {
    id: '02',
    name: 'Poker Site for Friends',
    tag: 'Realtime Game',
    period: 'June 2026 - Present',
    description:
      'Built a poker website for our friend group since many people moved abroad. We made custom features for our friend group like a logo and custom bounties, which are paid features on sites like Poker Now. Currently working on auto settling the ledger/debts.',
    image: '/projects/poker.png',
    technologies: ['Next.js', 'TypeScript', 'React', 'Supabase', 'PostgreSQL', 'Vitest'],
    features: ['Custom friend-group logo', 'Custom bounties', 'Ledger/debt auto-settling in progress'],
    links: [
      { label: 'Live', href: 'https://poker-eight-omega.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/kxvlar/poker_project_public_copy' },
    ],
  },
  {
    id: '03',
    name: 'Senior Thesis - Geometric Welfare Comparison',
    tag: 'Market Design',
    period: 'May 2026',
    description:
      'Developed a geometric framework for comparing Probabilistic Serial and Random Serial Dictatorship in finite markets. The thesis characterizes utility-sensitive regions using Abel summation, rank-lottery gaps, and envelope functionals over admissible utility-decrement families.',
    image: '/projects/senior-thesis.png',
    technologies: ['Market Design', 'Welfare Theory', 'Abel Summation', 'Simulation'],
    features: ['Probabilistic Serial vs RSD', 'Utility-sensitive welfare regions', 'Finite certificate checks'],
    links: [{ label: 'Paper', href: '/papers/senior-thesis.pdf' }],
  },
  {
    id: '04',
    name: 'FashionMNIST',
    tag: 'Computer Vision',
    period: 'April 2026',
    description:
      'A convolutional neural network trained on Fashion MNIST with a focus on embedding learning and clustering, where the model represents fashion items in a 3D embedding space with well-separated clusters for each of the 10 clothing classes.',
    image: '/projects/fashionmnist.png',
    technologies: ['PyTorch', 'torchvision', 'scikit-learn', 'Plotly', 'Gaussian Mixture Models'],
    features: ['Center loss optimization', 'Trained PyTorch model', 'ARI: 0.67'],
    links: [{ label: 'Source', href: 'https://github.com/kxvlar/fashionmnist-nn' }],
  },
  {
    id: '05',
    name: 'CT Scan Risk Stratification',
    tag: 'Clinical ML',
    period: 'November 2025',
    description:
      'A machine learning project for predicting pediatric intracranial injury CT findings using the CITBI dataset. The repository contains R-based classification models built with tidymodels, comparing logistic regression, KNN, and decision trees with hyperparameter tuning.',
    image: '/projects/ct-scan.png',
    technologies: ['R', 'tidyverse', 'tidymodels', 'ggplot2', 'caret'],
    features: ['Ranked 4th in class by F1', 'Hyperparameter tuning', 'Pediatric CT risk prediction'],
    links: [{ label: 'Source', href: 'https://github.com/kxvlar/ct-predict-public' }],
  },
  {
    id: '06',
    name: 'California Flight Delay Analysis',
    tag: 'Statistical ML',
    period: 'November 2025 - December 2026',
    description:
      'Analyzes and models flight delay behavior in California using U.S. Department of Transportation data. The project studies airline and airport reliability, explores clustering structures, and evaluates how well statistical and machine learning methods can predict flight delays.',
    image: '/projects/flight-delay.png',
    technologies: ['Jupyter', 'Python', 'pandas', 'numpy', 'matplotlib', 'scipy'],
    features: ['Airline reliability', 'Airport clustering', 'Delay prediction'],
    links: [
      { label: 'Live', href: 'https://ucb-stat-159-f25.github.io/final-group21/' },
      {
        label: 'GitHub',
        href: 'https://github.com/kxvlar/California-Flight-Delay-Analysis',
      },
    ],
  },
  {
    id: '07',
    name: 'Causal Inference',
    tag: 'Econometrics',
    period: 'November 2025 - December 2025',
    description:
      "A replication study that reconstructs and extends Gelber's 2011 research on how 401(k) eligibility affects household saving behavior. The study uses only publicly available data, not the replication package, to assess reproducibility.",
    image: '/projects/causal-inference.png',
    technologies: ['SAS', 'Causal Inference', 'Matching', 'AIPW', 'Sensitivity Analysis'],
    features: ['Nearest-Neighbor Matching ATT', 'Doubly Robust AIPW ATT', 'Rosenbaum Sensitivity Analysis'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/kxvlar/401k-eligibility-causal-inference-replication',
      },
      { label: 'Paper', href: '/papers/causal-inference.pdf' },
    ],
  },
  {
    id: '08',
    name: 'Binary Black Hole Signal in LIGO Open Data',
    tag: 'Signal Processing',
    period: 'October 2025',
    description:
      'An IPython notebook and associated Python script that walk through typical signal processing tasks on strain time-series data associated with LIGO Event data releases from the LIGO Open Science Center.',
    image: '/projects/ligo-black-hole.png',
    technologies: ['Python', 'IPython', 'Jupyter', 'Signal Processing', 'LOSC Data'],
    features: ['Strain time-series analysis', 'LOSC event tutorial', 'Scientific computing workflow'],
    links: [
      { label: 'Live', href: 'https://kxvlar.github.io/hw3-kxvlar/losc-event-tutorial/' },
      { label: 'GitHub', href: 'https://github.com/kxvlar/hw3-kxvlar' },
    ],
  },
  {
    id: '09',
    name: 'State of the Union NLP Analysis',
    tag: 'NLP',
    period: 'December 2025',
    description:
      'A comprehensive NLP analysis of State of the Union addresses, demonstrating the progression from foundational text processing to advanced semantic topic modeling. The project combines data engineering, linguistic analysis, and reproducible research practices to examine how presidential communication has evolved over time.',
    image: '/projects/nlp-sotu.svg',
    technologies: ['spaCy', 'gensim', 'BERTopic', 'scikit-learn', 'PyTorch', 'transformers'],
    features: ['State of the Union corpus', 'Semantic topic modeling', 'Presidential communication trends'],
    links: [
      { label: 'Live', href: 'https://ucb-stat-159-f25.github.io/proj02-group21/' },
      {
        label: 'GitHub',
        href: 'https://github.com/kxvlar/Reproducibility-in-Natural-Language-Processing',
      },
    ],
  },
]

export const toolbelt = [
  { name: 'Codex / Claude Code', note: 'Agentic development, refactors, automation workflows' },
  { name: 'Data Science & Statistics', note: 'Python, pandas, numpy, scikit-learn, scipy, matplotlib, R, tidyverse, SAS' },
  { name: 'Deep Learning', note: 'PyTorch, torchvision, transformers, Hugging Face' },
  { name: 'NLP', note: 'spaCy, gensim, BERTopic, LDA, semantic topic modeling' },
  { name: 'ML Optimization', note: 'XGBoost, Optuna, KNN, Random Forest, GMMs' },
  { name: 'Large-Scale Data', note: 'SQL, DuckDB, PostgreSQL, JSONB, Hubble-style pipelines' },
  { name: 'Full-Stack TypeScript', note: 'Next.js, React, Vite, TypeScript, Vitest' },
  { name: 'Backend APIs', note: 'FastAPI, SQLite, Supabase Edge, realtime systems' },
  { name: 'AI Integrations', note: 'OpenAI-compatible APIs, Ollama, Vapi, ElevenLabs, MiniMax' },
  { name: 'Automation', note: 'Playwright, Apify, browser automation, portal scanning' },
  { name: 'Infrastructure, CI/CD & Hosting', note: 'Conda, Docker, GitHub Actions, GitHub Pages, Vercel, Railway, Render, pytest' },
  { name: 'Scientific Computing', note: 'xarray, NetCDF, climate data, signal processing' },
  { name: 'Business Intelligence', note: 'Qlik Sense, Excel, data modeling, dashboards' },
]

export const systems = [
  {
    label: 'Production ML',
    title: 'Models that survive contact with messy data',
    body: 'Feature pipelines, model validation, risk surfacing, and deployment loops for high-stakes datasets.',
  },
  {
    label: 'Applied AI Agents',
    title: 'Human-in-the-loop automation with real controls',
    body: 'Voice agents, ATS workflows, batch sub-agents, and explainable matching systems that keep operators in charge.',
  },
  {
    label: 'Data Products',
    title: 'Interfaces for turning analysis into decisions',
    body: 'Dashboards, terminal UIs, reproducible notebooks, and full-stack applications built around clear operational feedback.',
  },
]
