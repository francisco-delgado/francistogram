import * as React from "react";
import { navigate } from "gatsby";
import { css, StyleSheet } from "aphrodite";
import { useTrail, useTransition, animated, config } from "react-spring";

import { CloseOutlined } from "@ant-design/icons";

import Group from "../base/Group";
import Text from "../base/Text";
import TextLink from "../base/TextLink";

import colors from "../styles/colors";

const fontSize = "48px";

export default function Intro() {
  const items = [
    <Text scale="display" customFontSize={fontSize}>
      {`what's on `}
      <TextLink
        scale="display"
        customFontSize={fontSize}
        weight="bold"
        color="gold"
        onClick={() => navigate("/blog")}
      >
        my mind
      </TextLink>
    </Text>,
    <div className={css(styles.icon)}>
      <CloseOutlined style={{ fontSize: 20 }} />
    </div>,
    <Text scale="display" customFontSize={fontSize}>
      {`what's in `}
      <TextLink
        scale="display"
        customFontSize={fontSize}
        weight="bold"
        color="gold"
        href="https://www.instagram.com/francistogram/"
      >
        my camera
      </TextLink>
    </Text>,
  ];

  const trail = useTrail(items.length, {
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "translate(0,-20px)",
    },
    to: {
      opacity: 1,
      transform: "translate(0,0)",
    },
  });

  const introItems = [
    { id: 0, text: "Hi" },
    { id: 1, text: "I'm Francisco" },
  ];

  const transitions = useTransition(introItems, item => item.id, {
    config: config.gentle,
    from: {
      opacity: 0,
      y: -20,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    leave: {
      opacity: 0,
      y: 20,
    },
  });

  return (
    <div className={css(styles.container)}>
      <Group flexDirection="column">
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            {items[index]}
          </animated.div>
        ))}
      </Group>
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    maxWidth: 840,
  },
  icon: {
    color: colors.black,
    marginBottom: 16,
  },
});
