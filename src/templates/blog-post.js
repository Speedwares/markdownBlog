import React from 'react'
import {Link} from 'gatsby'

export default function Template({data}) {
  const post = data.markdownRemark
  return (
    <div>
      <Link to="/blog"> Go Back </Link>
      <hr />
      <h2> {post.frontmatter.title}</h2>
      <br />
      <h4>Posted by {post.frontmatter.author} on {post.node.frontmatter.date}</h4>
      <br />
      <div dangerouslySetInnerHTML={{__html: post.html }}/>


    </div>
  )


}

export const postQuery = graphql`
query BlogPostPath($path: String!){
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html
     frontmatter{
     
     }
   
   }
}
`
