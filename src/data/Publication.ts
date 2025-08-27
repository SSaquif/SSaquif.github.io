export type Publication = {
  title: string;
  // authors: string[];
  year: number;
  link?: string;
  conference?: string;
  journal?: string;
  abstract?: string;
  technologies: string[];
  description: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Revisiting 'Programmers' Build Errors' in the Visual Studio Context",
    year: 2018,
    conference: "Mining Software Repositories (MSR) Conference",
    link: "https://rebels.cs.uwaterloo.ca/shortconfpaper/2018/05/27/revisiting-programmers-build-errors-in-the-visual-studio-context.html",
    abstract:
      "Build systems translate sources into deliverables. Developers execute builds on a regular basis in order to integrate their personal code changes into testable deliverables. Prior studies have evaluated the rate at which builds in large organizations fail. A recent study at Google has analyzed (among other things) the rate at which builds in developer workspaces fail. In this paper, we replicate the Google study in the Visual Studio context of the MSR challenge. We extract and analyze 13,300 build events, observing that builds are failing 67%–76% less frequently and are fixed 46%–78% faster in our study context. Our results suggest that build failure rates are highly sensitive to contextual factors. Given the large number of factors by which our study contexts differ (e.g., system size, team size, IDE tooling, programming languages), it is not possible to trace the root cause for the large differences in our results. Additional data is needed to arrive at more complete conclusions.",
    technologies: ["Java", "R", "Python", "LaTeX"],
    description:
      "This paper was a part of my undergraduate capstone project at McGill University. Under the guidance of Prof. Shane McIntosh & Dr Keheliya Gallaba we analyzed 13,300 build events from Microsoft Visual Studio to understand the frequency and causes of build failures in developer workspaces. I was in charge of filtering and cleaning the initial dataset with over 5 million entries using their provided Java framework. Then, we used R and Python for statistical analysis and data visualization. Finally, I contributed to writing the paper using LaTeX.",
  },
];
