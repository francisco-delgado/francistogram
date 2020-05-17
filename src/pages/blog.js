import * as React from "react";

import Layout from "../components/layout/Layout";
import CenterColumn from "../components/layout/CenterColumn";

import Bio from "../components/blog/Bio";
import SEO from "../components/base/seo";
import BlogHome from "../components/blog/BlogHome";

export default function Blog() {
  return (
    <Layout>
      <CenterColumn paddingTop={100}>
        <Bio />
        <BlogHome />
      </CenterColumn>
    </Layout>
  );
}
