import type { Publication } from "../../data/Publication";
import { InfoCard } from "../Card/InfoCard";
import { styled } from "../../stitches.config";

interface PublicationSectionProps {
  data: Publication[];
}

export function PublicationSection({ data }: PublicationSectionProps) {
  return (
    <Container>
      {data.map((pub, index) => (
        <InfoCard key={index} withLogo={false}>
          <InfoContainer>
            <h2>{pub.title}</h2>
            <h3>{pub.authors.join(", ")}</h3>
            <p>
              {/* <em>{pub.?journal}</em>,  */}
              {pub.year}
            </p>
            <p>{pub?.abstract}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
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
