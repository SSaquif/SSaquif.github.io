import { styled } from "../../stitches.config";
import { Card } from "./Card";
import type { ReactNode } from "react";

interface InfoCardProps {
  logo?: string;
  logoAlt?: string;
  children: ReactNode;
}

export function InfoCard({ logo, logoAlt, children }: InfoCardProps) {
  return (
    <StyledInfoCard>
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
  marginTop: "60px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "50px 30px 40px 30px",

  "@mobileAndDown": {
    flexDirection: "column",
    width: "90%",
    textAlign: "center",
    padding: "60px 10px 30px 10px",
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
  maxHeight: "350px",
  overflowY: "auto",
});
