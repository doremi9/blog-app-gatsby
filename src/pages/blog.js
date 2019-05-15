import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPage = ({data}) => (


<Layout>
  <SEO title="Blogs" />
  <h1> Latest Blogs </h1>

  {data.allMarkdownRemark.edges.map(post=> (
      <div key={post.node.id}>
      <h3>{post.node.frontmatter.title}</h3>
      <small>{post.node.frontmatter.date}</small>
      <br />
      <br />
    
          <Link to={post.node.frontmatter.path}> Read More </Link>

      <br />
      <br />

      </div> 
  ))}
  
</Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges{
          node{
            id
            frontmatter{
              path
              title
              date(formatString: "MMMM DD, YYYY")
              author
            }
          }
        }
      }
}
`

export default BlogPage; 