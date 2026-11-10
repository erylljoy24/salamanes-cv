export const profile = {
  name: "Eryll Joy P. Salamanes",
  shortName: "Eryll Salamanes",
  role: "Mobile / Full-Stack Developer",
  location: "Davao City, Philippines",
  email: "eryll.salamanes27@gmail.com",
  phones: ["0928 462 9589", "0966 307 0849"],
  cvPath: "/Salamanes_Eryll_CV.pdf",
  cvFileName: "Salamanes_Eryll_CV.pdf",
  summary: [
    "I started out building Android apps back in 2016 and never really stopped. These days I split my time between Flutter on the mobile side and Laravel on the backend, with React and Next.js filling in the web bits.",
    "I care about code the next person can actually read. I've worked solo on freelance projects and inside bigger teams at agencies and startups, and I'm comfortable in either.",
  ],
};

export type Project = {
  name: string;
  client: string;
  year: string;
  kind: "mobile" | "web" | "api";
  blurb: string;
  stack: string[];
  logo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Woowbe",
    client: "Webee Labs",
    logo: "/logos/woowbe.png",
    link: "https://play.google.com/store/apps/details?id=com.woowbe.app&gl=ES",
    year: "2025–now",
    kind: "mobile",
    blurb: "Cross-platform mobile app built with Flutter.", // TODO: what the app does and what you built
    stack: ["Flutter"],
  },
  {
    name: "RedEye / Antara",
    client: "AirAsia / IndraPH",
    logo: "/logos/redeye.png",
    link: "https://play.google.com/store/apps/details?id=com.airasia.redeyeplus",
    year: "2022–24",
    kind: "mobile",
    blurb: "Internal incident-reporting app used by AirAsia cabin crew. I worked on UI improvements, new features, and the Laravel APIs behind it.",
    stack: ["Flutter", "Laravel"],
  },
  {
    name: "SMOC Rider & ticketing",
    client: "Codev Solutions",
    logo: "/logos/smoc-driver.png",
    year: "2023–25",
    kind: "mobile",
    blurb: "Real-time driver locations over Firebase, plus in-app ticket purchases paid through PayMongo and a Laravel API.",
    stack: ["Flutter", "Firebase", "PayMongo"],
  },
  {
    name: "SMOC Driver",
    client: "Codev Solutions Inc.",
    logo: "/logos/smoc-driver.png",
    link: "https://apps.apple.com/us/app/smoc2-driver/id6743734281",
    year: "2023–25", // TODO: narrow down if SMOC only covered part of your time at Codev
    kind: "mobile",
    blurb: "Cross-platform mobile app built with Flutter.", // TODO: what the app does and what you built
    stack: ["Flutter", "Firebase"],
  },
  {
    name: "FinaleHealth App",
    client: "FinaleHealth",
    logo: "/logos/finalehealth.png",
    link: "https://play.google.com/store/apps/details?id=com.finalehealthsolutions.mobile",
    year: "2021–23",
    kind: "mobile",
    blurb: "A healthcare app on the Play Store. I added new Flutter modules and kept it stable release after release.",
    stack: ["Flutter", "REST"],
  },
  {
    name: "HR & payroll",
    client: "Awesome OS",
    year: "2020–21",
    kind: "web",
    blurb: "Recruitment, daily time records and payroll in one system. I co-built it and looked after the backend.",
    stack: ["CodeIgniter", "jQuery"],
  },
  {
    name: "Commission engine",
    client: "Naxum",
    year: "2019–20",
    kind: "api",
    blurb: "Commission calculators and the financial logic underneath them, written from scratch in Laravel.",
    stack: ["Laravel", "Vue.js"],
  },
  {
    name: "Valore Books middleware",
    client: "Rev365",
    year: "2021–22",
    kind: "api",
    blurb: "Glue between several external APIs, so the storefront could pull everything it needed from one place.",
    stack: ["PHP", "CodeIgniter"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: "Full-Stack Web Developer",
    company: "Webee Labs",
    period: "May 2025 – Nov 2026",
    highlights: [
      "Built and maintained Laravel REST APIs handling authentication, role-based access, and complex data workflows for web and mobile clients.",
      "Designed backend services that connect to LLM providers (OpenAI, Claude, Gemini), managing API security, prompt handling, and rate limiting.",
      "Delivered AI features such as chat assistants, content generation, and smart search, streaming real-time AI responses to React/Next.js and Flutter clients.",
      "Developed web apps with React.js and Next.js and cross-platform mobile apps with Flutter and React Native, building reusable UI components shared across products.",
    ],
    tags: ["Laravel", "React.js", "Next.js", "Flutter", "React Native", "LLM APIs"],
  },
  {
    role: "Flutter & Backend Developer",
    company: "Codev Solutions Inc",
    period: "Jun 2023 – Aug 2025",
    highlights: [
      "Developed and maintained cross-platform mobile applications using Flutter for iOS and Android.",
      "Implemented Firebase integration for real-time driver location tracking, enhancing operational efficiency.",
      "Built and integrated a ticketing & payment system using Laravel-based REST APIs with PayMongo SDK for secure in-app transactions.",
      "Designed and optimized RESTful APIs with PHP Laravel for authentication, ticketing, and workflows, using efficient database schemas and Eloquent ORM.",
    ],
    tags: ["Flutter", "Firebase", "Laravel", "PayMongo", "Eloquent"],
  },
  {
    role: "Mobile & Web Developer (Freelance)",
    company: "AirAsia / IndraPH",
    period: "Aug 2022 – Sep 2024",
    highlights: [
      "Maintained and enhanced RedEye, an internal incident-reporting platform used by AirAsia cabin crew.",
      "Implemented UI improvements and new features using Flutter for streamlined workflows.",
      "Designed, developed, and integrated Laravel-based APIs for authentication, data processing, and secure communication.",
    ],
    tags: ["Flutter", "Laravel"],
  },
  {
    role: "Flutter Developer",
    company: "TelosHealth / FinaleHealth",
    period: "Jan 2021 – Feb 2023",
    highlights: [
      "Maintained and enhanced a healthcare app on the Google Play Store, ensuring long-term stability.",
      "Added new Flutter modules to improve patient experience and performance.",
      "Integrated REST APIs with the backend team for reliable data flow.",
    ],
    tags: ["Flutter", "REST APIs"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Rev365",
    period: "Apr 2021 – Jun 2022",
    highlights: [
      "Built middleware systems for Valore Books, connecting multiple external APIs.",
      "Developed scalable back-end services using PHP CodeIgniter.",
      "Enhanced frontend with API-driven features for smoother UX.",
    ],
    tags: ["CodeIgniter", "PHP", "API Integration"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Awesome OS",
    period: "Oct 2020 – Aug 2021",
    highlights: [
      "Co-developed an HR and payroll management system covering recruitment, DTR, and payroll.",
      "Maintained backend with PHP CodeIgniter.",
      "Enhanced UI with jQuery for dynamic features.",
    ],
    tags: ["CodeIgniter", "jQuery"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Naxum Online Marketing Service, LLC",
    period: "Aug 2019 – Sep 2020",
    highlights: [
      "Built commission calculator systems and backend logic from scratch.",
      "Designed financial computation systems using PHP Laravel.",
      "Delivered multiple frontend projects with Vue.js, React.js, and jQuery.",
    ],
    tags: ["Laravel", "Vue.js", "React", "jQuery"],
  },
  {
    role: "Mobile App Developer (Android)",
    company: "IdeaHub Solutions Inc",
    period: "Mar 2019 – Sep 2019",
    highlights: [
      "Maintained existing apps, including social media and calculator applications.",
      "Built most apps from scratch, stepping in at an intermediate level thanks to prior Android experience.",
    ],
    tags: ["Android"],
  },
  {
    role: "Mobile App Developer (Android)",
    company: "Futuristech Studios Inc",
    period: "Jun 2016 – Jan 2019",
    highlights: [
      "Developed mobile ordering system applications from scratch, including custom UI designs and interactive animations for enhanced user experience.",
      "Created business-focused apps for product advertisement and merchant promotions, helping small businesses expand their digital presence.",
      "Maintained and updated Android applications deployed on the Google Play Store, ensuring long-term stability and compatibility with OS updates.",
      "Applied strong debugging, optimization, and testing practices to deliver high-quality, performance-driven applications.",
    ],
    tags: ["Android", "Google Play"],
  },
];

export const skillGroups = [
  { title: "Mobile", items: ["Flutter", "Android", "React Native", "Firebase"] },
  { title: "Backend", items: ["Laravel", "CodeIgniter", "PHP", "REST APIs", "Eloquent ORM"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Vue.js", "jQuery", "HTML", "CSS / SCSS", "JavaScript"] },
  { title: "Integrations", items: ["PayMongo SDK", "Firebase Realtime", "Third-party APIs"] },
];

export const education = [
  {
    school: "University of the Immaculate Conception",
    detail: "Bachelor of Science in Information Technology, Major in Networks",
    period: "2012 – 2016",
  },
  {
    school: "Saint Theresa College of Tandag Inc",
    detail: "Secondary",
    period: "2008 – 2012",
  },
];

export const languages = ["English (Fluent)", "Tagalog"];
