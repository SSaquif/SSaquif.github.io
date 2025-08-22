import { createStitches, createTheme } from "@stitches/react";

const BREAKPOINTS = {
  // desktop first breakpoints
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
  // mobile first breakpoints
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const { styled, css, keyframes } = createStitches({
  media: {
    // desktop first breakpoints
    mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
    tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
    laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
    // mobile first breakpoints
    tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  },

  theme: {
    colors: {
      primaryBackground: "hsl(60, 100%, 100%)",
      secondaryBackground: "hsl(0, 0%, 95%)",
      headline: "hsl(214, 100%, 20%)",
      text: "hsl(214, 100%, 30%)",
      link: "hsl(214, 100%, 40%)",
      button: "hsl(214, 100%, 50%)",
      highlight: "hsl(214, 100%, 40%)",
      border: "hsl(214, 100%, 80%)",
    },
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    primaryBackground: "hsl(214, 100%, 10%)",
    secondaryBackground: "hsl(214, 100%, 15%)",
    headline: "hsl(60, 100%, 90%)",
    text: "hsl(60, 100%, 80%)",
    link: "hsl(60, 100%, 70%)",
    button: "hsl(60, 100%, 60%)",
    highlight: "hsl(60, 100%, 70%)",
    border: "hsl(214, 100%, 30%)",
  },
});
