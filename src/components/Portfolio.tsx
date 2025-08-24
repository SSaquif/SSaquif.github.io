import { useOutletContext } from "react-router-dom";
import { styled } from "../stitches.config";
import { Card } from "./Card";
import { NavItem } from "./Navitem";

function Portfolio() {
  const { slot } = useOutletContext<{
    slot: "main" | "aside" | "mobileDrawer";
  }>();
  console.log("Current slot:", slot);

  return (
    <>
      {slot === "main" && <PortfolioContent />}
      {slot === "aside" && <AsideContent />}
      {slot === "mobileDrawer" && <MobileDrawerContent />}
    </>
  );
}

function PortfolioContent() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

function AsideContent() {
  return (
    <div>
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>Experience</NavItem>
      <NavItem>Education</NavItem>
      <NavItem>Publication</NavItem>
    </div>
  );
}

function MobileDrawerContent() {
  return (
    <div>
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>Experience</NavItem>
      <NavItem>Education</NavItem>
      <NavItem>Publication</NavItem>
    </div>
  );
}

const Container = styled("div", {
  //   height: "100%",
  //   height: "fit-content",
  flex: 1,
  minHeight: 0,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  padding: "5% 15% 0 15%",
  //   border: "0.4rem solid $border",
  gap: "1rem",
});

export default Portfolio;
