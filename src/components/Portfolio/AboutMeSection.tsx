import { Star } from "lucide-react";
import type { AboutMe } from "../../data/AboutMe";
import { styled } from "../../stitches.config";

interface AboutMeCardProps {
  data: AboutMe;
}

export function AboutMeSection({ data }: AboutMeCardProps) {
  return (
    <Container>
      <p>{data.description}</p>
      <ul>
        {data.qualificationSummary.map((item, index) => (
          //@TODO: Figure out why only inline style works here with <li/> and contents
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
            <Star size={20} />
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  // border: "1px solid $border",
  maxWidth: "600px", // Match InfoCard width
  margin: "0 auto",
  textAlign: "center",
  gap: "10px",
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "justify",
    width: "100%",
  },
  li: {
    marginBottom: "0.5em",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    lineHeight: "1.5",
    minHeight: "24px",
  },
});
