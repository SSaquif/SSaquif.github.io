import { styled } from "../stitches.config";

export const Button = styled("button", {
  padding: "0.5rem 1rem",
  background: "$button",
  color: "$buttonText",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$highlight",
    color: "$highlightText",
  },
});
