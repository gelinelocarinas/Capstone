// @ts-ignore
function pxToRem(value) {
  return `${value / 16}rem`;
}

// @ts-ignore
function responsiveFontSizes({ xs, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:960px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1280px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "Tourney, Kiwi Maru, Montserrat";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 700,
  fontWeightBold: 900,
  caption: {
    color: "#FFC34C",
    fontWeight: 900,
    lineHeight: "24px",
    fontSize: pxToRem(42),
    textShadow: "0px 0px 64px #FFC34C",
    ...responsiveFontSizes({ xs: 21, md: 31, lg: 42 }),
  },
  h1: {
    color: "#FFF",
    fontWeight: 900,
    lineHeight: "normal",
    fontSize: pxToRem(42),
    textShadow: "0px 0px 64px #FFC34C",
    ...responsiveFontSizes({ xs: 21, md: 31, lg: 42 }),
  },
  h2: {
    color: "#FFF",
    fontWeight: 900,
    lineHeight: "normal",
    fontSize: pxToRem(30),
    ...responsiveFontSizes({ xs: 15, md: 22, lg: 30 }),
  },
  h3: {
    color: "#FFF",
    fontWeight: 900,
    lineHeight: "normal",
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 12, md: 18, lg: 24 }),
  },
  h4: {
    fontFamily: "Kiwi Maru",
    color: "#FFFFFFCC",
    fontWeight: 500,
    lineHeight: "normal",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 10, md: 15, lg: 20 }),
  },
  h5: {
    color: "#FFF",
    fontWeight: 900,
    lineHeight: "normal",
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 9, md: 14, lg: 18 }),
  },
  h6: {
    fontFamily: "Kiwi Maru",
    color: "#FFFFFFCC",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 9, md: 14, lg: 18 }),
  },
  subtitle1: {
    color: "#FFF",
    fontFamily: "Tourney",
    fontWeight: 500,
    lineHeight: "normal",
    fontSize: pxToRem(15),
    ...responsiveFontSizes({ xs: 8, md: 12, lg: 15 }),
  },
  subtitle2: {
    fontFamily: "Kiwi Maru",
    color: "#FFF",
    fontWeight: 500,
    lineHeight: "nomal",
    fontSize: pxToRem(15),
    ...responsiveFontSizes({ xs: 8, md: 12, lg: 15 }),
  },
  body1: {
    color: "#FFF",
    fontWeight: 900,
    lineHeight: "nomal",
    fontSize: pxToRem(13),
    ...responsiveFontSizes({ xs: 7, md: 10, lg: 13 }),
  },
  body2: {
    fontFamily: "Kiwi Maru",
    color: "#FFF",
    fontWeight: 500,
    lineHeight: "nomal",
    fontSize: pxToRem(13),
    ...responsiveFontSizes({ xs: 7, md: 10, lg: 13 }),
  },
  overline: {
    fontFamily: "Kiwi Maru",
    color: "#FFF",
    fontWeight: 500,
    lineHeight: "nomal",
    fontSize: pxToRem(8),
    textTransform: "unset",
    ...responsiveFontSizes({ xs: 4, md: 6, lg: 8 }),
  },
  button: {
    fontWeight: 900,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "unset",
  },
};

export default typography;
