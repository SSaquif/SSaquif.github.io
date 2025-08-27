export type Project = {
  name: string;
  link?: string;
  repo?: string;
  image?: string;
  technologies: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Obsidian Plugin: Chatty",
    repo: "https://github.com/SSaquif/obsidian-chatty",
    technologies: ["TypeScript", "Obsidian API", "Speech Synthesis API", "CSS"],
    description:
      "Obsidian has become my go-to tool for note-taking and knowledge management. I use it to take notes on my French learning journey. I realised that it would be great to have the ability to listen to my notes to help improve my French pronunciation. I couldn't find any existing plugins that did this without using external APIs, which often come with privacy concerns and costs. So, I built Chatty, an Obsidian plugin that leverages your systems built-in text-to-speech capabilities & the browser's Speech Synthesis API to read your notes aloud. It comes with a nice UI to make language selection easy, and uses hotkeys to make the experience seamless.",
  },
  {
    name: "URL Shortener",
    repo: "https://github.com/SSaquif/url-shortener",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Monk",
      "HTML",
      "CSS",
      "Heroku",
    ],
    description:
      "A few years ago URL shorteners seemed to be the rage, they were being used everywhere and I was fascinated by how it works. The idea that you could securely get to any website by converting it into a third party link seemed ludicrous. So I decided to learn how to build my own. I built a working prtotype using NodeJs, Express, MongoDB and Monk and a barebones UI. To test it out I deployed it to Heroku's free tier. Unfortunately I decided to not to put it in real production because I quickly found out buying a 2 to 3 letter domain name is not cheap.",
  },
  {
    name: "Generative Art Gallery",
    link: "https://ssaquif.github.io/generative-art-gallery/",
    repo: "https://github.com/SSaquif/generative-art-gallery",
    technologies: ["JavaScript", "Canvas API", "React"],
    description:
      "I became really interested in making art using Math after taking a few museum exhibition tours in Montreal. I learned about the artist Sol LeWitt and came across the github repos of Matt DesLauriers. So I decided to set up a place where I could make and showcase my own creations.",
  },
];
