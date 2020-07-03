import * as React from "react";
import { StyleSheet, css } from "aphrodite";

import flexboxStyles from "../styles/flexboxStyles";

type Props = {
  children: React.ReactNode;
  gap?: number;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center";
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center";
  fillChildren?: boolean;
  containerFlex?: number | "none";
};

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
}: Props) {
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});
