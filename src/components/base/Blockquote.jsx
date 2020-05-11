import * as React from "react";
import { css, StyleSheet } from "aphrodite";

import Text from "./Text";
import colors from "../styles/colors";

export default function Blockquote({ children }) {
  return (
    <blockquote className={css(styles.blockquote)}>
      <Text scale="link">{children}</Text>
    </blockquote>
  );
}

const styles = StyleSheet.create({
  blockquote: {
    borderLeft: `3px solid ${colors.gold}`,
    paddingLeft: 16,
    marginLeft: 0,
  },
});
