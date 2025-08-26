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
    startDate: "2022-02",
    endDate: "2023-10",
    companyWebsite: "https://vention.io",
    jobDescription:
      "Developed and maintained internal systems including Warehouse Management and Accounting solutions, collaborating cross-functionally to deliver scalable applications.",
    responsibilities: [
      "Built full-stack applications using React, React Native, Node.js, PostgreSQL, and AWS.",
      "Collaborated with the e-commerce team to integrate internal systems with a Ruby on Rails platform.",
      "Designed scalable mobile components to optimize warehouse floor operations.",
      "Helped migrate a large JavaScript codebase to TypeScript.",
      "Wrote and optimized SQL queries to improve performance of complex internal processes.",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Ruby on Rails",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    title: "Instructor",
    company: "Concordia Bootcamps",
    logo: "/logos/concordia-bootcamps-logo.png",
    location: "Montreal, QC",
    startDate: "2019-12",
    endDate: "2022-02",
    companyWebsite: "https://concordiabootcamps.ca",
    jobDescription:
      "Taught full-stack development courses and mentored students through projects, contributing to the development of online learning tools.",
    responsibilities: [
      "Taught courses covering JavaScript, Node.js, React, Redux, and MongoDB.",
      "Designed and delivered interactive lessons for remote learners.",
      "Provided individualized mentorship and guidance for real-world projects.",
      "Contributed to building and testing online learning tools using React, Node.js, and Firebase.",
    ],
    technologies: [
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
