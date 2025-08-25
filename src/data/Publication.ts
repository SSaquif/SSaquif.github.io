type Publication = {
  title: string;
  authors: string[];
  year: number;
  conference?: string;
  url?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Revisiting 'Programmers' Build Errors' in the Visual Studio Context",
    authors: ["Sadnan Saquif", "Team Members (Capstone Project)"],
    year: 2018,
    conference: "Mining Software Repositories (MSR) Conference",
    url: "https://rebels.cs.uwaterloo.ca/shortconfpaper/2018/05/27/revisiting-programmers-build-errors-in-the-visual-studio-context.html",
  },
];
