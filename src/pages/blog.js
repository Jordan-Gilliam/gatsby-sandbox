import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1 id="blogHeader">Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h1 id="blogTitle">{post.node.frontmatter.title}</h1>
          <small>
            Posted by {post.node.frontmatter.author} on
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link id="blogCTA" to={post.node.frontmatter.path}>
            Read More
          </Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
