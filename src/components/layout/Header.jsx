import * as React from "react";
import { css, StyleSheet } from "aphrodite";

import Text from "../base/Text";
import HamburgerMenu from "../base/HamburgerMenu";

export default function Header({ menuActive, onMenuClick }) {
  return (
    <>
      <div className={css(styles.logo)}>
        <Text scale="title" weight="bold">
          Francisco.
        </Text>
      </div>
      <HamburgerMenu active={menuActive} onClick={onMenuClick} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "fixed",
    left: 30,
    top: 30,
  },
});
