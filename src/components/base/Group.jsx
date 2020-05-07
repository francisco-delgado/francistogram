import * as React from "react";
import { StyleSheet, css } from "aphrodite";

import flexboxStyles from "../styles/flexboxStyles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

const defaultProps = {
  gap: 8,
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  fillChildren: false,
  containerFlex: 1,
};

export default function Group({
  children,
  gap,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  fillChildren,
  containerFlex,
}) {
  const elements = React.Children.toArray(children);
  const flex = fillChildren ? 1 : null;
  return (
    <div
      className={css(
        styles.container,
        flexboxStyles.flexWrap[flexWrap],
        flexboxStyles.flexDirection[flexDirection],
        flexboxStyles.justifyContent[justifyContent],
        flexboxStyles.alignItems[alignItems]
      )}
      style={{
        margin: `-${gap}px -${gap / 2}px 0 -${gap / 2}px`,
        flex: containerFlex,
        pointerEvents: "none",
      }}
    >
      {elements.map((element, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{
            flex,
            margin: `${gap}px ${gap / 2}px 0 ${gap / 2}px`,
            pointerEvents: "auto",
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
}
