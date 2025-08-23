import { useOutletContext } from "react-router-dom";
import { styled } from "../stitches.config";

function Portfolio() {
  const { slot } = useOutletContext<{
    slot: "main" | "aside" | "mobileDrawer";
  }>();
  console.log("Current slot:", slot);

  return (
    <>
      {slot === "main" && <PortfolioContent />}
      {slot === "aside" && <div>Aside Content</div>}
      {slot === "mobileDrawer" && <div>Mobile Drawer Content</div>}
    </>
  );
}

function PortfolioContent() {
  return <Container>Hello</Container>;
}

const Container = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "5% 15% 0 15%",
  //   border: "0.4rem solid $border",
  gap: "1rem",
});

export default Portfolio;
