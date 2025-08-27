import { CheckCheck, ExternalLink } from "lucide-react";
import type { Positions } from "../../data/Experience";
import { styled } from "../../stitches.config";
import { InfoCard } from "../Card/InfoCard";
import { Chip } from "../Chip";
import { Tooltip } from "../Tooltip";

interface ExperienceSectionProps {
  data: Positions[];
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <Container>
      {data.map((position, index) => (
        <InfoCard
          withLogo={true}
          logo={position.logo}
          logoAlt={`${position.company} logo`}
          key={index}
        >
          <CardContent>
            <PositionInfo>
              <h2>{position.title}</h2>
              <Tooltip content={position.companyWebsite}>
                <SiteLink href={position.companyWebsite} target="_blank">
                  <CompanyTitle>
                    <h3>{position.company}</h3>
                    <ExternalLink />
                  </CompanyTitle>
                </SiteLink>
              </Tooltip>
              <DesktopDateAndLocation>
                {position.startDate} - {position.endDate} | {position.location}
              </DesktopDateAndLocation>
              <MobileDateAndLocation>
                {position.startDate} - {position.endDate}
                <br />
                {position.location}
              </MobileDateAndLocation>
            </PositionInfo>
            <PositionDetails>
              <TechChipsContainer>
                {position.technologies.map((tech) => {
                  return <Chip key={tech}>{tech}</Chip>;
                })}
              </TechChipsContainer>
              <DescriptionContainer>
                {position.jobDescription}
              </DescriptionContainer>
              <ResponsibilitiesContainer>
                {position.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      lineHeight: "1.25",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <CheckCheck size={20} />
                    {item}
                  </li>
                ))}
              </ResponsibilitiesContainer>
            </PositionDetails>
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

const PositionInfo = styled("div", {
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

const CompanyTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
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

const PositionDetails = styled("div", {
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
});

const ResponsibilitiesContainer = styled("ul", {
  listStyle: "none",
  padding: "0 8px",
  "@mobileAndDown": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    // border: "solid hotpink",
    padding: "0 8px",
  },
});
