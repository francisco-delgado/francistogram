import Typography from "typography";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

import colors from "../components/styles/colors";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5625,
  googleFonts: [
    {
      name: "Monterrat",
      styles: ["600"],
    },
    {
      name: "Jost",
      styles: ["Light 300"],
    },
  ],
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Jost", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: colors.opal,
      textDecoration: "none",
      borderBottom: "2px solid",
      borderBottomColor: "transparent",
      paddingBottom: rhythm(1 / 6),
      transition: "0.3s",
    },
    "a:hover": {
      borderBottomColor: "inherit",
      paddingBottom: 0,
      transition: "0.3s",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    p: {
      lineHeight: rhythm(1),
    },
    blockquote: {
      ...scale(1 / 5),
      color: colors.lightGrey,
      paddingLeft: rhythm(1),
      marginLeft: 0,
      borderLeft: `${rhythm(1 / 8)} solid`,
      borderColor: colors.gold,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      fontSize: options.baseFontSize,
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        borderLeft: `${rhythm(3 / 16)} solid`,
        borderColor: "#fcea0e",
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
