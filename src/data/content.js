// ============================================================
// ALL SITE CONTENT LIVES HERE.
// Edit text, links, roles, projects and skills in this one file —
// no component changes needed.
// ============================================================

export const profile = {
  name: 'Dayanand Shah',
  title: 'Data Scientist · Generative AI & LLM Engineer',
  specialties: ['Data Science · AI/ML', 'RAG Systems', 'AI Agents', 'LLM Fine-Tuning'],
  hook: '4.5+ years turning language models into production systems that read, reason, and act.',
  location: 'Gurugram, India',
  yearsOfExperience: 4.5,

  // ── LINKS: update these if any handle changes ──────────────
  email: 'dayanandshah44@gmail.com',
  github: 'https://github.com/DAYANAND-SHAH',
  linkedin: 'https://www.linkedin.com/in/dayanandshah',
  medium: 'https://dayanand-shah.medium.com/',
}

// The career story in scroll order — most recent first, walking
// back to the foundations: agency → reasoning → perception.
export const acts = [
  {
    id: 'act-3',
    act: 'Act III',
    years: '2024 — Present',
    title: 'Building agents that think and act',
    motif: 'agency', // autonomous network with travelling pulses
    intro:
      'Today the systems act on their own. At NIIT the work is generative AI platforms used across an enterprise — conversational document intelligence, agentic workflows that write documentation, and LLMs fine-tuned to the domain.',
    roles: [
      {
        company: 'NIIT',
        position: 'Data Scientist',
        period: 'Jul 2024 — Present',
        highlights: [
          'Built Docwiz, a scalable conversational AI platform letting users chat with their documents via semantic search and contextual Q&A (LangChain, ChromaDB, Pinecone, Sentence Transformers, Mixtral 8x7B).',
          'Engineered an automated Change Management System (Python, FastAPI, LangChain, OpenAI) that auto-generates course documentation from release notes, cutting manual effort across enterprise learning workflows.',
          'Developed an AI-powered Content Editor using LLMs, prompt engineering and RAG for context-aware editorial suggestions.',
          'Fine-tuned Mixtral 8x7B with LoRA/QLoRA on curated domain datasets to improve instruction-following and domain-specific generation.',
        ],
      },
    ],
    stack: ['LangChain', 'Pinecone', 'ChromaDB', 'Mixtral 8x7B', 'FastAPI', 'OpenAI', 'LoRA/QLoRA'],
  },
  {
    id: 'act-2',
    act: 'Act II',
    years: '2022 — 2024',
    title: 'Teaching machines to reason',
    motif: 'reasoning', // dots connect into a graph
    intro:
      'Before agents came reasoning. At Rubus Digital the work was making machines understand: fine-tuning open LLMs, grounding them in real documents with RAG, watching industrial plants through cameras — and keeping every prediction explainable.',
    roles: [
      {
        company: 'Rubus Digital',
        position: 'Data Analyst',
        period: 'Feb 2022 — Jul 2024',
        highlights: [
          'Built an enterprise AI chatbot for the BioMass domain with LLMs, LangChain, LlamaIndex and ChromaDB — conversational querying, real-time DB access and web-search integration.',
          'Fine-tuned Gemma and Llama 3 with LoRA/QLoRA, PEFT, PyTorch, Transformers and BitsAndBytes for major gains in domain response quality and inference efficiency.',
          'Built RAG-based document intelligence with Sentence Transformers, Unstructured, Camelot and OCR for structured and unstructured extraction from PDFs.',
          'Engineered a custom YOLOv8 object-detection pipeline for real-time industrial monitoring.',
          'Trained an Explainable Boosting Machine anomaly detector (InterpretML) — interpretable for stakeholders end to end.',
          'Built a real-time boiler-plant flame-analysis system with OpenCV and edge detection.',
        ],
      },
    ],
    // Animated stat shown in this scene
    stat: { value: 40, suffix: '%', label: 'improvement in anomaly-detection accuracy — while staying fully interpretable' },
    stack: ['LangChain', 'LlamaIndex', 'ChromaDB', 'LoRA/QLoRA', 'PyTorch', 'YOLOv8', 'InterpretML', 'OpenCV'],
  },
  {
    id: 'act-1',
    act: 'Act I',
    years: '2021',
    title: 'Teaching machines to read',
    motif: 'perception', // scattered dots — raw signal
    intro:
      'And where it all began: pixels. Two internships spent turning scanned pages, skewed photographs and noisy documents into clean, structured text — the unglamorous foundation every intelligent system stands on.',
    roles: [
      {
        company: 'Braynix AI',
        position: 'Deep Learning Intern',
        period: '2021',
        highlights: [
          'Built a high-performance PDF-to-DOC conversion tool in Python (PyPDF2, python-docx) with multi-threaded parallel processing.',
        ],
      },
      {
        company: 'MavenAI Technologies',
        position: 'ML Intern',
        period: '2021',
        highlights: [
          'Built an end-to-end OCR pipeline (OpenCV, Tesseract, NLP) extracting Arabic text and translating it to English.',
          'Engineered robust preprocessing to handle noise, skew and font variation in real-world documents.',
        ],
      },
    ],
    stack: ['Python', 'OpenCV', 'Tesseract', 'PyPDF2', 'python-docx', 'NLP'],
  },
]

export const projects = [
  {
    name: 'Docwiz',
    tagline: 'Chat with your documents',
    problem: 'Enterprise teams buried in documents needed answers, not search results.',
    build:
      'A scalable conversational AI platform: semantic search over embedded documents with contextual, grounded Q&A on top.',
    stack: ['LangChain', 'ChromaDB', 'Pinecone', 'Sentence Transformers', 'Mixtral 8x7B'],
    result: 'Production platform letting users converse with their own documents across the enterprise.',
    accent: 'cyan',
  },
  {
    name: 'LLM Fine-Tuning',
    tagline: 'Open models, domain-grade answers',
    problem: 'Off-the-shelf open models underperformed on specialised domain language.',
    build:
      'Fine-tuned Mixtral 8x7B, Gemma and Llama 3 with LoRA/QLoRA and PEFT on curated domain datasets, quantised with BitsAndBytes.',
    stack: ['LoRA/QLoRA', 'PEFT', 'PyTorch', 'Transformers', 'BitsAndBytes'],
    result: 'Major gains in instruction-following, domain response quality and inference efficiency.',
    accent: 'violet',
  },
  {
    name: 'Anomaly Detection',
    tagline: 'Accurate and explainable',
    problem: 'Industrial anomaly detection had to be accurate — and explainable to non-ML stakeholders.',
    build:
      'An Explainable Boosting Machine detector built with InterpretML, paired with real-time computer-vision monitoring (YOLOv8, OpenCV).',
    stack: ['InterpretML', 'EBM', 'YOLOv8', 'OpenCV', 'Python'],
    result: '40% improvement in anomaly-detection accuracy, fully interpretable for stakeholders.',
    accent: 'cyan',
  },
]

export const skillGroups = [
  {
    group: 'Generative AI & LLMs',
    skills: [
      'LangChain', 'LlamaIndex', 'RAG', 'vLLM', 'Ollama',
      'OpenAI / Anthropic / Azure APIs', 'LoRA / QLoRA / PEFT',
      'Prompt Engineering', 'Sentence Embeddings',
    ],
  },
  {
    group: 'Agentic AI',
    skills: ['LangGraph', 'AutoGen', 'Multi-Agent Systems', 'Workflow Orchestration'],
  },
  {
    group: 'Vector Databases',
    skills: ['FAISS', 'ChromaDB', 'Pinecone'],
  },
  {
    group: 'ML / Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'LightGBM'],
  },
  {
    group: 'Computer Vision',
    skills: ['OpenCV', 'YOLOv8', 'DETR', 'OCR'],
  },
  {
    group: 'MLOps & Backend',
    skills: ['FastAPI', 'MLflow', 'DVC', 'Docker', 'Airflow', 'GCP', 'PostgreSQL'],
  },
]

export const education = {
  degree: 'B.E. Electronics & Communication Engineering',
  school: 'Government Engineering College, Godhra',
  period: '2016 — 2020',
}
