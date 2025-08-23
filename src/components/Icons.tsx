import { styled } from "../stitches.config";
import {
  PanelRightOpen,
  PanelRightClose,
  SquareMenu,
  SquareX,
  Sun,
  Moon,
} from "lucide-react";

const Icon = styled("span", {
  color: "$border",
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
  "& svg": {
    stroke: "currentColor",
  },
});

export function StyledPanelRightOpen() {
  return (
    <Icon>
      <PanelRightOpen />
    </Icon>
  );
}

export function StyledPanelRightClose() {
  return (
    <Icon>
      <PanelRightClose />
    </Icon>
  );
}

export function StyledSquareMenu() {
  return (
    <Icon>
      <SquareMenu />
    </Icon>
  );
}

export function StyledSquareX() {
  return (
    <Icon>
      <SquareX />
    </Icon>
  );
}

export function StyledSun() {
  return (
    <Icon>
      <Sun />
    </Icon>
  );
}

export function StyledMoon() {
  return (
    <Icon>
      <Moon />
    </Icon>
  );
}
