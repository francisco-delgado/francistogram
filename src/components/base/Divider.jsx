import * as React from "react";
import { css, StyleSheet } from "aphrodite";

export default function Divider() {
  return <div className={css(styles.divider)} />;
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    marginBottom: 24,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  },
});
