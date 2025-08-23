import { Outlet } from "react-router-dom";
import { styled, darkTheme } from "../stitches.config";
import {
  StyledPanelRightOpen as PanelRightOpen,
  StyledPanelRightClose as PanelRightClose,
  StyledSquareMenu as SquareMenu,
  StyledSquareX as SquareX,
  StyledSun as Sun,
  StyledMoon as Moon,
} from "../components/Icons";
import { useSiteState } from "../context/SiteStateContext";

function HomeLayout() {
  const {
    rightAsideOpen,
    toggleRightAside,
    mobileDrawerOpen,
    toggleMobileDrawer,
    darkMode,
    toggleDarkMode,
  } = useSiteState();

  return (
    <Container className={darkMode ? darkTheme.className : ""}>
      <Header>
        <HeaderItemContainer>
          <HamburgerButton onClick={toggleMobileDrawer}>
            {mobileDrawerOpen ? <SquareX /> : <SquareMenu />}
          </HamburgerButton>
        </HeaderItemContainer>
        <DesktopHeaderButtonContainer>
          <ThemeToggle onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </ThemeToggle>
          <AsideButton onClick={toggleRightAside}>
            {rightAsideOpen ? <PanelRightClose /> : <PanelRightOpen />}
          </AsideButton>
        </DesktopHeaderButtonContainer>
      </Header>
      <Middle>
        <Main expanded={!rightAsideOpen}>
          <Outlet context={{ slot: "main" }} />
        </Main>
        <Aside open={rightAsideOpen}>
          <Outlet context={{ slot: "aside" }} />
        </Aside>
      </Middle>
      <Footer>
        <CopyrightText>© 2025 Sadnan Saquif</CopyrightText>
      </Footer>

      {/* Mobile Drawer */}
      <NavDrawer open={mobileDrawerOpen}>
        <ThemeToggleMobile onClick={toggleDarkMode}>
          {darkMode ? <Sun /> : <Moon />}
        </ThemeToggleMobile>
        <Outlet context={{ slot: "mobileDrawer" }} />
      </NavDrawer>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: "$primaryBackground",

  "@supports (height: 100dvh)": {
    height: "100dvh", // Use 100dvh if supported
  },
});

const Header = styled("header", {
  background: "$secondaryBackground",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  minHeight: "3rem",
});

const HeaderItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

const DesktopHeaderButtonContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  "@mobileAndDown": {
    display: "none", // hide container on mobile devices
  },
});

const Middle = styled("section", {
  display: "flex",
  flexGrow: 1,
});

const Main = styled("main", {
  borderWidth: "0.2rem",
  borderStyle: "solid",
  borderColor: "$border",
  borderLeft: "none",
  transition: "flex 0.5s ease, border 0.5s ease",
  background: "$primaryBackground",

  variants: {
    expanded: {
      true: {
        flex: "1 0 100%",
        borderRight: "none",
        transition: "flex 0.5s ease, borderRight 0.5s ease",
      },
      false: {
        flex: 5,
      },
    },
  },

  "@mobileAndDown": {
    borderRight: "none",
  },
});

const AsideButton = styled("button", {
  background: "none",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",

  "@mobileAndDown": {
    display: "none", // hide button on mobile devices
  },
});

const Aside = styled("aside", {
  background: "$secondaryBackground",
  overflow: "hidden", // hides content when collapsed
  transition: "flex-basis 0.3s ease, opacity 0.3s ease",
  padding: "0.15rem",

  variants: {
    open: {
      true: {
        flex: "2 9999 5rem",
        opacity: 1,
        pointerEvents: "auto",
      },
      false: {
        flex: "0 0 0rem",
        opacity: 0,
        pointerEvents: "none", // disable mouse events when closed
      },
    },
  },

  "@mobileAndDown": {
    display: "none", // hide aside on mobile devices
  },
});

const Footer = styled("footer", {
  background: "$secondaryBackground",
  display: "flex",
  justifyContent: "flex-end",
});

const CopyrightText = styled("p", {
  color: "$lighterText",
});

const ThemeToggle = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1.5rem",
  "@mobileAndDown": {
    display: "none", // hide toggle on mobile devices
  },
});

const ThemeToggleMobile = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1.5rem",

  "@tabletAndUp": {
    display: "none", // hide toggle on larger screens
  },
});

/**
 * Mobile Only Components
 **/
const HamburgerButton = styled("button", {
  background: "none",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",

  "@tabletAndUp": {
    display: "none", // larger screens hides hamburger
  },
});

const NavDrawer = styled("nav", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "80%",
  background: "$secondaryBackground",
  borderLeft: "0.2rem solid $border",
  boxShadow: "-4px 0 12px rgba(0,0,0,0.1)",
  transform: "translateX(100%)",
  transition: "transform 0.3s ease, border 0.3s ease",
  padding: "1rem",

  variants: {
    open: {
      true: { transform: "translateX(0)" },
      false: { transform: "translateX(100%)" },
    },
  },

  "@tabletAndUp": {
    display: "none", // larger screens hides nav drawer
  },
});

export default HomeLayout;
