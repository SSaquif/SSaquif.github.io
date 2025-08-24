import { styled } from "../stitches.config";

export const Card = styled("div", {
  background: "$secondaryBackground",
  border: "1px solid $border",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  overflow: "auto",

  // Portrait for mobile
  aspectRatio: "3/4",

  // Landscape for larger screens
  "@tabletAndUp": {
    aspectRatio: "5/3",
  },

  // maybe use percentages for width
  minWidth: "200px",
  maxWidth: "400px",
});
