import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { css, StyleSheet } from "aphrodite";

export default function BlogHome() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allMdx.edges;
        return (
          <div style={{ margin: "20px 0 40px" }}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 840,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

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
