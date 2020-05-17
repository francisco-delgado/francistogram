import * as React from "react";
import { css, StyleSheet } from "aphrodite";

export default function CenterColumn({ paddingTop = 0, children }) {
  return (
    <div style={{ paddingTop }} className={css(styles.centerColumn)}>
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  centerColumn: {
    overflow: "scoll",
    width: "85%",
    maxWidth: 680,
    height: "100vh",
    margin: "0 auto",
  },
});
