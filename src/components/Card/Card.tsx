import { styled } from "../../stitches.config";

export const Card = styled("div", {
  background: "$secondaryBackground",
  color: "$primaryText",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  overflow: "auto",

  // Landscape for larger screens
  // maybe use percentages for width
  aspectRatio: "6/3",
  width: "800px",

  "&:hover": {
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.7)",
    color: "$highlightText",
    transform: "scale(1.02)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    background: "$highlight",
    border: "none",
  },

  // Portrait for mobile
  "@mobileAndDown": {
    width: "90%",
    aspectRatio: "3/5",
  },
});
