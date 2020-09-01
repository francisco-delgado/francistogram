import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { css, StyleSheet } from "aphrodite";

import MailchimpEmail from "../base/MailchimpEmail";

import colors from "../styles/colors";

export default function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <>
            <p className={css(styles.writtenBy)}>Written by</p>
            <h3 className={css(styles.author)}>Fran</h3>
            <p>A modern day re-inventor</p>
            <p>
              If my writing has helped you and you feel so inclined to leave me
              a tip here's my BTC address{" "}
              <b>bc1q9dry7zfcvtlypqc4pepw6pyrrm9pv4ha0v7del</b>
            </p>
            <p>Giving makes the world go round</p>
            <MailchimpEmail />
          </>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

const styles = StyleSheet.create({
  writtenBy: {
    marginBottom: 0,
    color: colors.lightGrey,
  },
  author: {
    marginTop: 2,
    marginBottom: 8,
  },
});
