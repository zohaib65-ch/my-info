export interface KnowledgeChunk {
  id: string;
  category: "bio" | "experience" | "companies" | "education" | "skills" | "technologies" | "projects" | "contact";
  title: string;
  content: string;
}

export const PORTFOLIO_DOCUMENTS: KnowledgeChunk[] = [
  {
    id: "current_company_experience",
    category: "companies",
    title: "Current Company & Employment - Sideline Technologies (PVT) LTD",
    content: `Current Company & Role:
- Company Name: Sideline Technologies (PVT) LTD
- Current Role: Vue Js developer (Full-time, On-site)
- Duration: September 2026 – Present
- Location: Islamabad, Islāmābād, Pakistan
- Key Responsibilities & Skills: Front-end engineering with Vue.js, Next.js, TypeScript, modern responsive UI development, and building interactive web applications for Sideline Technologies clients and products.`
  },
  {
    id: "previous_company_ropstam",
    category: "companies",
    title: "Previous Company Experience - Ropstam Solutions Inc.",
    content: `Previous Company & Experience:
- Company Name: Ropstam Solutions Inc.
- Role: Web Developer / MERN Stack Developer (Full-time, On-site)
- Duration: December 2024 – August 2026 (1 year 9 months)
- Location: Islamabad, Pakistan
- Responsibilities & Achievements:
  * Proficient in full-stack engineering using Git, React.js, Node.js, Express.js, MongoDB, Socket.io (real-time data), and third-party payment gateways.
  * Demonstrated problem-solving skills through specific resolutions of complex technical challenges.
  * Built maintainable backend architectures and seamless frontend integrations.`
  },
  {
    id: "freelancing_experience",
    category: "experience",
    title: "Freelancing & International Client Experience",
    content: `Freelance Work History:
- Role: Freelance Full Stack & MERN Stack Developer
- Duration: December 2023 – Present
- Fiverr Profile & Gig: https://www.fiverr.com/s/lr9q0X7
- Achievements:
  * Successfully delivered numerous client and freelance projects worldwide, involving modern full-stack web applications, backend API development, third-party integrations, and performance optimization.
  * Collaborated effectively and solved complex engineering problems for international clients and startups.
  * Actively offers specialized web development, React, Vue, Next.js, and custom API development services on Fiverr.`
  },
  {
    id: "education_degree",
    category: "education",
    title: "Education & Academic Credentials - University of Sahiwal",
    content: `Academic Background:
- Degree: Bachelor of Science in Software Engineering (BS Software Engineering)
- Institution: University of Sahiwal, Pakistan
- Graduation Period: October 2020 – May 2024
- Academic Standing: Grade A, 3.35 CGPA
- Focus: Software architecture, data structures, algorithms, web development, and system design.`
  },
  {
    id: "bio_and_profile",
    category: "bio",
    title: "Muhammad Zohaib - Professional Summary & Background",
    content: `Muhammad Zohaib is an Islamabad-based Full Stack & AI Software Engineer with 1.5+ years of professional engineering experience. He specializes in building high-performance web applications and modern Generative AI systems, particularly Retrieval-Augmented Generation (RAG) pipelines, vector search, and LLM integrations. He holds a BS in Software Engineering from University of Sahiwal (3.35 CGPA, Grade A), currently works as a Vue.js Developer at Sideline Technologies (PVT) LTD, and previously worked as a MERN Stack Developer at Ropstam Solutions Inc.`
  },
  {
    id: "ai_and_rag_expertise",
    category: "skills",
    title: "Generative AI, RAG Systems & LLM Engineering Expertise",
    content: `Muhammad Zohaib specializes in modern Generative AI, Retrieval-Augmented Generation (RAG), and LLM application development:
- Production RAG Pipelines: Architecting end-to-end RAG pipelines using document parsing, semantic chunking, vector embeddings, vector databases (Pinecone, ChromaDB, MongoDB Vector Search, in-memory vector stores), and cosine similarity search for grounded, hallucination-free AI answers.
- LLM Models & APIs: Hands-on expertise with Google Gemini (Gemini 3.5 Flash, 3.6 Flash, Gemini Pro), OpenAI (GPT-4o), Anthropic Claude, and Hugging Face models.
- AI Frameworks & Orchestration: LangChain, LlamaIndex, Google GenAI SDK, prompt engineering, structured JSON outputs, and LLM tool/function calling.
- Real-Time AI Chatbots: Building conversational AI assistants with streaming responses, in-memory caching, sub-second latency optimizations, and clean modern Next.js/React interfaces.
- AI Agents & Automation: Developing autonomous agentic workflows, document processing pipelines, and AI-powered automations for businesses.`
  },
  {
    id: "skills_and_technologies",
    category: "skills",
    title: "Technical Skills, Languages & Frameworks",
    content: `Zohaib's comprehensive technical toolkit includes:
- Top Skills: React.js, JavaScript, Node.js, TypeScript, Vue.js, Next.js, Generative AI & RAG.
- AI & LLM Stack: RAG (Retrieval-Augmented Generation), Google Gemini API, Vector Embeddings (gemini-embedding-001, text-embedding-004), Pinecone, ChromaDB, Cosine Similarity, LangChain, AI Agents.
- Frontend Stack: Vue.js, Next.js, React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5, CSS3.
- Backend Stack: Node.js, Express.js, MongoDB (MERN Stack), Socket.io for real-time WebSockets data.
- Third-Party & Cloud: Third-party payment gateways, REST APIs, AWS, Git (Version Control).
- Project Management: Jira, Trello, agile workflow coordination.
- Core Engineering Qualities: Clean & maintainable code, problem solving, fast learner, excellent communication.`
  },
  {
    id: "live_projects_showcase",
    category: "projects",
    title: "Top Live Production Projects & Websites Built by Zohaib",
    content: `Muhammad Zohaib has built and contributed to several live production web platforms:

• [TruckFlowHQ](https://www.truckflowhq.com/) - Logistics and fleet dispatch workflow management platform streamlining freight operations, driver dispatch, and trucking logistics.
• [DIGIMAG](https://www.digimag.media) - Next-generation digital technology media platform covering AI, space, developer tools, hardware innovations, and tech news with a modern UI.
• [JobCrap](https://www.jobcrap.com/) - Comprehensive job search and career discovery platform connecting candidates with tech opportunities and smart job listings.
• [Minest](https://www.getminest.app/) - Modern productivity and utility web application featuring clean interface design and high-performance workflow tools.
• [MeatsZoo](https://www.meatszoo.com/) - E-commerce and food delivery platform with product catalog, cart checkout, and seamless order management.
• [90J Pages](https://90j-pages.vercel.app/) - High-converting, performant web landing page platform built with modern Next.js and Tailwind CSS.
• [Start2Write](https://www.start2write.com/) - Creative writing and publishing web application providing content creators with writing tools and publishing workflows.
• [Digitaly](https://digitaly.fr) - Modern French digital agency website showcasing technology services, marketing solutions, and digital transformation capabilities.
• [Fiverr Freelance Profile & Gig](https://www.fiverr.com/s/lr9q0X7) - Hire Zohaib on Fiverr for custom web development, MERN, React, Vue, Next.js, and API engineering.

All projects feature responsive design, fast performance, clean architecture, and modern JavaScript/TypeScript engineering.`
  },
  {
    id: "projects_internal_architecture",
    category: "projects",
    title: "Internal Projects & Architecture Portfolio",
    content: `In addition to client-facing websites, Zohaib has developed:
1. Admin Dashboard Systems: Customized, enterprise-grade admin dashboards engineered for data visualization, real-time analytics, user access management, and backend system monitoring.
2. Real-Time Full-Stack Applications: Interactive platforms powered by Socket.io, Node.js, Express, and MongoDB.
3. Domain Purchasing Platform UI & Admin Portal: Domain registration and DNS admin management interface with reusable components.
4. AI Portfolio Chatbot (RAG): Real-time conversational assistant powered by Next.js, Tailwind CSS, Google Gemini APIs, and vector embeddings.
5. GitHub Code Portfolio: https://github.com/zohaib65-ch containing practice projects and open-source contributions.`
  },
  {
    id: "contact_and_hobbies",
    category: "contact",
    title: "Contact Details, Freelance Gig & Social Links",
    content: `Direct Contact & Freelance Information for Muhammad Zohaib:
- Fiverr Freelance Gig: https://www.fiverr.com/s/lr9q0X7 (hire for web development, full-stack apps, React, Vue, Next.js)
- Email: mzohaibch.07@gmail.com
- Phone / WhatsApp: +92 3431197504
- Location: Islamabad, Pakistan
- LinkedIn Profile: https://www.linkedin.com/in/zohaibch07 (2,500+ followers, 500+ connections)
- GitHub Profile: https://github.com/zohaib65-ch
- Open to Work: Open to full-stack, frontend, and MERN development opportunities (On-site, Remote, Hybrid).
- Personal Hobbies: Travelling, Movies, Gardening, and Technology Researching.`
  }
];
