export interface PortfolioKnowledge {
  name: string;
  role: string;
  currentCompany: string;
  previousCompany: string;
  education: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  skills: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    tools_and_cloud: string[];
  };
  services: string[];
  projects: Array<{
    title: string;
    description: string;
    tags: string[];
  }>;
}

export const PORTFOLIO_INFO: PortfolioKnowledge = {
  name: "Muhammad Zohaib",
  role: "Full Stack & Generative AI Software Engineer",
  currentCompany: "Sideline Technologies (PVT) LTD",
  previousCompany: "Ropstam Solutions Inc.",
  education: "University of Sahiwal - BS in Software Engineering (3.35 CGPA, Grade A, 2020-2024)",
  location: "Islamabad, Pakistan",
  email: "mzohaibch.07@gmail.com",
  phone: "+92 3431197504",
  github: "https://github.com/zohaib65-ch",
  linkedin: "https://www.linkedin.com/in/zohaibch07",
  bio: "Muhammad Zohaib is a skilled Full Stack & AI Software Engineer with 1.5+ years of professional experience. He specializes in modern web development, Generative AI, and RAG pipelines. He currently works as a Vue.js Developer at Sideline Technologies (PVT) LTD and holds a BS in Software Engineering from University of Sahiwal.",
  skills: [
    "Generative AI & RAG Architecture",
    "LLM Integrations (Gemini & OpenAI)",
    "Vue.js & Next.js Development",
    "React.js & MERN Stack Engineering",
    "TypeScript & Modern JavaScript",
    "Real-Time WebSockets (Socket.io)",
    "RESTful APIs & Third-Party Payment Gateways",
    "Tailwind CSS & Responsive UI Design",
    "Admin Dashboard Architecture",
    "Clean Code & Performance Optimization"
  ],
  technologies: {
    frontend: ["Vue.js", "Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "MongoDB", "Socket.io", "REST APIs"],
    tools_and_cloud: ["Git", "GitHub", "AWS", "Jira", "Trello", "Postman"]
  },
  services: [
    "Full-Stack Web Development: Creating responsive, scalable web applications with MERN, Next.js, and Vue.js.",
    "Admin Dashboards & Management Systems: Developing secure data-driven dashboards with analytics and user management.",
    "Real-Time Applications & WebSockets: Building interactive live features using Socket.io and Node.js.",
    "Third-Party Integrations & APIs: Integrating payment gateways, external APIs, and cloud services."
  ],
  projects: [
    {
      title: "Admin Dashboard Systems",
      description: "Developed customized, enterprise-grade admin dashboards to monitor and manage user-created entries, system analytics, and reports.",
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Full-Stack Web Applications (MERN)",
      description: "Built several full-stack applications with MongoDB, Express.js, React.js, and Node.js with real-time Socket.io updates.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"]
    },
    {
      title: "Domain Purchasing Platform UI & Admin Portal",
      description: "Designed and implemented the complete UI and administrative portal for a domain purchasing platform.",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "GitHub"]
    },
    {
      title: "AI Portfolio Assistant (RAG)",
      description: "Interactive AI assistant powered by Next.js, TypeScript, and Google Gemini RAG vector search.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"]
    }
  ]
};

export const DEFAULT_SUGGESTIONS = [
  {
    id: "company",
    label: "What company does Zohaib work at?",
    prompt: "What company does Zohaib work at?"
  },
  {
    id: "skills",
    label: "What are his top skills?",
    prompt: "What are his top skills?"
  },
  {
    id: "education",
    label: "Tell me about his education",
    prompt: "Where did Zohaib study and what is his degree?"
  },
  {
    id: "projects",
    label: "What projects has he built?",
    prompt: "What projects has he built?"
  }
];

export function getMockResponse(prompt: string): string {
  const query = prompt.toLowerCase().trim();

  if (query.includes("company") || query.includes("work") || query.includes("employer") || query.includes("job") || query.includes("sideline") || query.includes("ropstam")) {
    return `Muhammad Zohaib currently works as a **Vue.js Developer** at **Sideline Technologies (PVT) LTD** (September 2026 – Present, on-site in Islamabad).\n\nPreviously, he worked as a **Web Developer / MERN Stack Developer** at **Ropstam Solutions Inc.** (December 2024 – August 2026, 1 year 9 months) and delivered numerous successful client and freelance projects worldwide.`;
  }

  if (query.includes("who is zohaib") || query.includes("about") || query.includes("background") || query.includes("bio")) {
    return `**Muhammad Zohaib** is an Islamabad-based **Full Stack Web Developer** with 1.5+ years of professional experience.\n\nHe is currently a **Vue.js Developer** at **Sideline Technologies (PVT) LTD** and holds a **Bachelor of Science in Software Engineering** from the **University of Sahiwal** (Grade A, 3.35 CGPA).`;
  }

  if (query.includes("education") || query.includes("degree") || query.includes("university") || query.includes("cgpa") || query.includes("sahiwal")) {
    return `Zohaib graduated from the **University of Sahiwal** with a **Bachelor of Science in Software Engineering** (2020 – 2024), achieving **Grade A** with a **3.35 CGPA**.`;
  }

  if (query.includes("ai") || query.includes("rag") || query.includes("llm") || query.includes("vector") || query.includes("gemini") || query.includes("gpt")) {
    return `Muhammad Zohaib specializes in **Generative AI** and **Retrieval-Augmented Generation (RAG)**:\n\n` +
      `• **RAG Architecture:** End-to-end vector search pipelines using semantic chunking, cosine similarity, and vector databases (Pinecone, ChromaDB, in-memory).\n` +
      `• **LLM APIs & Models:** Google Gemini (3.5 Flash, 3.6 Flash, Pro), OpenAI GPT-4o, Anthropic Claude.\n` +
      `• **AI Tooling & Frameworks:** LangChain, LlamaIndex, Google GenAI SDK, structured outputs, and prompt engineering.\n` +
      `• **Conversational Chatbots:** Real-time AI chatbots with sub-second latency, streaming, and verified knowledge grounding without hallucinations.`;
  }

  if (query.includes("skill") || query.includes("technolog") || query.includes("stack") || query.includes("tool")) {
    return `Zohaib's top technical skills and stack include:\n\n` +
      `• **AI & RAG:** Retrieval-Augmented Generation (RAG), Google Gemini API, Vector Embeddings, LangChain\n` +
      `• **Frontend:** Vue.js, Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap\n` +
      `• **Backend:** Node.js, Express.js, MongoDB (MERN Stack), Socket.io (WebSockets)\n` +
      `• **Integrations & Cloud:** Third-party payment gateways, AWS, REST APIs, Git\n` +
      `• **Management:** Jira, Trello`;
  }

  if (query.includes("project") || query.includes("portfolio") || query.includes("website") || query.includes("work")) {
    return `Here are Muhammad Zohaib's top live production projects and portfolio links:\n\n` +
      `• **[TruckFlowHQ](https://www.truckflowhq.com/)**: Logistics and fleet dispatch workflow management platform.\n` +
      `• **[DIGIMAG](https://www.digimag.media)**: Next-generation digital technology and AI media publication.\n` +
      `• **[JobCrap](https://www.jobcrap.com/)**: Job discovery and smart career platform.\n` +
      `• **[Minest](https://www.getminest.app/)**: Modern productivity and utility application.\n` +
      `• **[MeatsZoo](https://www.meatszoo.com/)**: E-commerce food delivery platform with catalog and checkout.\n` +
      `• **[90J Pages](https://90j-pages.vercel.app/)**: Next.js & Tailwind CSS high-converting web landing page platform.\n` +
      `• **[Start2Write](https://www.start2write.com/)**: Creative writing and content publishing platform.\n` +
      `• **[Digitaly](https://digitaly.fr)**: French digital agency website showcasing tech & marketing solutions.\n\n` +
      `For freelance web development, you can also check his **[Fiverr Gig](https://www.fiverr.com/s/lr9q0X7)** or code on **[GitHub](https://github.com/zohaib65-ch)**.`;
  }

  if (query.includes("fiverr") || query.includes("gig") || query.includes("freelance") || query.includes("hire")) {
    return `You can hire Muhammad Zohaib directly on **Fiverr**: **[fiverr.com/s/lr9q0X7](https://www.fiverr.com/s/lr9q0X7)** for full-stack web applications, React, Vue, Next.js development, and custom API integrations.`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("whatsapp") || query.includes("linkedin") || query.includes("reach")) {
    return `You can reach Muhammad Zohaib directly:\n\n` +
      `• **Fiverr Gig:** [fiverr.com/s/lr9q0X7](https://www.fiverr.com/s/lr9q0X7)\n` +
      `• **Email:** [mzohaibch.07@gmail.com](mailto:mzohaibch.07@gmail.com)\n` +
      `• **Phone / WhatsApp:** +92 3431197504\n` +
      `• **LinkedIn:** [linkedin.com/in/zohaibch07](https://www.linkedin.com/in/zohaibch07)\n` +
      `• **GitHub:** [github.com/zohaib65-ch](https://github.com/zohaib65-ch)\n` +
      `• **Location:** Islamabad, Pakistan`;
  }

  return `Muhammad Zohaib is a Full Stack Web Developer currently working at **Sideline Technologies (PVT) LTD**, with previous experience at **Ropstam Solutions Inc.** and a BS in Software Engineering from **University of Sahiwal**.\n\nAsk me anything about his companies, projects, skills, or contact info!`;
}
