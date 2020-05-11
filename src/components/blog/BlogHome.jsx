import * as React from "react";
import { navigate, StaticQuery, graphql } from "gatsby";

import Group from "../base/Group";
import TextLink from "../base/TextLink";
import Text from "../base/Text";

export default function BlogHome() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const posts = data.allMdx.edges;
        return (
          <Group flexDirection="column" gap={16}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div>
                  <TextLink
                    scale="title"
                    weight="bold"
                    onClick={() => navigate(`blog${node.fields.slug}`)}
                  >
                    {title}
                  </TextLink>
                  <Text color="lightGrey">{node.frontmatter.date}</Text>
                  <Text>{node.frontmatter.description || node.excerpt}</Text>
                </div>
              );
            })}
          </Group>
        );
      }}
    />
  );
}

const query = graphql`
  query BlogHomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
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
