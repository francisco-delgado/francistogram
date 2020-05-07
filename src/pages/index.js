import React from "react"
import { Link } from "gatsby"

import { Layout, Menu, Breadcrumb, Button, Typography } from "antd"

import Group from "../components/base/Group"
import Text from "../components/base/Text"

import Footer from "../components/layout/Footer"

// import Layout from "../components/layout"
import SEO from "../components/seo"
const { Title } = Typography
const { Header, Content } = Layout

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hi, I'm Francisco."

    return (
      <Layout>
        <Header theme="light">Francisco.</Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            // className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            Content
          </div>
        </Content>
        <Footer />
      </Layout>

      // <Layout location={this.props.location} title={siteTitle}>
      //   <SEO
      //     title="Home"
      //     keywords={["francisco", "delgado", "blog", "photography"]}
      //   />
      //   <h1>
      //     Hey people{" "}
      //     <span role="img" aria-label="wave emoji">
      //       👋
      //     </span>
      //   </h1>
      //   <p>Welcome to your new Gatsby website. You are on your home page.</p>
      //   <p>
      //     This starter comes out of the box with styled components and Gatsby's
      //     default starter blog running on Netlify CMS.
      //   </p>
      //   <p>Now go build something great!</p>
      //   <Link to="/blog/">
      //     <Button type="primary" size="large">
      //       Go to Blog
      //     </Button>
      //   </Link>
      // </Layout>
    )
  }
}

export default IndexPage
