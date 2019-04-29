import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog Index" />
    <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <h3> {post.node.frontmatter.title}</h3>
            <br />
            <br />
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            
        </div>



      ))}

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about"> Go to About Page</Link>
  </Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          path
          author
          title
          date
        }
      }
    }
  
  }
}
`

export default BlogPage
