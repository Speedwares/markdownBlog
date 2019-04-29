import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title= {post.frontmatter.title} />
    <div>
      <Link to="/blog"> Go Back </Link>
      <hr />
      <h2> {post.frontmatter.title}</h2>
      <br />
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <br />
      <div dangerouslySetInnerHTML={{__html: post.html }}/>


    </div>
    </Layout>
  )


}

export const postQuery = graphql`
query BlogPostPath($path: String!){
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html
     frontmatter{
       path
       title
       author
       date
     }
   
   }
}
`
