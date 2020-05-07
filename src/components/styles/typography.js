export const fontWeights = Object.freeze({
  regular: "400",
  bold: "700",
  boldExtended: "800",
});

export const typeScale = {
  display: {
    fontSize: "32px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "48px",
    letterSpacing: -0.02,
    fontWeight: fontWeights.bold,
    fontStyle: "normal",
  },
  headline: {
    fontSize: "24px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "32px",
    letterSpacing: -0.02,
    fontWeight: fontWeights.boldExtended,
    fontStyle: "normal",
  },
  title: {
    fontSize: "20px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "20px",
    letterSpacing: 0,
    fontWeight: fontWeights.bold,
    fontStyle: "normal",
  },
  base: {
    fontSize: "14px",
    fontFamily: "Jost, sans-serif",
    lineHeight: "20px",
    letterSpacing: 0,
    fontWeight: fontWeights.regular,
    fontStyle: "normal",
  },
  subtext: {
    fontSize: "12px",
    fontFamily: "Jost, sans-serif",
    lineHeight: "16px",
    letterSpacing: 0,
    fontWeight: fontWeights.regular,
    fontStyle: "normal",
  },
  tiny: {
    fontSize: "9px",
    fontFamily: "Jost, sans-serif",
    lineHeight: "12px",
    letterSpacing: 0,
  },
};
