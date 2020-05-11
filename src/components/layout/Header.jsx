import * as React from "react";
import { navigate } from "gatsby";
import { css, StyleSheet } from "aphrodite";

import Group from "../base/Group";
import Text from "../base/Text";
import TextLink from "../base/TextLink";

export default function Header() {
  return (
    <>
      <div className={css(styles.logo)}>
        <Text scale="title" weight="bold">
          Francisco.
        </Text>
      </div>
      <div className={css(styles.menu)}>
        <Group gap={32} justifyContent="end">
          <TextLink
            scale="link"
            onClick={() => navigate("/blog")}
            openInNewTab={true}
          >
            blog
          </TextLink>
          <TextLink
            scale="link"
            onClick={() => navigate("/blog")}
            openInNewTab={true}
          >
            projects
          </TextLink>
          <TextLink
            scale="link"
            onClick={() => navigate("/blog")}
            openInNewTab={true}
          >
            resume
          </TextLink>
        </Group>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "fixed",
    left: 30,
    top: 30,
  },
  menu: {
    position: "fixed",
    top: 38,
    right: 30,
  },
});
