import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

import Layout from "../../components/layout"

const NotebookIndex = ({ data }) => {

  const posts = data.allMarkdownRemark;
  console.log(posts);

  return (
    <Layout title={'笔记列表'}>
      <Row>
        {data.allMarkdownRemark.group.map(({ fieldValue, edges }) => (
          <Col sm={6} key={fieldValue}>
            <Card className="mx-3 border-0">
              <Card.Header className="text-dark font-weight-bold">
                {fieldValue}
              </Card.Header>
              <ListGroup className="mb-2">
                {edges.map(({ node }) => (
                  <ListGroup.Item key={node.id} className="border-0 py-1">
                    <Link to={node.fields.slug.substr(0, node.fields.slug.length - 1)} className="stretched-link text-secondary">{node.frontmatter.title}</Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default NotebookIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___type, order: DESC}) {
      group(field: frontmatter___type) {
        fieldValue
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              date
              title
              type
            }
          }
        }
      }
    }
  }
`