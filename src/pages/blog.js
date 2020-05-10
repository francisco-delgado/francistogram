import * as React from "react";
import { css, StyleSheet } from "aphrodite";

import Layout from "../components/layout/Layout";

import Bio from "../components/bio";
import SEO from "../components/seo";
import BlogHome from "../components/blog/BlogHome";

export default function Blog() {
  return (
    <Layout>
      <div className={css(styles.container)}>
        <Bio />
        <BlogHome />
      </div>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    maxWidth: 640,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
