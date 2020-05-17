import * as React from "react";
import { navigate } from "gatsby";
import { css, StyleSheet } from "aphrodite";

import Group from "../base/Group";
import TextLink from "../base/TextLink";
import Text from "../base/Text";

import CenterColumn from "./CenterColumn";

import colors from "../styles/colors";

export default function Menu({ visible }) {
  return (
    <div className={css(styles.menu, visible ? styles.menuVisible : "")}>
      <CenterColumn>
        <div
          className={css(styles.contactDetails, visible ? styles.visible : "")}
        >
          <Group flexDirection="column" gap={0} justifyContent="center">
            <Text scale="headline" color="black" marginBottom={0}>
              Contact Details
            </Text>
            <TextLink
              href="mailto:francisco@francistogram.com"
              scale="title"
              color="black"
            >
              francisco@francistogram.com
            </TextLink>
            <Text scale="title" color="black">
              (415) 967-2601
            </Text>
          </Group>
        </div>
        <div className={css(styles.links, visible ? styles.visible : "")}>
          <Group
            flexDirection="column"
            gap={32}
            alignItems="flex-end"
            justifyContent="center"
          >
            <TextLink
              scale="display"
              color="black"
              onClick={() => navigate("/")}
            >
              home
            </TextLink>
            <TextLink
              scale="display"
              color="black"
              onClick={() => navigate("/blog")}
            >
              blog
            </TextLink>
            <TextLink
              scale="display"
              color="black"
              href="https://francistogram.visualsociety.com/"
            >
              prints
            </TextLink>
            <TextLink
              scale="display"
              color="black"
              onClick={() => navigate("/resume")}
            >
              resume
            </TextLink>
          </Group>
        </div>
      </CenterColumn>
    </div>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "fixed",
    zIndex: 10,
    backgroundColor: colors.opal,
    width: "100%",
    height: 0,
    transition: "all .5s ease-in-out",
    overflow: "hidden",
  },
  menuVisible: {
    height: "100vh",
    transition: "all .5s ease-in-out",
  },
  contactDetails: {
    position: "relative",
    top: "50%",
    transform: "translate(0, -50%)",
    opacity: 0,
    paddingBottom: 40,
    transition: "all .5s ease-in-out",
    "@media (max-width: 1000px)": {
      visibility: "hidden",
    },
  },
  links: {
    position: "relative",
    marginLeft: "auto",
    top: "50%",
    transform: "translate(0, -90%)",
    opacity: 0,
    paddingBottom: 60,
    transition: "all .5s ease-in-out",
  },
  visible: {
    opacity: 100,
    paddingBottom: 0,
    transition: "all .5s ease-in-out",
  },
});
