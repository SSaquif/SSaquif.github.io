import type { Education } from "../../data/Education";
import { styled } from "../../stitches.config";
import { InfoCard } from "../Card/InfoCard";

interface EducationSectionProps {
  data: Education[];
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <Container>
      {data.map((edu, index) => (
        <InfoCard
          key={index}
          logo={edu.logo}
          logoAlt={`${edu.institution} logo`}
        >
          <InfoContainer>
            <h2>{edu.degree}</h2>
            <h3>{edu.institution}</h3>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.location}</p>
          </InfoContainer>
        </InfoCard>
      ))}
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  width: "100%",
});

const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",

  h2: {
    margin: 0,
  },
  h3: {
    margin: 0,
    fontWeight: "normal",
    color: "$secondaryText",
  },
  p: {
    margin: 0,
    color: "$secondaryText",
  },
});
