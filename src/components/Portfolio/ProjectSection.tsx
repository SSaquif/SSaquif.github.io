import type { Project } from "../../data/Projects";
import { InfoCard } from "../Card/InfoCard";
import { styled } from "../../stitches.config";

interface ProjectSectionProps {
  data: Project[];
}
export function ProjectSection({ data }: ProjectSectionProps) {
  return (
    <Container>
      {data.map((project, index) => (
        <InfoCard key={index}>
          <InfoContainer>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
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
});
