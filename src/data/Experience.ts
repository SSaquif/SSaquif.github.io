export type Positions = {
  title: string;
  company: string;
  logo: string;
  location: string;
  startDate: string;
  endDate: string | null;
  companyWebsite: string;
  jobDescription: string;
  responsibilities: string[];
  technologies: string[];
};

export const PROFESSIONAL_EXPERIENCES: Positions[] = [
  {
    title: "Software Developer",
    company: "Vention",
    logo: "/logos/vention-logo.jpg",
    location: "Montreal, QC",
    startDate: "Feb 2022",
    endDate: "Oct 2023",
    companyWebsite: "https://vention.io",
    jobDescription:
      "Vention is a startup with the mission to democratize industrial automation by streamling the process of designing, building and shipping your industrial equipment and machines all under 1 platform. At vention I was part of the operations team. Where I helped develop and maintain internal systems including Warehouse Management and Accounting solutions, collaborating cross-functionally to deliver scalable applications.",
    responsibilities: [
      "Built full-stack applications using React, React Native, Node.js, PostgreSQL, and AWS.",
      "Designed scalable and reusable desktop and mobile components to optimize warehouse floor operations.",
      "Built and maintained RESTful APIs and backend services to support internal tools.",
      "Helped migrate a large JavaScript codebase to TypeScript.",
      "Wrote and optimized SQL queries to improve performance of complex internal processes.",
      "Code reviewed and supported team members to ensure high code quality and best practices.",
      "Collaborated with the e-commerce team to integrate internal systems with the team's Ruby on Rails platform.",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "SQL",
      "AWS",
      "S3",
      "Git",
      "Docker",
      "Ruby on Rails",
    ],
  },
  {
    title: "Web Development Instructor",
    company: "Concordia Bootcamps",
    logo: "/logos/concordia-bootcamps-logo.png",
    location: "Montreal, QC",
    startDate: "Dec 2019",
    endDate: "Feb 2022",
    companyWebsite: "https://concordiabootcamps.ca",
    jobDescription:
      "Concordia Bootcamps is part of Concordia University's School of Continuing Education. There I taught full-stack development courses and mentored students through projects, contributing to the development of online learning tools.",
    responsibilities: [
      "Taught courses covering JavaScript, HTML, CSS, Node.js, React, Redux, and MongoDB.",
      "Designed and delivered interactive lessons for remote learners.",
      "Provided individualized mentorship and guidance for workshops and projects.",
      "Contributed to building and testing online learning tools using React, Node.js, and Firebase.",
      "Corrected, code reviewed and provided feedback on student assignments and projects.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "Redux",
      "MongoDB",
      "Firebase",
      "Google Cloud",
    ],
  },
];
