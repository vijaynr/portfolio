// Project data
const projects = [
  {
    title: "Mac Kernel Extension",
    description: "Developed a kernel extension for macOS to detect and stop unnecessary downloads of archived files on network mounts.",
    category: ["WORK", "OPENTEXT"],
    link: "https://www.microfocus.com/documentation/open-enterprise-server/2023/cis_admin_lx/t4b3w08q8icu.html",
    iconColor: "var(--secondary-color)",
  },
  {
    title: "Multi Factor Authentication",
    description: "The implementation of Multi-Factor Authentication uses the Backend for Frontend Proxy pattern and OAuth2. This approach provides a seamless experience for both confidential and public clients.",
    category: ["WORK", "OPENTEXT"],
    techStack: ["Java", "Spring"],
    iconColor: "var(--secondary-color)",
  },
  {
    title: "File Versioning",
    description: "Flat file based versioning system that enables users to store, manage, and access various file versions, with the added capability of removing surplus and expired file versions based on configured policies.",
    category: ["WORK", "OPENTEXT"],
    techStack: ["Java", "Spring", "Angular"],
    iconColor: "var(--secondary-color)",
  },
  {
    title: "Thumbnail Previews",
    description: "Generating and displaying thumbnails for documents, videos and CAD files in Filr.",
    category: ["WORK", "OPENTEXT"],
    techStack: ["Java", "AWT", "FFMPEG", "Angular"],
    iconColor: "var(--secondary-color)",
  },
];

// Skills data
const skills = [
  { name: "Java", level: 90 },
  { name: "Spring Framework", level: 85 },
  { name: "Angular", level: 85 },
  { name: "J2EE", level: 75 },
  { name: "Web Technologies", level: 75 },
];

// Stats data
const stats = [
  { value: "9+", label: "YEARS EXPERIENCE" },
  { value: "10+", label: "FEATURES DEVELOPED" },
];

// Education data (Alma Mater)
const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    school: "PSG College of Technology",
    location: "Coimbatore",
    period: "2013 - 2017",
    description:
      "Graduated with honors. Focused on learning micro processors and embedded programming.",
  },
];

// Experiences data
const experiences = [
  {
    title: "Lead Software Engineer",
    company: "OpenText",
    location: "Bengaluru",
    period: "Jan 2026 - Present",
    description:
      "Implementing AI-driven workflows and optimizations for the development process. Designing frameworks that integrate AI agents into products with defined guardrails and auditing, while promoting AI adoption through tailored, thoroughly evaluated coding-agent skills.",
  },
  {
    title: "Senior Software Engineer",
    company: "OpenText",
    location: "Bengaluru",
    period: "Mar 2022 - Jan 2026",
    description:
      "Defined and developed feature backlogs as Product Owner. Led design and delivery of key features across two enterprise products, Filr and Vibe, as Technical Lead. Performed security audits and resolved vulnerabilities in accordance with the Service Level Agreements. Optimized the build process of Filr, reducing the build time by 70%. Established coding standards within the team, enhancing code quality. Refactored and modernized the legacy codebases with updated dependencies and best practices, improving non-functional performance by 50%. Managed 12 developers through a legacy admin-console migration from GWT and Portlets to Angular and TypeScript.",
  },
  {
    title: "Software Engineer",
    company: "Micro Focus",
    location: "Bengaluru",
    period: "Mar 2020 - Feb 2022",
    description:
      "Designed and developed various features, including file versioning and thumbnail generation, based on the most requested features from customers. Contributed to migrating the legacy frontend from GWT to Angular by working on REST APIs and UI components in Angular.",
  },
  {
    title: "Associate Software Engineer",
    company: "Micro Focus",
    location: "Bengaluru",
    period: "July 2017 - Feb 2022",
    description:
      "Worked with customers to address critical issues and enhancements, attaining a 100% closure rate on incidents. Packaged the existing Linux Desktop Client of Filr for SUSE and Ubuntu, which was the most requested feature by the Filr community forum. Contributed to the development of the macOS and Windows Client for Cloud Integrated Storage, a component of Open Enterprise Server, which played a crucial role in securing its first customer.",
  },
  {
    title: "Internship",
    company: "Micro Focus",
    location: "Bengaluru",
    period: "Jan 2017 - Jun 2017",
    description:
      "Created proofs of concept for a product called Filr, an Enterprise File Sync and Share solution. Developed the Linux client for Filr using Filesystem in Userspace (FUSE) technology with Python. Designed and developed a feedback-based recommendation system for Filr.",
  },
];
