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
      <CenterColumn paddingTop={100}>
        <object
          data={url}
          type="application/pdf"
          style={{ width: 680, height: 760 }}
        >
          <embed src={url} type="application/pdf" />
        </object>
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
