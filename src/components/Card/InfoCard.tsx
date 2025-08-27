import { styled } from "../../stitches.config";
import { Card } from "./Card";
import type { ReactNode } from "react";

// Todo: Probably possible to make it a Discriminated Union type
// if withLogo is true, logo must be provided
type InfoCardProps =
  | {
      withLogo: true;
      logo?: string;
      logoAlt: string;
      children?: ReactNode;
    }
  | {
      withLogo: false;
      logo?: null;
      logoAlt?: null;
      children?: ReactNode;
    };

export function InfoCard(props: InfoCardProps) {
  const { withLogo = false, children, logo, logoAlt } = props;

  const variant = withLogo ? "withLogo" : "withoutLogo";
  return (
    <StyledInfoCard variant={variant}>
      {logo && (
        <LogoContainer>
          <img src={logo} alt={logoAlt || "logo"} />
        </LogoContainer>
      )}
      <CardContent>{children}</CardContent>
    </StyledInfoCard>
  );
}

const StyledInfoCard = styled(Card, {
  overflow: "visible",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  variants: {
    variant: {
      withLogo: {
        marginTop: "60px",
        padding: "50px 30px 40px 30px",
        "@mobileAndDown": {
          padding: "40px 10px",
        },
      },
      withoutLogo: {
        marginTop: "20px",
        padding: "30px 20px 30px 20px",
        "@mobileAndDown": {
          padding: "20px 10px",
        },
      },
    },
  },
  defaultVariants: {
    variant: "withLogo",
  },
});

const LogoContainer = styled("div", {
  position: "absolute",
  width: "100px",
  height: "100px",
  top: "-50px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  overflow: "hidden",
  zIndex: 2,

  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },

  "@mobileAndDown": {
    width: "80px",
    height: "80px",
    top: "-40px",
  },
});

const CardContent = styled("div", {
  width: "100%",
  overflowY: "auto",
});
