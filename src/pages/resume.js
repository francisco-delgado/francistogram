import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import CenterColumn from "../components/layout/CenterColumn";

import Bio from "../components/blog/Bio";
import SEO from "../components/base/seo";
import BlogHome from "../components/blog/BlogHome";

const RESUME_PDF = "resume_2020_pdf";
const RESUME_PNG = "resume_2020_png";

export default function Blog() {
  const data = useStaticQuery(query);

  const edges = data.allFile.edges;
  const resumePdf = edges.find(edge => edge.node.name === RESUME_PDF).node;
  const resumePng = edges.find(edge => edge.node.name === RESUME_PNG).node;
  return (
    <Layout>
      <CenterColumn paddingTop={100}>
        <img src={resumePng.publicURL} />
        <a href={resumePdf.publicURL} download={true}>
          Download PDF
        </a>
      </CenterColumn>
    </Layout>
  );
}

const query = graphql`
  query ResumeQuery {
    allFile(filter: { name: { in: ["resume_2020_pdf", "resume_2020_png"] } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`;
