import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../layout/Layout";
import CenterColumn from "../layout/CenterColumn";

import Bio from "./Bio";
import SEO from "../base/seo";

import Text from "../base/Text";
import Divider from "../base/Divider";
import Group from "../base/Group";

type Props = {
  data: {
    mdx: {
      id: number;
      excerpy: string;
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
      fields: {
        readingTime: {
          text: string;
        };
      };
    };
  };
  pageContext: {
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
  };
};

function BlogPostTemplate(props: Props) {
  const post = props.data.mdx;
  const { previous, next } = props.pageContext;

  return (
    <Layout>
      <CenterColumn marginTop={100} marginBottom={100}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Text scale="display" marginBottom={0}>
          {post.frontmatter.title}
        </Text>
        <Text color="lightGrey" marginBottom={16}>
          {post.frontmatter.date} • {post.fields.readingTime.text}
        </Text>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />
        <Divider />
        <Bio />
        <Group justifyContent="space-between" fillChildren={true}>
          {previous ? (
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          ) : (
            <div />
          )}
        </Group>
      </CenterColumn>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
