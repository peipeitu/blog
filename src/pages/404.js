import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
<<<<<<< HEAD
=======
import SEO from "../components/seo"
>>>>>>> parent of 140045d... Updates

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
<<<<<<< HEAD
=======
        <SEO title="404: Not Found" />
>>>>>>> parent of 140045d... Updates
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`