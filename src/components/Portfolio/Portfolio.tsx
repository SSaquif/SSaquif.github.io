import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Emoji from "a11y-react-emoji";
import { styled } from "../../stitches.config";
import { NavItem } from "../Navitem";
import { ABOUT_ME } from "../../data/AboutMe";
import { IntroSection } from "./IntroSection";
import { AboutMeSection } from "./AboutMeSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { PublicationSection } from "./PublicationSection";
import { ProjectSection } from "./ProjectSection";
import { PROFESSIONAL_EXPERIENCES } from "../../data/Experience";
import { EDUCATION } from "../../data/Education";
import { PUBLICATIONS } from "../../data/Publication";
import { PROJECTS } from "../../data/Projects";
import {
  usePortfolioNavigationRefs,
  type PortfolioNavigationRefs,
  type SectionRef,
} from "../../context/PortfolioNavigationRefsContext";

function Portfolio() {
  const { slot } = useOutletContext<{
    slot: "main" | "drawer" | "mobileDrawer";
  }>();

  const refs = usePortfolioNavigationRefs();

  const scrollToSection = (ref: SectionRef) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {slot === "main" && <PortfolioContent refs={refs} />}
      {slot === "drawer" && (
        <DrawerContent scrollToSection={scrollToSection} refs={refs} />
      )}
      {slot === "mobileDrawer" && (
        <MobileDrawerContent scrollToSection={scrollToSection} refs={refs} />
      )}
    </>
  );
}

function PortfolioContent({ refs }: { refs: PortfolioNavigationRefs }) {
  const {
    introRef,
    aboutRef,
    experienceRef,
    educationRef,
    publicationRef,
    projectsRef,
  } = refs;
  return (
    <Container>
      <div ref={introRef}>
        <IntroSection data={ABOUT_ME} />
      </div>
      <div ref={aboutRef}>
        <h1 style={{ textAlign: "center" }}>
          Hi
          <Emoji
            symbol="👋"
            label="waving-hand"
            style={{
              verticalAlign: "7%",
            }}
          />
        </h1>
        <AboutMeSection data={ABOUT_ME} />
      </div>

      <div ref={experienceRef}>
        <h1 style={{ textAlign: "center" }}>Experience</h1>
        <ExperienceSection data={PROFESSIONAL_EXPERIENCES} />
      </div>

      <div ref={educationRef}>
        <h1 style={{ textAlign: "center" }}>Education</h1>
        <EducationSection data={EDUCATION} />
      </div>

      <div ref={publicationRef}>
        <h1 style={{ textAlign: "center" }}>Publication</h1>
        <PublicationSection data={PUBLICATIONS} />
      </div>

      <div ref={projectsRef}>
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <ProjectSection data={PROJECTS} />
      </div>
    </Container>
  );
}

type DrawerProps = {
  scrollToSection: (ref: SectionRef) => void;
  refs: PortfolioNavigationRefs;
};

function DrawerContent({ scrollToSection, refs }: DrawerProps) {
  const {
    introRef,
    aboutRef,
    experienceRef,
    educationRef,
    publicationRef,
    projectsRef,
  } = refs;

  return (
    <div>
      <NavItem onClick={() => scrollToSection(introRef)}>Contact/Intro</NavItem>
      <NavItem onClick={() => scrollToSection(aboutRef)}>About</NavItem>
      <NavItem onClick={() => scrollToSection(experienceRef)}>
        Experience
      </NavItem>
      <NavItem onClick={() => scrollToSection(educationRef)}>Education</NavItem>
      <NavItem onClick={() => scrollToSection(publicationRef)}>
        Publication
      </NavItem>
      <NavItem onClick={() => scrollToSection(projectsRef)}>Projects</NavItem>
    </div>
  );
}

function MobileDrawerContent({ scrollToSection, refs }: DrawerProps) {
  const {
    introRef,
    aboutRef,
    experienceRef,
    educationRef,
    publicationRef,
    projectsRef,
  } = refs;
  return (
    <div>
      <NavItem onClick={() => scrollToSection(introRef)}>Contact/Intro</NavItem>
      <NavItem onClick={() => scrollToSection(aboutRef)}>About</NavItem>
      <NavItem onClick={() => scrollToSection(experienceRef)}>
        Experience
      </NavItem>
      <NavItem onClick={() => scrollToSection(educationRef)}>Education</NavItem>
      <NavItem onClick={() => scrollToSection(publicationRef)}>
        Publication
      </NavItem>
      <NavItem onClick={() => scrollToSection(projectsRef)}>Projects</NavItem>
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
