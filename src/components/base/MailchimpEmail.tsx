import * as React from "react";
import { css, StyleSheet } from "aphrodite";
import * as EmailValidator from "email-validator";

import { notify } from "react-notify-toast";

import addToMailchimp from "gatsby-plugin-mailchimp";

import Group from "./Group";

import colors from "../styles/colors";

export default function MailchimpEmail() {
  const [email, setEmail] = React.useState("");

  const handleSubmitEmail = () => {
    const isEmailValid = EmailValidator.validate(email);
    if (isEmailValid) {
      submitToMailchimp(email);
      setEmail("");
      notify.show("Welcome to the community :)", "custom", 3000, {
        background: colors.opal,
        text: colors.white,
      });
    } else {
      notify.show("Invalid email format", "custom", 3000, {
        background: colors.red,
        text: colors.white,
      });
    }
  };

  const submitToMailchimp = (email: string) => {
    const path = typeof window !== "undefined" ? window.location.href : "";
    addToMailchimp(email, {
      path,
    });
  };

  return (
    <div className={css(styles.newsletterContainer)}>
      <Group gap={16} justifyContent="center" alignItems="center">
        <input
          className={css(styles.input)}
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className={css(styles.button)} onClick={handleSubmitEmail}>
          Join the Community
        </button>
      </Group>
    </div>
  );
}

const styles = StyleSheet.create({
  input: {
    border: "none",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 3,
  },
  button: {
    cursor: "pointer",
    backgroundColor: colors.opal,
    color: colors.white,
    border: "none",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 3,
  },
  newsletterContainer: {
    maxWidth: 600,
    borderRadius: 8,
    background: colors.offWhite,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: -8,
    marginBottom: 16,
  },
});
