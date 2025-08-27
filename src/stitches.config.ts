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

export const darkTheme = createTheme("dark-theme", {
  colors: {
    // secondaryBackground: "hsl(177, 100%, 25%)",
    primaryBackground: "hsl(180, 84%, 12%)",
    secondaryBackground: "hsl(177, 100%, 14%)",
    border: "hsl(360, 100%, 0%)",
    headline: "hsl(60, 100%, 100%)",
    primaryText: "hsl(163, 29%, 75%)",
    lighterText: "hsl(163, 29%, 85%)",
    darkerText: "hsl(163, 29%, 55%)",
    link: "hsl(206, 100%, 80%)",
    visitedLink: "hsl(336, 100%, 70%)",
    button: "hsl(36, 93%, 68%)",
    buttonText: "hsl(60, 100%, 100%)",
    // highlight: "hsl(36, 93%, 50%)",
    highlight: "hsl(190, 96%, 26%)",
    highlightText: "hsl(60, 100%, 100%)",
    accent: "hsl(360, 68%, 63%)",
    accentText: "hsl(60, 100%, 100%)",
  },
});

export const { styled, css, keyframes, theme } = createStitches({
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
      primaryBackground: "hsl(30, 30%, 96%)",
      secondaryBackground: "hsl(140, 100%, 90%)",
      border: "hsl(170, 100%, 30%)",
      headline: "hsl(208, 37%, 10%)",
      primaryText: "hsl(208, 37%, 20%)",
      lighterText: "hsl(208, 37%, 35%)",
      darkerText: "hsl(207, 36%, 5%)",
      link: "hsl(214, 100%, 40%)",
      visitedLink: "hsl(336, 100%, 50%)",
      button: "hsl(180, 90%, 26%)",
      buttonText: "hsl(60, 100%, 100%)",
      highlight: "hsl(190, 96%, 26%)",
      highlightText: "hsl(60, 100%, 100%)",
      accent: "hsl(349, 84%, 60%)",
      accentText: "hsl(60, 100%, 100%)",
    },

    zIndices: {
      base: 0,
      dropdown: 1000,
      modal: 2000,
      tooltip: 3000,
    },
  },
});
