import * as React from "react";
import { css, StyleSheet } from "aphrodite";

export default function CenterColumn({ marginTop = 0, children }) {
  return (
    <div style={{ marginTop }} className={css(styles.centerColumn)}>
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  centerColumn: {
    width: "85%",
    maxWidth: 680,
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
