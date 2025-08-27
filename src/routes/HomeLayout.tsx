import { Outlet } from "react-router-dom";
import { styled, darkTheme } from "../stitches.config";
import {
  StyledPanelRightOpen as PanelRightOpen,
  StyledPanelRightClose as PanelRightClose,
  StyledSquareMenu as SquareMenu,
  StyledSquareX as SquareX,
  StyledSun as Sun,
  StyledMoon as Moon,
} from "../components/Icons/Icons";
import { useSiteState } from "../context/SiteStateContext";
import { PortfolioNavigationRefsProvider } from "../context/PortfolioNavigationRefsContext";
import { Tooltip } from "../components/Tooltip";

function HomeLayout() {
  const {
    rightDrawerOpen,
    toggleRightDrawer,
    mobileDrawerOpen,
    toggleMobileDrawer,
    darkMode,
    toggleDarkMode,
  } = useSiteState();

  return (
    <PortfolioNavigationRefsProvider>
      <Container className={darkMode ? darkTheme.className : ""}>
        <Header>
          <HeaderItemContainer>
            <HamburgerButton onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <></> : <SquareMenu />}
            </HamburgerButton>
          </HeaderItemContainer>
          <DesktopHeaderButtonContainer>
            <ThemeToggle onClick={toggleDarkMode}>
              {darkMode ? (
                <Tooltip content="Light Mode">
                  <Sun />
                </Tooltip>
              ) : (
                <Tooltip content="Dark Mode">
                  <Moon />
                </Tooltip>
              )}
            </ThemeToggle>
            <DrawerButton onClick={toggleRightDrawer}>
              {rightDrawerOpen ? (
                <Tooltip content="Close Panel">
                  <PanelRightClose />
                </Tooltip>
              ) : (
                <Tooltip content="Open Panel">
                  <PanelRightOpen />
                </Tooltip>
              )}
            </DrawerButton>
          </DesktopHeaderButtonContainer>
        </Header>
        <Middle>
          <Main expanded={!rightDrawerOpen}>
            <Outlet context={{ slot: "main" }} />
          </Main>
          <Drawer open={rightDrawerOpen}>
            <Outlet context={{ slot: "drawer" }} />
          </Drawer>
        </Middle>
        <Footer>
          <CopyrightText>© 2025 Sadnan Saquif</CopyrightText>
        </Footer>

        {/* Mobile Drawer */}
        <NavDrawer open={mobileDrawerOpen}>
          <IconContainer>
            <ThemeToggleMobile onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </ThemeToggleMobile>
            <HamburgerButton onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <SquareX /> : <SquareMenu />}
            </HamburgerButton>
          </IconContainer>
          <Outlet context={{ slot: "mobileDrawer" }} />
        </NavDrawer>
      </Container>
    </PortfolioNavigationRefsProvider>
  );
}

const Container = styled("div", {
  background: "$primaryBackground",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  // to prevent overflow and scroll, scroll will be inside main (& Drawer if ever needed)
  maxHeight: "100vh",
  color: "$primaryText",

  "@supports (height: 100dvh)": {
    height: "100dvh", // Use 100dvh if supported
    maxHeight: "100dvh",
  },
});

const Header = styled("header", {
  background: "$secondaryBackground",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minHeight: "3rem",
  // mobile will have sticky header
  "@mobileAndDown": {
    position: "sticky",
    top: 0,
    borderBottom: "0.2rem solid $border",
    zIndex: 1000, // ensure it overlays other content
  },
});

const HeaderItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
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
  // so that there is no scroll when Drawer is closed
  "@tabletAndUp": {
    overflowX: "hidden",
  },
});

const Main = styled("main", {
  background: "$primaryBackground",
  borderWidth: "0.2rem",
  borderStyle: "solid",
  borderColor: "$border",
  borderLeft: "none",
  transition: "flex 0.5s ease, border 0.5s ease",
  overflow: "scroll",

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
    border: "none",
  },
});

const DrawerButton = styled("button", {
  background: "none",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",

  "@mobileAndDown": {
    display: "none", // hide button on mobile devices
  },
});

const Drawer = styled("nav", {
  background: "$secondaryBackground",
  overflow: "hidden", // hides content when collapsed
  transition: "flex-basis 0.3s ease, opacity 0.3s ease",
  padding: "0.15rem",
  // position: "sticky",
  // top: "3rem",

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
    display: "none", // hide Drawer on mobile devices
  },
});

const Footer = styled("footer", {
  background: "$secondaryBackground",
  display: "flex",
  justifyContent: "flex-end",
  "@mobileAndDown": {
    borderTop: "0.2rem solid $border",
  },
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

  // larger screens hides hamburger
  "@tabletAndUp": {
    display: "none",
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
  zIndex: 1100, // ensure it overlays other content

  variants: {
    open: {
      true: { transform: "translateX(0)" },
      false: { transform: "translateX(100%)" },
    },
  },

  // larger screens hides nav drawer
  "@tabletAndUp": {
    display: "none",
  },
});

const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  gap: "0.25rem",
});

export default HomeLayout;
