import { useOutletContext } from "react-router-dom";

function Portfolio() {
  const { slot } = useOutletContext<{
    slot: "main" | "aside" | "mobileDrawer";
  }>();
  console.log("Current slot:", slot);

  return (
    <>
      {slot === "main" && <div>Main Content</div>}
      {slot === "aside" && <div>Aside Content</div>}
      {slot === "mobileDrawer" && <div>Mobile Drawer Content</div>}
    </>
  );
}

export default Portfolio;
