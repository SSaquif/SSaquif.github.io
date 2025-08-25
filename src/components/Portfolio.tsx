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
      <Card>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in
      </Card>
      <Card />
      <Card />
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  gap: "1rem",
});

export default Portfolio;
