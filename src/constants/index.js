import {
  // javascript,
  // bootstrap,
  // html,
  // css,
  // reactjs,
  // springboot,
  // postgres,
  // angular,
  // typescript,
  // tailwind,
  // nodejs,
  // mongodb,
  // mysql,

  flutter,
  dart,
  kotlin,
  androidStudio,
  bloc,
  firebase,
  githubLogo,
  mongo,
  nodejs,
  postman,
  git,
  figma,
  kodsLogo,
  typoflogo,
  freelancerLogo,
  baripadCollege,
  kv,
  gift,
  android,
  // enis,
  // lordroid,
  // quebec,
  // spotify,
  // bl,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "HomePage()",
  },
  {
    id: "about",
    title: "AboutMe()",
  },
  {
    id: "work",
    title: "CareerCommits()",
  },
  {
    id: "contact",
    title: "Connect()",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: "",
  },
  {
    title: "Android Developer",
    icon: "",
  },
  {
    title: "IOS Developer",
    icon: "",
  },
  {
    title: "Freelancer",
    icon: "",
  },
];

const technologies = [
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "bloc",
    icon: bloc,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "Node Js",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: githubLogo,
  },
  {
    name: "Mongo DB",
    icon: mongo,
  },
  {
    name: "androidStudio",
    icon: androidStudio,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Kods Technologies | Bengaluru",
    icon: kodsLogo,
    iconBg: "#4B0082",
    date: "Dec 2023 - Present",
    points: [
      "Led the development of real-time, cross-platform service apps for sectors including Ed-tech, Food Delivery, and Ride Booking, enhancing operational efficiency and user experience.",
      "Utilized Flutter for UI development, integrating analytics to monitor and enhance user interactions and satisfaction.",
      "Implemented robust state management techniques using Bloc and Provider, ensuring smooth and responsive app behavior.",
      "Successfully launched service applications that attracted thousands of users, significantly boosting user adoption rates and contributing to business profitability and market expansion.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Typof Technologies | Bhubaneswar",
    icon: typoflogo,
    iconBg: "#4B0082",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Engineered and optimized cross-platform Flutter applications for the E-commerce sector, enhancing both operational efficiency and customer engagement.",
      "Advanced state management adoption, using GetX and Provider to increase application responsiveness and reliability.",
      "Streamlined backend integration with optimized REST APIs and Firebase, improving data handling and application performance.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Freelancer | Remote  ",
    icon: freelancerLogo,
    iconBg: "#4B0082",
    date: "Mar 2022 - Dec 2022",
    points: [
      "Embarked on my Flutter development journey, collaborating with diverse teams on small projects to hone my skills and create innovative mobile solutions",
      "Developed foundational skills in crafting user-centric applications, leveraging Flutter to build functional and impactful interfaces while focusing on continuous learning and self-improvement",
    ],
  },
];
const educational = [
  {
    title: "Masters in Computer Application",
    company_name: "Gandhi Institute for Technology | Bhubaneswar",
    icon: gift,
    iconBg: "#4B0082",
    date: "2021 - 2023",
    points: [],
  },
  {
    title: "Bachelor of Science",
    company_name: "Baripada Degree College | Baripada",
    icon: baripadCollege,
    iconBg: "#4B0082",
    date: "2018 - 2021",
    points: [],
  },
  {
    title: "Intermediate (Class 12)",
    company_name: "Baripada Jr. College | Baripada",
    icon: baripadCollege,
    iconBg: "#4B0082",
    date: "2016 - 2018",
    points: [],
  },
  {
    title: "Matriculation (Class 10)",
    company_name: "Kendriya Vidyalaya | Kendujhar",
    icon: kv,
    iconBg: "#4B0082",
    date: "2016",
    points: [],
  },
];

const certifications = [
  {
    certification:
      "Flutter Certification: Building Efficient Cross-Platform Apps",
    name: "SimpliLearn",
    date: "2024",

    image: "",
  },
  {
    certification: "NPTEL Cloud Computing Certification ",
    name: "Indian Institute of Technology, Kharagpur",
    date: "2023",
    image: "",
  },
  {
    certification:
      "AI Appreciation Certificate: Foundations of Artificial Intelligence",
    name: "E&IT Department, Government of Odisha and Intel.",
    date: "2023",
    image: "",
  },
];
const projects = [
  {
    name: "Railkafe -    Order Food in Train",
    description:
      "Developed RailKafe, a real-time food delivery app tailored for train passengers, boasting over 10,000 downloads. Optimized for low-connectivity environments and integrated with PhonePe payments, it streamlines dining experiences on the rails.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Socket I/O",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Priyanshu-Bej/Priyanshu-Bej-Portfolio/blob/main/railkafe.png?raw=true",
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.railkafe.app",
  },
  {
    name: "ABC Online Learning Platform",
    description:
      "Developed ABC Learning App, an Ed-tech platform with purchasable courses, real-time Q&A forums, and a custom in-app code editor for assignments. Enabled interactive and engaging learning for users.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Provider Bloc",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/ABC-Learning-APP/refs/heads/main/abc.png",
    source_code_link: "https://github.com/Priyanshu-Bej/ABC-Learning-APP",
  },
  {
    name: "Typof - For Sellers",
    description:
      "Developed Typof, an e-commerce site management app for sellers, enabling efficient product listing, order tracking, and inventory management. Streamlined operations for enhanced business productivity.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "REST API's",
        color: "green-text-gradient",
      },
      {
        name: "Amazon S3",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/Typof-app/refs/heads/main/typof.png",
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.typof&pcampaignid=web_share",
  },
  {
    name: "Vdriv - Booking Professional Drivers",
    description:
      "Developed Vdriv, an app that allows users to book professional drivers for local, outstation, one-way, or round trips. It features flexible scheduling, secure payments, and real-time notifications to ensure a smooth and reliable travel experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "RazorPay",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/Priyanshu-Bej/VDriv-Book-Drivers-online/refs/heads/main/vdriv.png",
    source_code_link:
      "https://github.com/Priyanshu-Bej/VDriv-Book-Drivers-online",
  },
  {
    name: "ATOMS - Academic & School Management System",
    description:
      "Developed ATOMS, an innovative app designed to connect students, parents, and educators, enhancing academic tracking and management through interactive tools and detailed performance analytics.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Provider ",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      // {
      //   name: "kotlin",
      //   color: "orange-text-gradient",
      // },
    ],
    image:
      "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System/blob/main/Atoms.png?raw=true",
    source_code_link:
      "https://github.com/Priyanshu-Bej/ATOMS-Academic-School-Management-System.git",
  },
];

export {
  services,
  technologies,
  experiences,
  educational,
  certifications,
  projects,
};
