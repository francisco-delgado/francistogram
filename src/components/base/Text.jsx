import * as React from "react";

import { fontWeights, typeScale } from "../styles/typography";

const tagMap = {
  display: "h1",
  headline: "h3",
  title: "h5",
  base: "p",
  subtext: "span",
  tiny: "span",
};

// type Props = {|
//   +children: React.Node,
//   /** The size of the text */
//   +scale?: "display" | "headline" | "title" | "base" | "subtext" | "tiny",
//   /** The boldness of the text */
//   +weight?: "bold" | "regular",
//   /** The font style for a text. */
//   +fontStyle?: "normal" | "italic",
//   /** The overflow condition for the text content */
//   +overflow?: "visible" | "hidden" | "overlay" | "scroll",
//   /** Sets how hidden overflow content is displayed */
//   +textOverflow?: "initial" | "clip" | "ellipsis",
//   /** Sets the capitalization of the text */
//   +textTransform?: "initial" | "uppercase" | "lowercase" | "capitalize",
// |}

export default function Text({
  children,
  scale = "base",
  weight = "regular",
  fontStyle = "normal",
  overflow = "visible",
  textOverflow = "initial",
  textTransform = "initial",
}) {
  const Tag = tagMap[scale];

  return (
    <Tag
      style={{
        ...typeScale[scale],
        fontWeight: fontWeights[weight],
        fontStyle,
        overflow,
        textOverflow,
        textTransform,
      }}
    >
      {children}
    </Tag>
  );
}
