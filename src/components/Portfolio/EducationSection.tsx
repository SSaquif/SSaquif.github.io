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
          withLogo={true}
          key={index}
          logo={edu.logo}
          logoAlt={`${edu.institution} logo`}
        >
          <CardContent>
            <EducationInfo>
              <h2>{edu.degree}</h2>
              <h3>{edu.institution}</h3>
              <DesktopDateAndLocation>
                {edu.startDate} - {edu.endDate} | {edu.location}
              </DesktopDateAndLocation>
              <MobileDateAndLocation>
                {edu.startDate} - {edu.endDate}
                <br />
                {edu.location}
              </MobileDateAndLocation>
            </EducationInfo>
            <DescriptionContainer>
              {edu.description && <p>{edu.description}</p>}
            </DescriptionContainer>
          </CardContent>
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

const CardContent = styled("div", {
  width: "100%",
  maxHeight: "340px",
  overflowY: "auto", // Enable vertical scrolling
  paddingRight: "10px", // Optional: for scrollbar space
  "@mobileAndDown": {
    maxHeight: "400px",
  },
});

const EducationInfo = styled("div", {
  textAlign: "center",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "8px",
  borderBottom: "0.2rem solid $border",

  h2: {
    margin: 0,
    fontSize: "1.5rem",
  },

  h3: {
    margin: 0,
    fontSize: "1.2rem",
    color: "$secondaryText",
  },

  "@mobileAndDown": {
    paddingTop: "0",
  },
});

const DesktopDateAndLocation = styled("p", {
  "@mobileAndDown": {
    display: "none",
  },
});

const MobileDateAndLocation = styled("div", {
  display: "none",
  "@mobileAndDown": {
    display: "block",
  },
});

const DescriptionContainer = styled("div", {
  textAlign: "center",
  paddingTop: "4px",
});
