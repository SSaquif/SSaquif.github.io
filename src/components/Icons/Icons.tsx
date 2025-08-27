import { styled } from "../../stitches.config";
import {
  PanelRightOpen,
  PanelRightClose,
  SquareMenu,
  SquareX,
  Sun,
  Moon,
} from "lucide-react";

// Todo: look into over possible lucide-react icon props
interface IconProps {
  size?: number;
  color?: string;
}

const Icon = styled("span", {
  color: "$border",
  opacity: 0.6,
  "&:hover": {
    opacity: 1,
  },
  "& svg": {
    stroke: "currentColor",
  },
});

export function StyledPanelRightOpen({ size, color }: IconProps) {
  return (
    <Icon>
      <PanelRightOpen size={size} color={color} />
    </Icon>
  );
}

export function StyledPanelRightClose({ size, color }: IconProps) {
  return (
    <Icon>
      <PanelRightClose size={size} color={color} />
    </Icon>
  );
}

export function StyledSquareMenu({ size, color }: IconProps) {
  return (
    <Icon>
      <SquareMenu size={size} color={color} />
    </Icon>
  );
}

export function StyledSquareX({ size, color }: IconProps) {
  return (
    <Icon>
      <SquareX size={size} color={color} />
    </Icon>
  );
}

export function StyledSun({ size, color }: IconProps) {
  return (
    <Icon>
      <Sun size={size} color={color} />
    </Icon>
  );
}

export function StyledMoon({ size, color }: IconProps) {
  return (
    <Icon>
      <Moon size={size} color={color} />
    </Icon>
  );
}
