import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../layout/Layout";
import CenterColumn from "../layout/CenterColumn";

import Bio from "./Bio";
import SEO from "../seo";

import TextLink from "../base/TextLink";
import Text from "../base/Text";
import Divider from "../base/Divider";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <CenterColumn>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Text scale="display" marginBottom={0}>
            {post.frontmatter.title}
          </Text>
          <Text color="lightGrey" marginBottom={16}>
            {post.frontmatter.date}
          </Text>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr />
          <Divider />
          <Bio />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </CenterColumn>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
