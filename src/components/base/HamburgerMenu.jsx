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
      <div className={css(styles.hamburgerContainer)}>
        <div className={`hamburger hamburger-top ${active ? "active" : ""}`} />
        <div className={`hamburger hamburger-center`} />
        <div
          className={`hamburger hamburger-bottom ${active ? "active" : ""}`}
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    position: "fixed",
    top: 16,
    right: "min(45px, 7.5vw)",
    cursor: "pointer",
    width: 40,
    height: 40,
    transform: "translate(50%, 0)",
  },
  hamburgerContainer: {
    position: "fixed",
    left: 4,
    top: 12,
  },
});
