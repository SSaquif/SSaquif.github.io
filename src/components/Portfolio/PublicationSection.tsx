import type { Publication } from "../../data/Publication";
import { InfoCard } from "../Card/InfoCard";
import { styled } from "../../stitches.config";
import { Card } from "../Card/Card";
import { Chip } from "../Chip";

interface PublicationSectionProps {
  data: Publication[];
}

export function PublicationSection({ data }: PublicationSectionProps) {
  return (
    <Container>
      {data.map((pub, index) => (
        <InfoCard key={index} withLogo={false}>
          <CardContent>
            <PublicationInfo>
              <h2>{pub.title}</h2>
              {/* <h3>{pub.authors.join(", ")}</h3> */}
              <p>
                {/* <em>{pub.?journal}</em>,  */}
                {pub.year} {pub.conference}
              </p>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </PublicationInfo>
            <PublicationDetails>
              {/* <TechContainer> */}
              {/* <strong>Tech Stack</strong> */}
              <TechChipsContainer>
                {pub.technologies.map((tech) => {
                  return <Chip key={tech}>{tech}</Chip>;
                })}
              </TechChipsContainer>
              {/* </TechContainer> */}
              <DescriptionContainer>{pub.description}</DescriptionContainer>
              <AbstractContainer>
                <strong>Abstract</strong>
                <p>{pub?.abstract}</p>
              </AbstractContainer>
            </PublicationDetails>
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

// TODO: Figure out a better way to handle max height
// so that sizes are consistent across different cards
// right now they mostly are
const CardContent = styled("div", {
  width: "100%",
  maxHeight: "340px",
  overflowY: "auto", // Enable vertical scrolling
  paddingRight: "10px", // Optional: for scrollbar space
  "@mobileAndDown": {
    maxHeight: "400px",
  },
});

const PublicationInfo = styled("div", {
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

const PublicationDetails = styled("div", {
  paddingTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const TechContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "15% 80%",
  padding: "0 8px",
  "@mobileAndDown": {
    gap: "6px",
  },
});

const TechChipsContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  alignItems: "center",
  justifyContent: "center",
});

const DescriptionContainer = styled("div", {
  textAlign: "center",
  padding: "10px 0",
  "@mobileAndDown": {
    padding: "0",
  },
});

const AbstractContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "15% 80%",
  padding: "0 8px",
  overflowWrap: "break-word",
  "@mobileAndDown": {
    gap: "6px",
  },
});
