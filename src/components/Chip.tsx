import { styled } from "../stitches.config";
import type { ReactNode } from "react";

const StyledChip = styled("span", {
  display: "inline-block",
  padding: "0.1rem 0.35rem",
  margin: "0.1rem",
  borderRadius: "16px",
  backgroundColor: "$accent",
  color: "$accentText",
  fontSize: "0.95rem",
  fontWeight: 500,
  letterSpacing: "0.02em",
});

export function Chip({ children }: { children: ReactNode }) {
  return <StyledChip>{children}</StyledChip>;
}
