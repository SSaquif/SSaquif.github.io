export type Education = {
  degree: string;
  institution: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
};

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "McGill University",
    logo: "/logos/mcgill-university-coa.png",
    location: "Montreal, QC",
    startDate: "Jan 2013",
    endDate: "May 2019",
    description:
      " As a software engineering graduate from McGill University, I gained a solid foundation in computer science principles and software development practices. My coursework covered a wide range of topics including algorithms, data structures, databases, web development, and software design. I learned about concepts such as object-oriented programming, functional programming, aspect-oriented programming, concurrent vs. parallel programming, and software testing concepts such as unit testing, integration testing, system testing, acceptance testing, and test-driven development (TDD). I also had the opportunity to work on several team projects, which helped me develop my collaboration and communication skills. Overall, my education at McGill has prepared me well for a career in software engineering.",
  },
];
