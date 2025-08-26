import { CheckCheck } from "lucide-react";
import type { Positions } from "../../data/Experience";
import { styled } from "../../stitches.config";
import { InfoCard } from "../Card/InfoCard";

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
              <h3>{position.company}</h3>
              <p>
                {position.startDate} - {position.endDate}
              </p>
            </PositionInfo>
            <PositionDetails>
              <p>{position.jobDescription}</p>
              <ul>
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
              </ul>
              <p>
                <strong>Technologies:</strong>{" "}
                {position.technologies.join(", ")}
              </p>
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

const CardContent = styled("div", {
  width: "100%",
  maxHeight: "350px", // Set your desired height
  overflowY: "auto", // Enable vertical scrolling
  //   paddingRight: "10px", // Optional: for scrollbar space
});

const PositionInfo = styled("div", {
  textAlign: "center",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "0",
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
});

const PositionDetails = styled("div", {});
