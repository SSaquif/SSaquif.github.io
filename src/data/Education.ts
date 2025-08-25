type Education = {
  degree: string;
  institution: string;
  location: string;
  startDate: string; // YYYY-MM format
  endDate: string; // YYYY-MM format
  institutionWebsite?: string;
  details?: string[];
};

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "McGill University",
    location: "Montreal, QC",
    startDate: "2013-01",
    endDate: "2019-05",
    institutionWebsite: "https://www.mcgill.ca",
    details: [
      //"Graduated May 2019",
      //"Capstone project led to publication at MSR Conference 2018",
    ],
    //     details: [
    //       "Relevant Coursework: Data Structures and Algorithms, Database Systems, Operating Systems, Software Design, Web Development, Mobile App Development, Cloud Computing",
    //       "Extracurriculars: Member of the McGill Computer Science Club, Volunteer Tutor for first-year programming courses",
    //     ],
  },
];
