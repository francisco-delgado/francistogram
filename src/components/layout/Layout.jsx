import * as React from "react";
import { css, StyleSheet } from "aphrodite";

import Header from "./Header";
import SocialMedia from "./SocialMedia";

export default function Layout({ children }) {
  return (
    <div className={css(styles.container)}>
      <Header />
      {children}
      <div className={css(styles.socialMedia)}>
        <SocialMedia />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,
  },
  socialMedia: {
    position: "fixed",
    left: 30,
    top: "50%",
    transform: "translate(0, -50%)",
  },
});
