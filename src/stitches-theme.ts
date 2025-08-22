import { createStitches } from "@stitches/react";

// const BREAKPOINTS = {

// };

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
      // primary: "hsl(214, 100%, 50%)",
      // primaryLight: "hsl(214, 100%, 70%)",
      // primaryDark: "hsl(214, 100%, 30%)",
      // secondary: "hsl(0, 100%, 50%)",
      // secondaryLight: "hsl(0, 100%, 70%)",
      // secondaryDark: "hsl(0, 100%, 30%)",
      // background: "hsl(0, 0%, 95%)",
      // backgroundDark: "hsl(0, 0%, 10%)",
      // text: "hsl(0, 0%, 20%)",
      // textLight: "hsl(0, 0%, 80%)",
      // textDark: "hsl(0, 0%, 10%)",
    },
  },
});
