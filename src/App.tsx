import { styled } from "./stitches-theme";
import { useState } from "react";
import {
  PanelRightOpen,
  PanelRightClose,
  SquareMenu,
  SquareX,
} from "lucide-react";

function App() {
  const [asideOpen, setAsideOpen] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Container>
      <Header>
        <HamburgerButton onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <SquareX /> : <SquareMenu />}
        </HamburgerButton>
        <h1>My Website</h1>
        <AsideButton onClick={() => setAsideOpen(!asideOpen)}>
          {asideOpen ? <PanelRightClose /> : <PanelRightOpen />}
        </AsideButton>
      </Header>
      <Middle>
        <Main expanded={!asideOpen}>
          <p>Welcome to my website!</p>
        </Main>
        <Aside open={asideOpen}>
          <p>Aside for Navigation</p>
        </Aside>
      </Middle>
      <Footer>
        <p>© 2025 Sadnan Saquif</p>
      </Footer>

      {/* Mobile Drawer */}
      <NavDrawer open={navOpen}>
        <p>Mobile navigation</p>
      </NavDrawer>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: "3px solid red",

  "@supports (height: 100dvh)": {
    height: "100dvh", // Use 100dvh if supported
  },
});

const Header = styled("header", {
  border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
});

const Middle = styled("section", {
  display: "flex",
  flexGrow: 1,
});

const Main = styled("main", {
  border: "5px solid green",
  transition: "flex 0.3s ease",

  variants: {
    expanded: {
      true: {
        flex: "1 0 100%",
      },
      false: {
        flex: 5,
      },
    },
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
  border: "1px solid blue",
  background: "#f3f3f3",
  overflow: "hidden", // hides content when collapsed
  transition: "flex-basis 0.3s ease, opacity 0.3s ease",

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
  display: "flex",
  justifyContent: "flex-end",
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
  width: "250px",
  background: "white",
  borderLeft: "1px solid #ddd",
  boxShadow: "-4px 0 12px rgba(0,0,0,0.1)",
  transform: "translateX(100%)",
  transition: "transform 0.3s ease",
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

export default App;
