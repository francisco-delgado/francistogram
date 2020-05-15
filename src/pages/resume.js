import * as React from "react";
import { navigate, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import CenterColumn from "../components/layout/CenterColumn";

import Bio from "../components/blog/Bio";
import SEO from "../components/base/seo";
import BlogHome from "../components/blog/BlogHome";

export default function Blog() {
  const data = useStaticQuery(query);

  const url = data.file.publicURL;
  return (
    <Layout>
      <CenterColumn>
        <embed src={url} style={{ width: 680, height: 905 }}></embed>
      </CenterColumn>
    </Layout>
  );
}

const query = graphql`
  query ResumeQuery {
    file(name: { eq: "resume_2018" }) {
      publicURL
    }
  }
`;
