import { styled } from "./stitches-theme";

function App() {
  return (
    <Container>
      <Header>
        <h1>My Website</h1>
      </Header>
      <Middle>
        <Main>
          <p>Welcome to my website!</p>
        </Main>
        <Aside>
          <p>Some additional information.</p>
        </Aside>
      </Middle>
      <Footer>
        <p>© 2023 My Website</p>
      </Footer>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: "1px solid black",

  "@supports (height: 100dvh)": {
    height: "100dvh", // Use 100dvh if supported
  },
});

const Header = styled("header", {
  border: "1px solid black",
});

const Middle = styled("section", {
  display: "flex",
  flexGrow: 1,
});

const Main = styled("main", {
  flex: 5,
  border: "1px solid green",
});

const Aside = styled("aside", {
  flex: 2,
});

const Footer = styled("footer", {});

export default App;
