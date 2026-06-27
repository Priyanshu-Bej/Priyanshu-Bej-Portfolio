import { certificationImageFiles, projectLogos } from "../assets";
import {
  FiAward,
  FiBookOpen,
  FiBox,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
  FiTerminal,
} from "react-icons/fi";
import {
  SiAndroid,
  SiAndroidstudio,
  SiApple,
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiKotlin,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
} from "react-icons/si";

export const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/#about" },
  { id: "experience", label: "Experience", path: "/#experience" },
  { id: "skills", label: "Skills", path: "/#skills" },
  { id: "projects", label: "Engineered Work", path: "/#projects" },
  { id: "certifications", label: "Certifications", path: "/#certifications" },
  { id: "contact", label: "Contact", path: "/#contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
];

export const resumeResource = {
  label: "View resume",
  href: "https://drive.google.com/file/d/1jQe3SbdPrWvahaKmO2byuugcghnZxJI9/view?usp=sharing",
  preview:
    "https://github.com/Priyanshu-Bej/Priyanshu-Pritam-Bej-Resume/blob/main/Priyanshu_Pritam_Bej_Resume_Thumbnail.png?raw=true",
  fileName: undefined,
};

export const heroContent = {
  eyebrow: "Senior Mobile Developer @ IRISS Inc.",
  name: "Priyanshu Bej",
  role: "I build end-to-end products across mobile, IoT, AI, and hybrid cloud to deliver reliable systems at scale.",
  title: "Priyanshu Bej",
  highlight: "Priyanshu",
  bio: [],
  availability: "Engineering Enterprise Mobile, IoT, AI & Hybrid Cloud Solutions",
  location: "Bengaluru, India",
  toolbox: ["Flutter", "Dart", "Clean Architecture", "SOLID", "GitHub Actions"],
  workflow: ["Clean Architecture", "Agile teams", "CI/CD pipelines"],
  passion: "I cannot ignore messy code. I refactor until it is clean, readable, and production ready.",
  linkedin: {
    href: "https://www.linkedin.com/in/priyanshubej/",
    handle: "@priyanshubej",
    label: "Connect on LinkedIn",
  },
  stats: [
    { value: "4+ yrs", label: "Production experience" },
    { value: "15+ apps", label: "Shipped across stores" },
    { value: "Crores", label: "Revenue impact" },
  ],
  primaryAction: { label: "View engineered work", href: "/#projects" },
  secondaryAction: { label: "Start a conversation", href: "/contact" },
};

export const aboutContent = {
  headline: "Flutter specialist building enterprise mobile systems with clean architecture.",
  body: `Hello World. I am Priyanshu Bej, a Senior Mobile Developer at IRISS Inc, building end-to-end digital products from concept to scale across mobile, industrial IoT, AI workflows, and hybrid cloud systems.`,
  qualities: [
    {
      title: "Clean architecture mindset",
      description:
        "I follow Clean Architecture, SOLID principles, and strong OOP foundations so applications stay organized, readable, and easier to scale.",
    },
    {
      title: "Release discipline",
      description:
        "I enjoy Agile collaboration and CI/CD pipelines with GitHub Actions because smoother deployments keep teams moving with confidence.",
    },
    {
      title: "Meaningful mobile experiences",
      description:
        "For me, mobile development is about creating digital experiences that simplify real workflows and make everyday interactions better.",
    },
  ],
};

export const experienceTimeline = [
  {
    company: "IRISS Inc",
    title: "Mobile engineering progression",
    period: "Dec 2024 – Present",
    location: "Florida, United States x Bengaluru, India | Hybrid",
    icon: FiCpu,
    summary:
      "One company journey: from owning the E-Sentry mobile experience to senior-level work across mobile, IoT, AI, and industrial innovation.",
    roles: [
      {
        title: "Senior Mobile Developer",
        period: "Jan 2026 – Present",
        label: "Current role",
        bullets: [
          "Working at the intersection of mobile, IoT, AI, and industrial innovation.",
          "Building E Sentry Systems and IRISS SiteWalk across NFC asset inspection, thermal site workflows, offline sync, cloud reporting, and admin operations.",
          "Contributing to next-generation product work while continuing to support the E-Sentry ecosystem.",
        ],
      },
      {
        title: "Mobile App Developer",
        period: "Dec 2024 – Jan 2026",
        label: "Previous role",
        bullets: [
          "Led mobile development for E-Sentry, a next-generation asset management platform for industrial environments worldwide.",
          "Owned the mobile experience from architecture to deployment, with focus on scalability, performance, and reliability.",
          "Worked across hardware integrations, global requirements, and large-scale data flows where precision and safety matter.",
        ],
      },
    ],
  },
  {
    company: "Kods Technologies",
    title: "Flutter Developer",
    period: "Dec 2023 – Nov 2024",
    location: "Bengaluru, India",
    icon: FiCode,
    bullets: [
      "Worked in a fast-paced Bengaluru product environment where ideas moved quickly from concept to shipped apps.",
      "Built cross-platform Flutter products while solving end-to-end product and engineering problems at scale.",
      "Guided implementation decisions and supported teammates through higher-stakes delivery cycles.",
    ],
  },
  {
    company: "Typof Technologies",
    title: "Flutter Developer",
    period: "Dec 2022 – Dec 2023",
    location: "Bhubaneswar, India",
    icon: FiBox,
    bullets: [
      "Built in a startup environment where real users depended on fast, practical product decisions.",
      "Solved production problems under pressure while growing deeper ownership of mobile product delivery.",
    ],
  },
  {
    company: "Freelance",
    title: "Flutter Developer",
    period: "Mar 2022 – Dec 2022",
    location: "Remote",
    icon: FiTerminal,
    bullets: [
      "Started independently with no fixed roadmap, taking ideas from uncertainty into working mobile products.",
      "Built early MVPs and learned to solve real problems directly with clients and users.",
    ],
  },
];

export const educationTimeline = [
  {
    school: "Gandhi Institute for Technology [GIFT], Bhubaneswar",
    program: "Master of Computer Applications - Computer Software Engineering",
    period: "Nov 2021 – Dec 2023",
    icon: FiBookOpen,
  },
  {
    school: "Baripada Degree College",
    program: "Bachelor of Science",
    period: "2018 – 2021",
    icon: FiBookOpen,
  },
  {
    school: "Baripada Jr. College",
    program: "Intermediate (Class 12)",
    period: "2016 – 2018",
    icon: FiBookOpen,
  },
  {
    school: "Kendriya Vidyalaya Kendujhar",
    program: "Matriculation",
    period: "2016",
    icon: FiBookOpen,
  },
];

export const skillGroups = [
  {
    title: "Enterprise mobile platforms",
    description:
      "Cross-platform Android and iOS applications built with smooth UX, maintainable architecture, and production reliability.",
    items: ["Flutter", "Dart", "Kotlin", "Android Studio", "Jetpack Compose"],
  },
  {
    title: "Architecture & delivery",
    description:
      "Clean Architecture, SOLID principles, OOP foundations, and CI/CD workflows that keep code readable and releases smooth.",
    items: ["Clean Architecture", "SOLID", "OOP", "GitHub Actions", "CI/CD"],
  },
  {
    title: "IoT, AI & hybrid cloud",
    description:
      "Mobile systems connected to hardware, realtime data, cloud services, and emerging AI-enabled industrial workflows.",
    items: ["Industrial IoT", "Firebase", "Node.js", "Hybrid Cloud", "AI Workflows"],
  },
];

export const skillIcons = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Bloc", icon: FiLayers },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Firebase", icon: SiFirebase },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "AWS", icon: FiCloud },
  { name: "Android", icon: SiAndroid },
  { name: "iOS", icon: SiApple },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "AI Workflows", icon: SiOpenai },
];

export const projects = [
  {
    id: "e-sentry-systems",
    title: "E Sentry Systems",
    category: "NFC Asset Management",
    timeframe: "2024 – Present",
    description:
      "Industrial asset inspection platform where NFC-compatible devices activate tags, submit check-ins, sync inspection history to the cloud, and help admins manage routes and asset trends.",
    impact: [
      "Built for NFC asset tags, assigned routes, check-in capture, inspection progress, and cloud-synced asset history across industrial environments.",
      "Supports admin review for completed and assigned routes, route creation, inspection history, trend conversion, and Excel-compatible exports.",
      "Recent release work includes dark mode, app lock, real-time push notifications, refreshed UI, faster performance, and stronger protection.",
    ],
    tech: ["Flutter", "NFC", "Industrial IoT", "Cloud Sync", "Push Notifications", "App Lock"],
    tags: ["IRISS", "Enterprise", "iOS + Android"],
    image: projectLogos["e-sentry-systems"],
    preview: "app-icon",
    facts: [
      { label: "iOS version", value: "3.1.7" },
      { label: "iOS updated", value: "Apr 16, 2026" },
      { label: "Android updated", value: "Apr 18, 2026" },
      { label: "Category", value: "Utilities / Business" },
      { label: "Minimum iOS", value: "15.6+" },
      { label: "Google Play", value: "50+ downloads" },
      { label: "Privacy", value: "iOS: Data Not Collected" },
      { label: "Price", value: "Free" },
    ],
    links: {
      live: "https://apps.apple.com/us/app/e-sentry-systems/id6444192723",
      repo: null,
    },
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/e-sentry-systems/id6444192723",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.iriss.esentryconnect&hl=en",
      },
    ],
  },
  {
    id: "iriss-sitewalk",
    title: "IRISS SiteWalk",
    category: "Industrial Inspection & Reporting",
    timeframe: "2026 – Present",
    description:
      "Guided field inspection app for thermal imaging setups, built around structured site capture, asset documentation, IR window marking, PDF reporting, offline drafts, and background sync.",
    impact: [
      "Designed around a clear inspection flow from site information to final review so field teams keep every room, asset, contact, and note organized.",
      "Supports camera and gallery capture for nameplate, thermal, wide-angle, and close-up asset photos with IR window and sensor placement annotations.",
      "Generates professional PDF reports with on-site preview, share, print, draft history, queued submissions, and automatic background sync.",
    ],
    tech: ["Flutter", "PDF Reports", "Offline Sync", "Camera", "Cloud Sync", "Admin Workflows"],
    tags: ["IRISS", "Business", "iOS + Android"],
    image: projectLogos["iriss-sitewalk"],
    preview: "app-icon",
    facts: [
      { label: "iOS version", value: "1.1.5" },
      { label: "iOS updated", value: "May 20, 2026" },
      { label: "Android updated", value: "May 19, 2026" },
      { label: "Category", value: "Business / Productivity" },
      { label: "Minimum iOS", value: "16.6+" },
      { label: "Google Play", value: "10+ downloads" },
      { label: "Privacy", value: "No data collected on Google Play" },
      { label: "Price", value: "Free" },
    ],
    links: {
      live: "https://apps.apple.com/us/app/iriss-sitewalk/id6759625809",
      repo: null,
    },
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/iriss-sitewalk/id6759625809",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.iriss.sitewalk&hl=en",
      },
    ],
  },
  {
    id: "locky",
    title: "Locky",
    category: "NFC Wallet & Finance",
    timeframe: "2025",
    description:
      "Offline-first NFC wallet, encrypted notes, subscription tracking, and everyday expense insights in one mobile app.",
    impact: [
      "Designed for instant card scanning with encrypted local storage.",
      "Built expense and subscription views that make recurring spend easier to understand.",
      "Optimized core flows for low-latency access without depending on constant connectivity.",
    ],
    tech: ["Flutter", "NFC", "Local Encryption", "Cloud Sync"],
    tags: ["Fintech", "Offline-first", "NFC"],
    image: projectLogos.locky,
    preview: "app-icon",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.locky.priyanshubej",
      repo: null,
    },
  },
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
    image: projectLogos.railkafe,
    preview: "app-icon",
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
    image: projectLogos.vdriv,
    preview: "app-icon",
    links: {
      live: "https://apps.apple.com/in/app/vdriv-car-drivers-on-demand/id6743806441",
      repo: null,
    },
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/vdriv-car-drivers-on-demand/id6743806441",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.vdriv.user",
      },
    ],
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
    image: projectLogos["abc-learning"],
    preview: "app-icon",
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
    featured: false,
    description:
      "Seller command center for Typof with inventory sync, logistics tracking, and revenue dashboards.",
    impact: [
      "Real-time catalog management and media uploads with S3 storage integration.",
      "Multi-warehouse fulfillment with automated reconciliation and notifications.",
      "Reduced support tickets by 28% through guided onboarding and alerts.",
    ],
    tech: ["Flutter", "REST APIs", "Firebase", "Laravel", "Node.js"],
    tags: ["B2B", "Commerce"],
    image: projectLogos.typof,
    preview: "app-icon",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.typof",
      repo: null,
    },
    storeLinks: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.typof",
      },
    ],
  },
  {
    id: "integer-gst-billing",
    title: "Integer",
    category: "GST Billing & Invoicing",
    timeframe: "2023",
    featured: false,
    description:
      "GST billing and invoice management app for creating invoices, managing customers and vendors, tracking bills, sales orders, inventory items, and business analytics.",
    impact: [
      "Built a cross-platform billing workspace with GST invoices, customizable templates, customer/vendor management, bills, sales orders, and item tracking.",
      "Integrated Firebase for secure data handling and realtime synchronization, with RESTful APIs connecting external commerce and business systems.",
      "Used GetX for responsive state management across analytics, reporting, SKU generation, inventory records, and daily business workflows.",
    ],
    tech: ["Flutter", "Firebase", "GetX", "REST APIs", "Analytics", "Invoice Templates"],
    tags: ["Business", "GST", "Billing"],
    image: projectLogos["integer-gst-billing"],
    preview: "app-icon",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.typof.integer&hl=en_US",
      repo: null,
    },
    storeLinks: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.typof.integer&hl=en_US",
      },
    ],
  },
  {
    id: "gst-invoice-generator",
    title: "GST Invoice Generator",
    category: "GST Invoicing Utility",
    timeframe: "2023",
    featured: false,
    description:
      "Minimal Flutter invoicing app for creating GST-compliant invoices, calculating taxes automatically, managing clients, tracking invoice history, and exporting PDFs.",
    impact: [
      "Built a clean business tool that helps small businesses and freelancers create GST-compliant invoices without unnecessary workflow friction.",
      "Implemented automatic GST tax calculations, branded invoice details, PDF downloads, client records, and invoicing history for everyday financial operations.",
      "Kept the experience focused on fast invoice creation, simple record keeping, and a lightweight interface suitable for non-technical users.",
    ],
    tech: ["Flutter", "GetX", "PDF Export", "GST", "Client Management"],
    tags: ["Business", "Invoice", "Utility"],
    image: projectLogos["gst-invoice-generator"],
    preview: "app-icon",
    facts: [
      { label: "Category", value: "Business" },
      { label: "Updated", value: "Sept 7, 2023" },
      { label: "Google Play", value: "5K+ downloads" },
      { label: "Rating", value: "4.1 star / 34 reviews" },
      { label: "Content rating", value: "Rated for 3+" },
      { label: "Privacy", value: "No data collected or shared" },
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.gstinvoicegenerator_app&hl=en_IN",
      repo: null,
    },
    storeLinks: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.gstinvoicegenerator_app&hl=en_IN",
      },
    ],
  },
  {
    id: "sku-generator",
    title: "SKU Generator",
    category: "Inventory Utility",
    timeframe: "2023",
    featured: false,
    description:
      "Flutter and GetX inventory utility for creating custom SKU codes, organizing product attributes and variations, and exporting SKU data as CSV for external systems.",
    impact: [
      "Created a focused SKU workflow for generating custom inventory codes based on product attributes, categories, and variations.",
      "Added CSV export so inventory data can move into external systems without manual re-entry or spreadsheet cleanup.",
      "Used a streamlined Material interface to make stock organization faster for business users managing repeat catalog tasks.",
    ],
    tech: ["Flutter", "GetX", "Material Design", "CSV Export", "Inventory"],
    tags: ["Productivity", "Inventory", "Utility"],
    image: projectLogos["sku-generator"],
    preview: "app-icon",
    facts: [
      { label: "Category", value: "Productivity" },
      { label: "Updated", value: "Aug 25, 2023" },
      { label: "Google Play", value: "1K+ downloads" },
      { label: "Content rating", value: "Rated for 3+" },
      { label: "Export", value: "CSV" },
      { label: "Privacy", value: "No data collected or shared" },
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.sku.generator.app.android&hl=en_IN",
      repo: null,
    },
    storeLinks: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.sku.generator.app.android&hl=en_IN",
      },
    ],
  },
  {
    id: "lets-fun",
    title: "Let's Fun",
    category: "Social",
    timeframe: "2022",
    featured: false,
    description:
      "Modern dating platform with video, audio, and instant chat built on secure real-time infrastructure.",
    impact: [
      "Multi-modal communication stack with Aroga voice/video SDK and WebRTC fallbacks.",
      "Trust & safety features including media verification, report workflows, and moderation panels.",
      "Growth experimentation pipeline with feature flags and targeted promotions.",
    ],
    tech: ["Flutter", "Laravel", "Firebase", "Aroga SDK"],
    tags: ["Social", "Realtime"],
    image: projectLogos["lets-fun"],
    preview: "app-icon",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.letsFun.user",
      repo: null,
    },
    storeLinks: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.letsFun.user",
      },
    ],
  },
  {
    id: "atoms",
    title: "ATOMS",
    category: "EdTech",
    timeframe: "2021",
    featured: false,
    description:
      "Academic and school management system connecting students, parents, and educators.",
    impact: [
      "Performance analytics with cohort-based insights and attendance automation.",
      "Payments, fee reminders, and ledger tracking integrated with Razorpay.",
      "Scalable modular architecture enabling custom workflows per institution.",
    ],
    tech: ["Flutter", "Provider", "Laravel", "Razorpay"],
    tags: ["Education", "B2B"],
    image: projectLogos.atoms,
    preview: "app-icon",
    links: {
      live: "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System.git",
      repo: "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System.git",
    },
  },
];

export const certificationShowcase = [
  {
    id: "claude-platform-101",
    title: "Claude Platform 101",
    issuer: "Anthropic",
    issued: "Jun 2026",
    skills: ["Claude API", "Tool use", "Context"],
    summary:
      "Hands-on foundation in Claude API message format, tool use, context management, and choosing agents versus simple calls.",
    imageFile: certificationImageFiles.claudePlatform101,
    featured: true,
    icon: FiCpu,
  },
  {
    id: "oracle-ai-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Dec 2025",
    credentialId: "324810983OCI25AICFA",
    skills: ["Oracle Cloud", "Oracle AI", "ML fundamentals"],
    summary:
      "Validates AI and machine learning fundamentals across Oracle Cloud Infrastructure and applied AI concepts.",
    imageFile: certificationImageFiles.oracleAiFoundations2025,
    featured: true,
    icon: FiCloud,
  },
  {
    id: "pluralsight-security-champion",
    title: "Developer Security Champion",
    issuer: "Pluralsight",
    issued: "Jun 2025",
    skills: ["AppSec", "Secure coding", "Security review"],
    summary:
      "Security-focused training for safer application design, secure coding practices, and developer-owned risk awareness.",
    imageFile: certificationImageFiles.pluralsightSecurityChampion,
    featured: true,
    icon: FiShield,
  },
  {
    id: "great-learning-flutter",
    title: "Flutter Certification",
    issuer: "Great Learning",
    issued: "Sep 2024",
    skills: ["Flutter", "Flutter iOS", "Mobile UI"],
    summary:
      "Flutter-focused certification supporting cross-platform Android and iOS application development.",
    imageFile: certificationImageFiles.greatLearningFlutter,
    featured: true,
    icon: SiFlutter,
  },
  {
    id: "nptel-iot",
    title: "NPTEL Introduction to Internet of Things Certification",
    issuer: "IIT Kharagpur",
    issued: "May 2023",
    skills: ["IoT", "Sensors", "Connected systems"],
    summary:
      "Covers IoT fundamentals, device connectivity, applications, and the concepts behind connected technology systems.",
    imageFile: certificationImageFiles.nptelIot,
    featured: true,
    icon: FiCpu,
  },
  {
    id: "nptel-cloud-computing",
    title: "NPTEL Cloud Computing Certification",
    issuer: "IIT Kharagpur",
    issued: "May 2023",
    skills: ["Cloud computing", "Infrastructure", "Distributed systems"],
    summary:
      "Builds cloud fundamentals that support hybrid cloud thinking, scalable systems, and platform-aware mobile delivery.",
    imageFile: certificationImageFiles.nptelCloudComputing,
    featured: true,
    icon: FiCloud,
  },
  {
    id: "nptel-mis",
    title: "Management Information System",
    issuer: "IIT Kharagpur",
    issued: "Jan 2023",
    credentialId: "NPTEL23MG87S733000135",
    skills: ["MIS", "Business systems", "Decision support"],
    summary:
      "Covers management information systems and how structured information supports operational and business decisions.",
    imageFile: certificationImageFiles.nptelMis,
    featured: false,
    icon: FiDatabase,
  },
  {
    id: "simplilearn-flutter",
    title: "Flutter Certification",
    issuer: "Simplilearn",
    issued: "Sep 2024",
    credentialId: "Certificate code: 7349326",
    skills: ["Flutter", "Dart", "API integration"],
    summary:
      "Cross-platform mobile training covering responsive UI, state management, API integration, and production-ready app delivery.",
    imageFile: certificationImageFiles.simplilearnFlutter,
    featured: false,
    icon: SiFlutter,
  },
  {
    id: "odisha-intel-ai",
    title: "AI Appreciated Certificate",
    issuer: "E&IT Department, Government of Odisha + Intel",
    issued: "Jan 2023",
    skills: ["AI fundamentals", "Applied AI", "Intel"],
    summary:
      "Recognition for early AI learning and dedication from the E&IT Department, Government of Odisha, and Intel.",
    imageFile: certificationImageFiles.odishaIntelAi,
    featured: false,
    icon: FiAward,
  },
  {
    id: "codekaze-2023",
    title: "Codekaze Sep'23 Round 2",
    issuer: "Coding Ninjas",
    issued: "Sep 2023",
    credentialId: "368174",
    skills: ["DSA", "Problem solving", "Software development"],
    summary:
      "Nationwide coding competition participation during Naukri Engineers Week, focused on data structures, algorithms, and problem solving.",
    imageFile: certificationImageFiles.codekaze2023,
    featured: false,
    icon: FiCode,
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
