export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Obsidian Plugin: Chatty",
    description:
      "An Obsidian plugin that integrates ChatGPT to assist with note-taking and idea generation within the Obsidian app.",
    technologies: ["TypeScript", "Obsidian API", "ChatGPT API"],
    link: "",
  },
  {
    name: "URL Shortener",
    description:
      "A simple URL shortening service that allows users to create and manage short links.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    link: "",
  },
  {
    name: "Generative Art Gallery",
    description:
      "A web application that showcases generative art pieces created using algorithms.",
    technologies: ["JavaScript", "Canvas API", "React"],
    link: "",
  },
];
