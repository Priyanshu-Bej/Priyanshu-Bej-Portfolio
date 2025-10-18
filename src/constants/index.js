import {
  android,
  androidStudio,
  awsLogo,
  baripadCollege,
  bloc,
  dart,
  figma,
  firebase,
  flutter,
  freelancerLogo,
  gcpLogo,
  gift,
  git,
  githubLogo,
  iosLogo,
  irissLogo,
  kodsLogo,
  kotlin,
  kv,
  me,
  aboutPortrait,
  mongo,
  nodejs,
  postman,
  typoflogo,
} from "../assets";

export const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export const resumeResource = {
  label: "View resume",
  href: "https://drive.google.com/file/d/1jQe3SbdPrWvahaKmO2byuugcghnZxJI9/view?usp=sharing",
  preview:
    "https://github.com/Priyanshu-Bej/Priyanshu-Pritam-Bej-Resume/blob/main/Priyanshu_Pritam_Bej_Resume_Thumbnail.png?raw=true",
  fileName: undefined,
};

export const heroContent = {
  eyebrow: "Lead Flutter Engineer",
  title: "Shipping human-centered mobile journeys",
  highlight: "mobile journeys",
  bio: [],
  toolbox: [],
  workflow: [],
  passion: "",
  linkedin: {
    href: "https://www.linkedin.com/in/priyanshubej/",
    handle: "@priyanshubej",
    label: "Connect on LinkedIn",
  },
  portrait: me,
  aboutPortrait,
  heroLogos: [
    {
      name: "Flutter",
      image: flutter,
    },
    {
      name: "Android",
      image: android,
    },
    {
      name: "iOS",
      image: iosLogo,
    },
  ],
  stats: [
    { value: "3.5+ yrs", label: "Production experience" },
    { value: "12 apps", label: "Shipped across stores" },
    { value: "Revenue", label: "Generated in crores" },
  ],
  primaryAction: { label: "Start a project", href: "/contact" },
  secondaryAction: { label: "View projects", href: "/projects" },
};

export const aboutContent = {
  headline: "Full-stack mobile execution with a product mindset.",
  body: `I'm Priyanshu Pritam Bej — a Bengaluru-based Flutter engineer focused on building resilient mobile ecosystems for hyper-growth teams. I partner with design, product, and backend squads to transform ambitious ideas into polished experiences that scale.`,
  qualities: [
    {
      title: "End-to-end delivery",
      description:
        "From ideation and UX flows to analytics, error budgets, and store releases — I enjoy owning the full lifecycle.",
    },
    {
      title: "Systems thinking",
      description:
        "Design systems, clean architecture, and automated QA pipelines keep the team moving quickly without losing quality.",
    },
    {
      title: "Collaborative leadership",
      description:
        "I mentor juniors, facilitate tech choices, and keep roadmaps honest through transparent communication.",
    },
  ],
};

export const experienceTimeline = [
  {
    company: "IRISS Inc",
    title: "Mobile App Developer",
    period: "Dec 2024 – Present",
    location: "Bengaluru, India",
    icon: irissLogo,
    bullets: [
      "Leading eSentry — an asset management platform that pairs industrial IoT sensors with field-ready mobile workflows.",
      "Architected offline-first modules with NFC scanning and maintenance automation that reduced manual audits by 40%.",
      "Built executive dashboards with actionable telemetry, boosting preventative maintenance adoption across clients.",
    ],
  },
  {
    company: "Kods Technologies",
    title: "Flutter Developer",
    period: "Dec 2023 – Dec 2024",
    location: "Bengaluru, India",
    icon: kodsLogo,
    bullets: [
      "Shipped cross-platform service apps spanning EdTech, on-demand logistics, and ride booking with 30% faster release cadences.",
      "Introduced Bloc- and Provider-driven state patterns with analytics instrumentation for user journey insights.",
      "Collaborated with backend teams to optimize REST APIs and push notification delivery, increasing retention by 18%.",
    ],
  },
  {
    company: "Typof Technologies",
    title: "Flutter Developer",
    period: "Dec 2022 – Dec 2023",
    location: "Bhubaneswar, India",
    icon: typoflogo,
    bullets: [
      "Modernized seller tooling for e-commerce partners with real-time inventory sync, media uploads, and automated settlements.",
      "Established CI/CD pipelines with staged rollouts and monitoring, cutting hotfix cycles from days to hours.",
    ],
  },
  {
    company: "Freelance",
    title: "Flutter Developer",
    period: "Mar 2022 – Dec 2022",
    location: "Remote",
    icon: freelancerLogo,
    bullets: [
      "Rapid prototyping for startups, piloting MVPs and collaborating closely with non-technical founders.",
    ],
  },
];

export const educationTimeline = [
  {
    school: "Gandhi Institute for Technology",
    program: "Master of Computer Applications",
    period: "2021 – 2023",
    icon: gift,
  },
  {
    school: "Baripada Degree College",
    program: "Bachelor of Science",
    period: "2018 – 2021",
    icon: baripadCollege,
  },
  {
    school: "Baripada Jr. College",
    program: "Intermediate (Class 12)",
    period: "2016 – 2018",
    icon: baripadCollege,
  },
  {
    school: "Kendriya Vidyalaya Kendujhar",
    program: "Matriculation",
    period: "2016",
    icon: kv,
  },
];

export const skillKeywords = [
  "Flutter",
  "Dart",
  "Kotlin",
  "Jetpack Compose",
  "Firebase",
  "Supabase",
  "Node.js",
  "MongoDB",
  "Socket.IO",
  "REST APIs",
  "GraphQL",
  "Generative AI",
  "CI/CD",
  "Bloc",
  "Provider",
  "Clean Architecture",
  "MVC",
  "Design Systems",
  "Motion Design",
  "Figma",
  "App Store Ops",
  "Play Store Ops",
  "Analytics",
  "A/B Testing",
  "Automated QA",
  "Unit Testing",
];

export const skillGroups = [
  {
    title: "Mobile platforms",
    description:
      "Flutter, native Android, and integrations that keep experiences feeling fast and intuitive.",
    items: ["Flutter", "Dart", "Kotlin", "Android Studio", "Jetpack Compose"],
  },
  {
    title: "Architecture & tooling",
    description:
      "Predictable state management, modular codebases, and automation that scales with the product roadmap.",
    items: ["Bloc", "Provider", "Clean Architecture", "CI/CD", "Git + GitHub"],
  },
  {
    title: "Cloud & data",
    description:
      "Realtime sync, resilient APIs, and observability to keep products trustworthy under load.",
    items: ["Firebase", "MongoDB", "Node.js", "Supabase", "Socket.IO"],
  },
];

export const skillIcons = [
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },
  { name: "Bloc", icon: bloc },
  { name: "Kotlin", icon: kotlin },
  { name: "Firebase", icon: firebase },
  { name: "Google Cloud", icon: gcpLogo },
  { name: "AWS", icon: awsLogo },
  { name: "Android", icon: android },
  { name: "Node.js", icon: nodejs },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubLogo },
  { name: "MongoDB", icon: mongo },
  { name: "Android Studio", icon: androidStudio },
  { name: "Postman", icon: postman },
  { name: "Figma", icon: figma },
];

export const projects = [
  {
    id: "railkafe",
    title: "RailKafe",
    category: "Logistics & Commerce",
    timeframe: "2023",
    description:
      "Real-time food delivery platform for train passengers with offline resilience and PhonePe payments.",
    impact: [
      "10K+ monthly orders with sub-30 second order placement.",
      "Optimized for low-connectivity corridors via background sync and caching.",
      "Integrated PhonePe SDK and live kitchen dashboards for SLAs under 5 minutes.",
    ],
    tech: ["Flutter", "Node.js", "Socket.IO", "Firebase", "PhonePe SDK"],
    tags: ["Production", "Realtime", "Consumer"],
    image:
      "https://github.com/Priyanshu-Bej/Priyanshu-Bej-Portfolio/blob/main/src/assets/railkafe.png?raw=true",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.railkafe.app",
      repo: null,
    },
  },
  {
    id: "vdriv",
    title: "VDriv",
    category: "Mobility",
    timeframe: "2024",
    description:
      "Driver marketplace connecting travelers with verified chauffeurs for local and outstation trips.",
    impact: [
      "Dynamic scheduling with route-aware pricing and availability checks.",
      "Secure payments via Razorpay with automated invoice workflows.",
      "Push notifications and in-app chat to reduce no-shows and support escalations.",
    ],
    tech: ["Flutter", "Node.js", "Firebase", "Razorpay"],
    tags: ["Mobility", "Marketplace"],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/VDriv-Book-Drivers-online/refs/heads/main/vdriv.png",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.vdriv.user",
      repo: null,
    },
  },
  {
    id: "abc-learning",
    title: "ABC Learning",
    category: "EdTech",
    timeframe: "2023",
    description:
      "Interactive learning platform with purchasable courses, Q&A forums, and in-app code challenges.",
    impact: [
      "Custom code editor with auto-evaluation to increase assignment completion by 35%.",
      "Hybrid monetization with secure payments and drip-enabled course delivery.",
      "Instructor analytics for cohort health, adoption, and engagement scoring.",
    ],
    tech: ["Flutter", "Provider", "MongoDB", "Firebase", "Razorpay"],
    tags: ["EdTech", "Product"],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/ABC-Learning-APP/refs/heads/main/abc.png",
    links: {
      live: "https://github.com/Priyanshu-Bej/ABC-Learning-APP",
      repo: "https://github.com/Priyanshu-Bej/ABC-Learning-APP",
    },
  },
  {
    id: "typof",
    title: "Typof Sellers",
    category: "E-commerce Ops",
    timeframe: "2022",
    description:
      "Seller command center for Typof with inventory sync, logistics tracking, and revenue dashboards.",
    impact: [
      "Real-time catalog management and media uploads with S3 storage integration.",
      "Multi-warehouse fulfillment with automated reconciliation and notifications.",
      "Reduced support tickets by 28% through guided onboarding and alerts.",
    ],
    tech: ["Flutter", "REST APIs", "Firebase", "Laravel", "Node.js"],
    tags: ["B2B", "Commerce"],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/Typof-app/refs/heads/main/typof.png",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.typof",
      repo: null,
    },
  },
  {
    id: "lets-fun",
    title: "Let's Fun",
    category: "Social",
    timeframe: "2022",
    description:
      "Modern dating platform with video, audio, and instant chat built on secure real-time infrastructure.",
    impact: [
      "Multi-modal communication stack with Aroga voice/video SDK and WebRTC fallbacks.",
      "Trust & safety features including media verification, report workflows, and moderation panels.",
      "Growth experimentation pipeline with feature flags and targeted promotions.",
    ],
    tech: ["Flutter", "Laravel", "Firebase", "Aroga SDK"],
    tags: ["Social", "Realtime"],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/Priyanshu-Bej-Portfolio/refs/heads/main/src/assets/letsfun.png",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.letsFun.user",
      repo: null,
    },
  },
  {
    id: "atoms",
    title: "ATOMS",
    category: "EdTech",
    timeframe: "2021",
    description:
      "Academic and school management system connecting students, parents, and educators.",
    impact: [
      "Performance analytics with cohort-based insights and attendance automation.",
      "Payments, fee reminders, and ledger tracking integrated with Razorpay.",
      "Scalable modular architecture enabling custom workflows per institution.",
    ],
    tech: ["Flutter", "Provider", "Laravel", "Razorpay"],
    tags: ["Education", "B2B"],
    image:
      "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System/blob/main/Atoms.png?raw=true",
    links: {
      live: "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System.git",
      repo: "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System.git",
    },
  },
];

export const certificationShowcase = [
  {
    title: "Developer Security Champion",
    issuer: "Pluralsight",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pluralsight_logo.png",
  },
  {
    title: "Flutter Certification",
    issuer: "Great Learning",
    logo: "https://yt3.googleusercontent.com/Jpdh9vywgq6ZbxUT9OmuN2JkingCOhv1UuEmz9X6M8IKJSeD1wCzaYUV6PW8Gmp6agZGRWT_gw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Introduction to IoT",
    issuer: "NPTEL · IIT Kharagpur",
    logo: "https://github.com/Priyanshu-Bej/Priyanshu-Bej-Portfolio-/blob/main/src/assets/IIT.png?raw=true",
  },
  {
    title: "Management Information System",
    issuer: "NPTEL · IIT Kharagpur",
    logo: "https://github.com/Priyanshu-Bej/Priyanshu-Bej-Portfolio-/blob/main/src/assets/IIT.png?raw=true",
  },
];

export const socialLinks = [
  {
    label: "Email",
    href: "mailto:priyanshubej2001@gmail.com",
    handle: "priyanshubej2001@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshubej/",
    handle: "@priyanshubej",
  },
  {
    label: "GitHub",
    href: "https://github.com/Priyanshu-Bej",
    handle: "@Priyanshu-Bej",
  },
];

export const contactChannels = [
  {
    type: "email",
    label: "Email",
    value: "priyanshubej2001@gmail.com",
    href: "mailto:priyanshubej2001@gmail.com",
  },
  {
    type: "location",
    label: "Currently in",
    value: "Bengaluru, India",
  },
  {
    type: "freelance",
    label: "Freelance",
    value: "Open for collaborations",
  },
];
