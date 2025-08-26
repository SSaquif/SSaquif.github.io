import { useOutletContext } from "react-router-dom";
import { styled } from "../../stitches.config";
import { NavItem } from "../Navitem";
import { ABOUT_ME } from "../../data/AboutMe";
import { AboutMeSection } from "./AboutMeSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { PublicationSection } from "./PublicationSection";
import { ProjectSection } from "./ProjectSection";
import { PROFESSIONAL_EXPERIENCES } from "../../data/Experience";
import { EDUCATION } from "../../data/Education";
import { PUBLICATIONS } from "../../data/Publication";
import { PROJECTS } from "../../data/Projects";

function Portfolio() {
  const { slot } = useOutletContext<{
    slot: "main" | "drawer" | "mobileDrawer";
  }>();

  return (
    <>
      {slot === "main" && <PortfolioContent />}
      {slot === "drawer" && <DrawerContent />}
      {slot === "mobileDrawer" && <MobileDrawerContent />}
    </>
  );
}

function PortfolioContent() {
  return (
    <Container>
      <AboutMeSection data={ABOUT_ME} />
      <h1>Experience</h1>
      <ExperienceSection data={PROFESSIONAL_EXPERIENCES} />
      <h1>Education</h1>
      <EducationSection data={EDUCATION} />
      <h1>Publication</h1>
      <PublicationSection data={PUBLICATIONS} />
      <h1>Projects</h1>
      <ProjectSection data={PROJECTS} />
    </Container>
  );
}

function DrawerContent() {
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
