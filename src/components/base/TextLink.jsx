import * as React from "react";

import { css, StyleSheet } from "aphrodite";

import { fontWeights, typeScale } from "../styles/typography";

export default function TextLink({
  children,
  href,
  scale = "base",
  weight = "regular",
  openInNewTab = false,
  disableSpaHijack = false,
  download = false,
}) {
  return (
    <a
      className={css(styles.textLink)}
      download={download}
      disableSpaHijack={disableSpaHijack}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      target={openInNewTab ? "_blank" : undefined}
      href={href}
      style={{
        ...typeScale[scale],
        fontWeight: fontWeights[weight],
      }}
    >
      {children}
    </a>
  );
}

const styles = StyleSheet.create({
  textLink: {
    transitionDuration: "0.3s",
  },
});
