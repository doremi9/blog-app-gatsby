import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPage = ({data}) => (


<Layout>
  <SEO title="Blogs" />
  <h2  style={{color:'#333333'}}> Latest Blogs </h2>
  <hr />
  
  {data.allMarkdownRemark.edges.map(post=> (
      <div key={post.node.id}>
      <Link to={post.node.frontmatter.path}> 
        <h3 style={{color:'#333333'}}>{post.node.frontmatter.title}</h3>
      </Link>

      <small  style={{color:'#333333'}}>{post.node.frontmatter.date}</small>
      <br />
      <br />
    
          <Link to={post.node.frontmatter.path} style={{color:'#666666'}}> Read More </Link>

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