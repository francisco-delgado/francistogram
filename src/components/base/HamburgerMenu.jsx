import React from "react";
import { css, StyleSheet } from "aphrodite";
import PropTypes from "prop-types";

import "./hamburgerStyle.css";

HamburgerMenu.propTypes = {
  active: PropTypes.bool,
};

export default function HamburgerMenu({ active, onClick }) {
  return (
    <div className={css(styles.hamburgerMenu)} onClick={onClick}>
      <div className={`hamburger hamburger-top ${active ? "active" : ""}`} />
      <div className={`hamburger hamburger-center`} />
      <div className={`hamburger hamburger-bottom ${active ? "active" : ""}`} />
    </div>
  );
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    position: "fixed",
    top: 38,
    right: 30,
    cursor: "pointer",
    width: 40,
    height: 40,
  },
});
