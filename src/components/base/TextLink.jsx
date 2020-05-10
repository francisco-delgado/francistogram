import * as React from "react";
import { css, StyleSheet } from "aphrodite";

import { fontWeights, typeScale } from "../styles/typography";
import colors from "../styles/colors";

export default function TextLink({
  children,
  href,
  onClick,
  customFontSize,
  color = "black",
  scale = "base",
  weight = "regular",
  openInNewTab = false,
  disableSpaHijack = false,
  download = false,
}) {
  const fontProps = customFontSize
    ? { ...typeScale[scale], fontSize: customFontSize }
    : typeScale[scale];

  return (
    <a
      className={css(styles.textLink)}
      href={href}
      onClick={onClick}
      download={download}
      disableSpaHijack={disableSpaHijack}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      target={openInNewTab ? "_blank" : undefined}
      style={{
        ...fontProps,
        color: colors[color],
        fontWeight: fontWeights[weight],
      }}
    >
      {children}
    </a>
  );
}

const styles = StyleSheet.create({
  textLink: {
    cursor: "pointer",
    boxShadow: "none",
    borderBottom: "2px solid",
    borderBottomColor: "transparent",
    paddingBottom: 6,
    transition: "0.3s",
    ":hover": {
      borderBottomColor: "inherit",
      paddingBottom: 0,
      transition: "0.3s",
    },
  },
});
