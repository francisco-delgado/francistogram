import * as React from "react";
import { navigate, useStaticQuery, graphql } from "gatsby";

import Group from "../base/Group";
import TextLink from "../base/TextLink";
import Text from "../base/Text";

export default function BlogHome() {
  const data = useStaticQuery(query);

  const edges = data.allMdx.edges;
  console.log(edges);
  return (
    <Group flexDirection="column" gap={16}>
      {edges.map(({ node: post }) => {
        const title = post.frontmatter.title || post.fields.slug;
        return (
          <>
            <TextLink
              scale="title"
              weight="bold"
              onClick={() => navigate(`blog${post.fields.slug}`)}
            >
              {title}
            </TextLink>
            <Text color="lightGrey" marginBottom={8}>
              {post.frontmatter.date} • {post.fields.readingTime.text}
            </Text>
            <p style={{ marginBottom: 8 }}>
              {post.frontmatter.description || post.excerpt}
            </p>
          </>
        );
      })}
    </Group>
  );
}

const query = graphql`
  query BlogHomeQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
