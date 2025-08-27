import { styled } from "../stitches.config";

export const NavItem = styled("button", {
  background: "none",
  border: "none",
  font: "inherit",
  outline: "none",
  textAlign: "left",
  width: "100%",
  padding: "0.5rem 1rem",
  color: "$primaryText",
  borderBottom: "1px solid $border",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$highlight",
    color: "$highlightText",
  },
  // for touch devices
  // same effect when you hold the item
  "@media (hover: none)": {
    "&:active": {
      backgroundColor: "$highlight",
      color: "$highlightText",
    },
  },
});
