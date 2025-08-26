import Emoji from "a11y-react-emoji";
import { Star, Sparkles } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import type { AboutMe } from "../../data/AboutMe";
import { styled } from "../../stitches.config";

interface AboutMeCardProps {
  data: AboutMe;
}

export function AboutMeSection({ data }: AboutMeCardProps) {
  return (
    <Container>
      <GeneralInfoContainer>
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <SocialsContainer>
          {data.socials &&
            Object.entries(data.socials).map(([key, social]) => (
              <li key={key}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
        </SocialsContainer>
        <ContactsContainer>
          <ContactHeaderColumn>
            {/* <p>Emails</p> */}
            <Mail />
          </ContactHeaderColumn>
          <ContactItemColumn>
            {data.contacts.map((contact) =>
              contact.emails.map((email) => <li key={email}>{email}</li>)
            )}
          </ContactItemColumn>
          <ContactHeaderColumn>
            {/* <p>Phone</p> */}
            <Phone />
          </ContactHeaderColumn>
          <ContactItemColumn>
            {data.contacts.map((contact) =>
              contact.phone.map((phone) => (
                <li
                  key={phone.number}
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  <Emoji
                    symbol="🇨🇦"
                    label="canada-flag"
                    style={{
                      verticalAlign: "-5%",
                    }}
                  />{" "}
                  {phone.number}
                </li>
              ))
            )}
          </ContactItemColumn>
        </ContactsContainer>
      </GeneralInfoContainer>
      <DescriptionContainer>
        <p>{data.description}</p>
        {/* </Card> */}
        {/* <Card> */}
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
      </DescriptionContainer>
    </Container>
  );
}

const Container = styled("div", {
  // border: "1px solid red",
  color: "$primaryText",
});

const GeneralInfoContainer = styled("section", {
  // border: "1px solid $border",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "0.5rem",
  // border: "1px solid hotpink",
});

// 2 rows and 2 columns grid
const ContactsContainer = styled("div", {
  display: "grid",
  placeSelf: "center",
  // border: "1px solid red",
  gridTemplateColumns: "15% 85%",
  gridTemplateRows: "1fr 1fr",
  minWidth: "270px",
  "@mobileAndDown": {
    width: "95%",
  },
});

const ContactHeaderColumn = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "0.25rem",
  // borderRight: "2px solid $border",
  alignItems: "center",
  justifyContent: "center",
  // border: "1px solid $border",

  "@mobileAndDown": {
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    gap: "0.1rem",
  },
});

const ContactItemColumn = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // border: "1px solid $border",

  "@mobileAndDown": {
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start",
    padding: "0 0.5rem",
    justifyContent: "center",
    // gap: "2px",
  },
});

const SocialsContainer = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  padding: 0,
});

const DescriptionContainer = styled("div", {
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
