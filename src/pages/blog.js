import * as React from "react";

import Layout from "../components/layout/Layout";
import CenterColumn from "../components/layout/CenterColumn";

import Bio from "../components/bio";
import SEO from "../components/seo";
import BlogHome from "../components/blog/BlogHome";

export default function Blog() {
  return (
    <Layout>
      <CenterColumn>
        <Bio />
        <BlogHome />
      </CenterColumn>
    </Layout>
  );
}
