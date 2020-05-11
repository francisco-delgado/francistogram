import * as React from "react";
import { css, StyleSheet } from "aphrodite";

export default function CenterColumn({ children }) {
  return <div className={css(styles.container)}>{children}</div>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    maxWidth: 640,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
