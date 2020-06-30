import * as React from "react";
import { css, StyleSheet } from "aphrodite";

import Notifications from "react-notify-toast";

import Header from "./Header";
import SocialMedia from "./SocialMedia";

import Menu from "./Menu";

export default function Layout({ children }) {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <>
      <Menu visible={menuActive} />
      <div className={css(styles.header)}>
        <Header
          menuActive={menuActive}
          onMenuClick={() => setMenuActive(!menuActive)}
        />
      </div>
      <div className={css(styles.children)}>{children}</div>
      <div className={css(styles.socialMedia)}>
        <SocialMedia />
      </div>
      <Notifications />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "fixed",
    top: 0,
    zIndex: 20,
    height: 80,
    width: "100vw",
    backgroundColor: "white",
  },
  children: {
    position: "inherit",
    zIndex: 0,
    width: "100vw",
    height: "100vh",
  },
  socialMedia: {
    position: "fixed",
    zIndex: 20,
    left: 30,
    top: "50%",
    transform: "translate(0, -50%)",
    "@media (max-width: 1000px)": {
      visibility: "hidden",
    },
  },
});
