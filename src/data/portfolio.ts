export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  station: string;
  period: string;
  current?: boolean;
  bulletPoints: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryGroup?: 'retail' | 'property' | 'creative' | 'utilities';
  description: string;
  dispatchNote?: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  accentColor: string;
  stampLabel: string;
  stampPrice?: string;
  postmarkDate: string;
  postcardRotation: number; // slight rotation degrees
}

export interface SkillGroup {
  id: string;
  name: string;
  waveAmplitude: number; // visual wave height in tide chart
  skills: string[];
  depthLabel: string; // nautical tide label e.g. "Deep Currents", "High Tide"
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    location: string;
    shortBio: string;
    email: string;
    phone: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    status: string;
    timezone: string;
    codeSnippet: string;
    resolvedStatement: string;
    resumePath: string;
  };
  about: {
    heading: string;
    body: string;
    domains: string[];
  };
  skillWaves: SkillGroup[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  navigation: { label: string; href: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sameer Tahasildar",
    role: "Full Stack Developer",
    location: "Old Goa, India",
    shortBio: "Building high-performance, scalable web applications and REST APIs across e-commerce, real estate, CRM, and automotive domains.",
    email: "sameertahasildar077@gmail.com",
    phone: "+91-9096265188",
    whatsapp: "https://wa.me/919096265188?text=Hello%20Sameer%2C%20I%20came%20across%20your%20portfolio",
    linkedin: "https://www.linkedin.com/in/sameer-tahasildar077",
    github: "https://github.com/sameertahasiladr",
    status: "Open to work",
    timezone: "Asia/Kolkata",
    codeSnippet: "const sameer = { role: 'Full Stack Developer', base: 'Goa' };",
    resolvedStatement: "I build fast, reliable web products, from React interfaces to NestJS APIs.",
    resumePath: "/resume.pdf",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Postcards", href: "#work" },
    { label: "Tide Chart", href: "#skills" },
    { label: "Route Map", href: "#journey" },
    { label: "Education", href: "#education" },
    { label: "Dispatch", href: "#contact" },
  ],
  about: {
    heading: "From the Mandovi shores to production cloud architectures.",
    body: "Full Stack Developer building high-performance, scalable web applications and REST APIs across e-commerce, real estate, CRM, and automotive domains. Works with React, Vue/Nuxt, NestJS, Node.js, and TypeScript, and automates business workflows with Zoho CRM and Deluge. Experienced integrating third-party APIs and shipping production software in agile teams. Currently expanding into React Native.",
    domains: [
      "E-Commerce",
      "Real Estate",
      "Enterprise CRM",
      "Automotive Booking",
      "Media Delivery",
      "Workflow Pipelines",
    ],
  },
  skillWaves: [
    {
      id: "languages",
      name: "Languages",
      waveAmplitude: 88,
      depthLabel: "Core Foundations",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP"],
    },
    {
      id: "frontend",
      name: "Frontend",
      waveAmplitude: 94,
      depthLabel: "Crest & Interface",
      skills: [
        "React.js",
        "Vue.js",
        "Nuxt.js",
        "Angular",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "ShadCN UI",
      ],
    },
    {
      id: "backend",
      name: "Backend",
      waveAmplitude: 92,
      depthLabel: "Engine & Stream",
      skills: [
        "Node.js",
        "NestJS",
        "FastAPI",
        "Laravel",
        "REST APIs",
        "Webhooks",
      ],
    },
    {
      id: "databases",
      name: "Databases",
      waveAmplitude: 82,
      depthLabel: "Deep Storage",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      waveAmplitude: 80,
      depthLabel: "Open Sea Infrastructure",
      skills: [
        "AWS",
        "Git/GitHub",
        "Vercel",
        "Netlify",
        "Cloudinary",
        "CI/CD",
      ],
    },
    {
      id: "crm-automation",
      name: "CRM & Automation",
      waveAmplitude: 86,
      depthLabel: "Enterprise Tides",
      skills: ["Zoho CRM", "Zoho Creator", "Deluge"],
    },
    {
      id: "testing",
      name: "Testing & Quality",
      waveAmplitude: 84,
      depthLabel: "Resilient Breakwaters",
      skills: [
        "Playwright (E2E)",
        "API load testing",
        "performance profiling",
      ],
    },
  ],
  experiences: [
    {
      id: "risban",
      role: "Software Developer",
      company: "Risban Pvt. Ltd",
      location: "Margao, Goa",
      station: "Margao Junction",
      period: "Nov 2025 to Present",
      current: true,
      bulletPoints: [
        "Architected and deployed enterprise CRM solutions with Zoho CRM, Zoho Creator, and Deluge, automating business workflows for multiple live clients.",
        "Built REST API integrations, custom functions, blueprints, and webhooks that removed manual data entry and streamlined data pipelines.",
        "Optimized property management and lead automation CRM pipelines, improving data accuracy and enabling real-time workflow triggers.",
        "Shipped bug fixes, enhancements, and module deployments for live clients.",
      ],
    },
    {
      id: "worley",
      role: "Associate Developer",
      company: "Worley Ventures",
      location: "Chennai",
      station: "Chennai Central",
      period: "Jun 2025 to Nov 2025",
      current: false,
      bulletPoints: [
        "Built and maintained a reusable React component library for enterprise interfaces, speeding up delivery and keeping UI consistent across teams.",
        "Integrated REST APIs with state management and performance optimizations.",
        "Worked with backend and QA engineers; maintained quality through code reviews and documentation.",
      ],
    },
    {
      id: "creative-capsule",
      role: "Full Stack Developer Intern",
      company: "Creative Capsule",
      location: "Verna, Goa",
      station: "Verna Outpost",
      period: "Nov 2024 to Apr 2025",
      current: false,
      bulletPoints: [
        "Designed and optimized REST APIs with NestJS, with efficient data modeling and query optimization.",
        "Implemented JWT authentication, role-based access control, and MySQL/MongoDB database management.",
        "Co-developed the Quotes App and Spelling Bee App in Nuxt.js, with a 35% increase in user engagement within six months.",
        "Ran Playwright end-to-end tests and API load tests, resolving performance bottlenecks.",
      ],
    },
  ],
  projects: [
    {
      id: "itechsolution",
      title: "Itechsolutions",
      subtitle: "E-Commerce Platform",
      category: "Full Stack Retail",
      categoryGroup: "retail",
      description:
        "Full-stack electronics store with product management, cart, orders API, and inventory tracking; Cloudinary media delivery and WhatsApp ordering with instant confirmation.",
      dispatchNote:
        "Built to solve sluggish checkout and catalog latency for consumer electronics. Features an event-driven NestJS order pipeline, real-time stock status sync, and direct WhatsApp invoice dispatch.",
      techStack: ["React", "NestJS", "MongoDB", "Cloudinary"],
      liveUrl: "https://itechsolution.vercel.app",
      repoUrl: "https://github.com/sameertahasiladr/iTechsolutions",
      accentColor: "#0E4D52",
      stampLabel: "EST. 2025",
      stampPrice: "₹ 5.00",
      postmarkDate: "OLD GOA GPO · PARCEL 01",
      postcardRotation: -1.2,
    },
    {
      id: "realestate",
      title: "Real Estate Platform",
      subtitle: "Property Listings & Broker Network",
      category: "Property Discovery",
      categoryGroup: "property",
      description:
        "Buy/sell/rent listings with dynamic search and filtering, server-side query optimization, and multi-channel agent contact.",
      dispatchNote:
        "Engineered for Goan coastal properties and urban developments. Combines sub-100ms multi-parameter geospatial filtering, ShadCN UI design language, and high-concurrency PostgreSQL indexing.",
      techStack: ["React", "NestJS", "ShadCN UI", "PostgreSQL"],
      liveUrl: "https://realestatwebsite.netlify.app",
      repoUrl: "https://github.com/sameertahasiladr/Realestate-website",
      accentColor: "#C8553D",
      stampLabel: "PROPERTIES",
      stampPrice: "₹ 10.00",
      postmarkDate: "PANAJI DISPATCH · PARCEL 02",
      postcardRotation: 1.5,
    },
    {
      id: "driveingoa",
      title: "Drive in Goa",
      subtitle: "Automotive Fleet Reservations",
      category: "Car Rental Platform",
      categoryGroup: "property",
      description:
        "Car rental booking with live vehicle listings, daily pricing, and multi-channel reservations.",
      dispatchNote:
        "Streamlining coastal transit across North & South Goa. Implemented instant vehicle availability calculation, automatic holiday tariff tiers, and instant WhatsApp booking relays.",
      techStack: ["React", "Node.js", "REST API"],
      liveUrl: "https://driveingoa.netlify.app",
      repoUrl: "https://github.com/sameertahasiladr/Driveingoa",
      accentColor: "#E9A23B",
      stampLabel: "COASTAL WAY",
      stampPrice: "₹ 5.00",
      postmarkDate: "MARGAO EXPEDITION · PARCEL 03",
      postcardRotation: -1.8,
    },
    {
      id: "photomemory",
      title: "Photo Memory Gallery",
      subtitle: "Media Archival & Tag Index",
      category: "Cloud Media Archive",
      categoryGroup: "creative",
      description:
        "Full CRUD media preservation system with Cloudinary asset optimization and instant tag-based retrieval.",
      dispatchNote:
        "A digital archive designed with analog Polaroid sensibility. Features lossless cloud compression, automated EXIF timestamp reading, and instantaneous client-side tag filtering.",
      techStack: ["React", "Cloudinary", "REST APIs"],
      liveUrl: "https://memoy.netlify.app",
      repoUrl: "https://github.com/sameertahasiladr/Photo-Memory-app-",
      accentColor: "#0E4D52",
      stampLabel: "KODAK VINTAGE",
      stampPrice: "₹ 2.00",
      postmarkDate: "VERNA REGISTRATION · PARCEL 04",
      postcardRotation: 1.1,
    },
    {
      id: "quotes-app",
      title: "Quotes App",
      subtitle: "Literary Inspiration & Curation",
      category: "Creative Nuxt Application",
      categoryGroup: "creative",
      description:
        "Inspiring literary quote platform co-developed with Nuxt.js, featuring elegant typography, categorized search, and responsive curation.",
      dispatchNote:
        "Co-developed during my tenure at Creative Capsule. Driven by hot-metal editorial typography, instant author taxonomy indexing, and SSR page hydration that drove a +35% engagement increase.",
      techStack: ["Nuxt.js", "Vue.js", "REST API"],
      repoUrl: "https://github.com/sameertahasiladr/Quotes-App",
      accentColor: "#C8553D",
      stampLabel: "QUOTES",
      stampPrice: "₹ 2.00",
      postmarkDate: "CC LABS · PARCEL 05",
      postcardRotation: -0.9,
    },
    {
      id: "spelling-bee",
      title: "Spelling Bee App",
      subtitle: "Interactive Word Puzzle Game",
      category: "EdTech & Gamification",
      categoryGroup: "creative",
      description:
        "Interactive word challenge and spelling game co-developed at Creative Capsule in Nuxt.js, delivering real-time validation and scoring logic.",
      dispatchNote:
        "Crafted with a honeycomb hex tile interface, real-time anagram matrix validation, pangram discovery rewards, and localized state persistence for daily puzzles.",
      techStack: ["Nuxt.js", "Vue.js", "JavaScript"],
      repoUrl: "https://github.com/sameertahasiladr/spellingbee",
      accentColor: "#E9A23B",
      stampLabel: "SPELLING",
      stampPrice: "₹ 5.00",
      postmarkDate: "CC LABS · PARCEL 06",
      postcardRotation: 1.3,
    },
    {
      id: "doit-today",
      title: "Do It Today",
      subtitle: "Interactive Task Productivity Application",
      category: "Task Productivity",
      categoryGroup: "utilities",
      description:
        "Fast, intuitive daily task and priority management application featuring instant CRUD operations, status filtering, and responsive client state.",
      dispatchNote:
        "An antidote to bloated project managers. Fast keyboard shortcuts, priority triage buckets, zero layout shifts, and rapid local storage hydration for daily momentum.",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://doit-today.vercel.app/",
      repoUrl: "https://github.com/sameertahasiladr/To-Do-List",
      accentColor: "#0E4D52",
      stampLabel: "TASK SYSTEM",
      stampPrice: "₹ 5.00",
      postmarkDate: "CALANGUTE DISPATCH · PARCEL 07",
      postcardRotation: -1.2,
    },
    {
      id: "noor-islamic-app",
      title: "Noor Islamic App",
      subtitle: "Spiritual Utilities & Prayer Times",
      category: "Lifestyle & Utilities",
      categoryGroup: "utilities",
      description:
        "Comprehensive spiritual companion web application providing prayer schedules, Islamic calendar utilities, daily supplications, and calm typography.",
      dispatchNote:
        "Built with mathematical astronomical calculation algorithms for precise solar coordinates, Hijri calendar synchronization, and clean distraction-free typography.",
      techStack: ["React", "JavaScript", "REST APIs", "CSS3"],
      repoUrl: "https://github.com/sameertahasiladr/Noor-islamic-app",
      accentColor: "#C8553D",
      stampLabel: "NOOR APP",
      stampPrice: "₹ 25.00",
      postmarkDate: "OLD GOA DISPATCH · PARCEL 08",
      postcardRotation: 1.4,
    },
  ],
  education: [
    {
      id: "msc-it",
      degree: "Master of Computer Science in Information Technology",
      institution: "Goa University",
      location: "Goa, India",
      period: "Jun 2023 to Apr 2025",
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications",
      institution: "Goa University",
      location: "Goa, India",
      period: "Jun 2020 to May 2023",
    },
  ],
};
