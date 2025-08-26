import { Globe } from "lucide-react";
import type { ReactElement } from "react";
import { GithubIcon, LinkedInIcon } from "../components/BrandIcons";

export type Contact = {
  emails: string[];
  phone: { country: string; number: string }[];
};

export type Social = {
  url: string;
  icon: ReactElement;
};

export type AboutMe = {
  name: string;
  title: string;
  contacts: Contact[];
  socials: {
    [key: string]: Social;
  };
  description: string;
  qualificationSummary: string[];
};

export const ABOUT_ME: AboutMe = {
  name: "Sadnan Saquif",
  title: "Full Stack Software Developer",
  contacts: [
    {
      emails: ["sadnan.saquif@mail.mcgill.ca", "ssaquif@gmail.com"],
      phone: [{ country: "CA", number: "(514) 268-7441" }],
    },
  ],
  socials: {
    github: {
      url: "https://github.com/SSaquif",
      icon: <GithubIcon />,
    },
    linkedIn: {
      url: "https://www.linkedin.com/in/ssaquif",
      icon: <LinkedInIcon />,
    },
    website: {
      url: "https://ssaquif.github.io",
      icon: <Globe />,
    },
  },
  description:
    "Full-Stack Developer with over 4 years of experience building and maintaining enterprise applications and internal tools. Skilled in modern web and mobile frameworks with a strong foundation in software engineering from McGill University. Experienced in designing scalable solutions, optimizing system performance, and contributing to research at an international level. Passionate about teaching, mentorship, and creating efficient, user-friendly software products. Fluent in English and Bengali, with additional knowledge of French, Hindi, and Urdu. ",

  qualificationSummary: [
    "4+ years of full-stack development experience focusing on enterprise and internal systems.",
    "Bachelor’s degree in Software Engineering from McGill University.",
    "Proficient in JavaScript/TypeScript, React, Node.js, PostgreSQL, AWS, Git, Linux, and Docker.",
    "Skilled at building scalable web and mobile applications, including warehouse management and accounting solutions.",
    "Experienced in transitioning large codebases from JavaScript to TypeScript.",
    "Published contributor at the Mining Software Repositories (MSR) Conference 2018.",
    "Adaptable across different programming languages and frameworks.",
    "Strong ability to work in fast-paced, high-intensity environments while meeting evolving stakeholder needs.",
    "Multilingual: fluent in English and Bengali; conversational in Hindi, Urdu, and currently studying French.",
    "Permanent Resident of Canada.",
  ],
};
