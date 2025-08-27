import type { Project } from "../../data/Projects";
import { InfoCard } from "../Card/InfoCard";
import { styled } from "../../stitches.config";
import { Chip } from "../Chip";
import { GithubIcon } from "../Icons/BrandIcons";
import { Tooltip } from "../Tooltip";
import { Globe } from "lucide-react";

interface ProjectSectionProps {
  data: Project[];
}
export function ProjectSection({ data }: ProjectSectionProps) {
  return (
    <Container>
      {data.map((project, index) => (
        <InfoCard key={index} withLogo={false}>
          <CardContent>
            <ProjectInfo>
              <h2>{project.name}</h2>
              <LinkContainer>
                <h3>Links</h3>
                {project.link && (
                  <Tooltip content={`Visit Site: ${project.link}`}>
                    <SiteLink href={project.link} target="_blank">
                      <Globe />
                    </SiteLink>
                  </Tooltip>
                )}
                {project.repo && (
                  <Tooltip content={`View Code: ${project.repo}`}>
                    <SiteLink href={project.repo} target="_blank">
                      <GithubIcon />
                    </SiteLink>
                  </Tooltip>
                )}
              </LinkContainer>
            </ProjectInfo>
            <ProjectDetails>
              <TechChipsContainer>
                {project.technologies.map((tech) => {
                  return <Chip key={tech}>{tech}</Chip>;
                })}
              </TechChipsContainer>
              <DescriptionContainer>{project.description}</DescriptionContainer>
            </ProjectDetails>
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

const ProjectInfo = styled("div", {
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

const LinkContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "4px",
  svg: {
    stroke: "currentColor",
  },
  "@mobileAndDown": {
    gap: "4px",
  },
});

const SiteLink = styled("a", {
  color: "$secondaryText",
  textDecoration: "none",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
  "&:visited": {
    color: "$secondaryText",
  },
  "@mobileAndDown": {
    opacity: 1,
  },
});

const ProjectDetails = styled("div", {
  paddingTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
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
  padding: "8px 0",
  "@mobileAndDown": {
    padding: 0,
  },
});
