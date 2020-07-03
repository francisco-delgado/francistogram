import * as React from "react";
import { css, StyleSheet } from "aphrodite";

type Props = {
  marginTop: number;
  marginBottom: number;
  children: React.ReactNode;
};

export default function CenterColumn({
  marginTop = 0,
  marginBottom = 0,
  children,
}: Props) {
  return (
    <div
      style={{ marginTop, marginBottom }}
      className={css(styles.centerColumn)}
    >
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
