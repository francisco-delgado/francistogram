module.exports = {
  siteMetadata: {
    title: "Francisco Delgado Personal Blog",
    author: "Francisco Delgado",
    description:
      "A starter personal blog with styled components, dark mode, and Netlify CMS.",
    siteUrl: "https://gatsby-starter-blog-demo.netlify.com/",
    social: {
      twitter: "francistogram",
    },
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-feed-mdx",
    "gatsby-plugin-aphrodite",
    "netlify-plugin-gatsby-cache",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://francistogram.us10.list-manage.com/subscribe/post?u=e4d99fbb2c2061f7dfadebade&amp;id=f34f0f7155",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          {
            resolve: "gatsby-remark-vscode",
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: "gatsby-remark-smartypants",
          },
          {
            resolve: `gatsby-remark-embedder`,
          },
        ],
      },
    },
    "gatsby-remark-reading-time",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-168717941-1",
      },
    },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "Francisco Delgado Blog",
    //     short_name: "GatsbyJS",
    //     start_url: "/",
    //     background_color: "#ffffff",
    //     theme_color: "#663399",
    //     display: "minimal-ui",
    //     icon: "content/assets/gatsby-icon.png",
    //   },
    // },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "font-family": "Jost, sans-serif",
          "link-color": "black",
          "link-decoration": "none",
          "link-hover-decoration": "none",
        },
      },
    },
  ],
};
