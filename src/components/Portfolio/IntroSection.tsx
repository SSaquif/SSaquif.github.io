import Emoji from "a11y-react-emoji";
import { Phone, Mail } from "lucide-react";
import type { AboutMe } from "../../data/AboutMe";
import { styled } from "../../stitches.config";
import { CopyToClipboard } from "../CopyToClipboard";
import { Tooltip } from "../Tooltip";

interface IntroProps {
  data: AboutMe;
}

export function IntroSection({ data }: IntroProps) {
  return (
    <Container>
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <SocialsContainer>
        {data.socials &&
          Object.entries(data.socials).map(([key, social]) => (
            <li key={key}>
              <Tooltip content={social.url}>
                <SocialsLink
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </SocialsLink>
              </Tooltip>
            </li>
          ))}
      </SocialsContainer>
      <ContactsContainer>
        <ContactHeaderColumn>
          <Tooltip content="Email Addresses">
            <Mail />
          </Tooltip>
        </ContactHeaderColumn>
        <ContactItemColumn>
          {data.contacts.map((contact) =>
            contact.emails.map((email) => {
              return (
                <li key={email}>
                  <Tooltip content="Click to copy to clipboard">
                    <CopyToClipboard value={email}>{email}</CopyToClipboard>
                  </Tooltip>
                </li>
              );
            })
          )}
        </ContactItemColumn>
        <ContactHeaderColumn>
          <Tooltip content="Phone Numbers">
            <Phone />
          </Tooltip>
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
                <Tooltip content="Click to copy to clipboard">
                  <CopyToClipboard value={phone.number}>
                    {phone.number}
                  </CopyToClipboard>
                </Tooltip>
              </li>
            ))
          )}
        </ContactItemColumn>
      </ContactsContainer>
    </Container>
  );
}

const Container = styled("section", {
  // border: "1px solid $border",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "0.5rem",
  // border: "1px solid hotpink",
});

const SocialsContainer = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  padding: 0,
});

const SocialsLink = styled("a", {
  color: "$accent",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
  "&:visited": {
    color: "$accent",
  },
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
