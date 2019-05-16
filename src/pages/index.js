import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  
    <h3>Hi All </h3>
    <p>Welcome to my Always Creating !! A Blog Website dedicated to learning and sharing 
      ideas and technologies, which I will come across while creating products. </p>
      <strong>Lets Create Great things !! 😎  </strong> 
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` ,  marginTop: `1.45rem` }}>
      <Image />
    </div>
    <br />
    <h3> Latest Articles</h3>
    <hr />
    <Link to={data.allMarkdownRemark.edges[0].node.frontmatter.path} style = {{color : '#925FCF'}}>
       <h4> {data.allMarkdownRemark.edges[0].node.frontmatter.title}</h4>
    </Link> 
    <br />
    <Link to={data.allMarkdownRemark.edges[1].node.frontmatter.path} style = {{color : '#925FCF'}} >
       <h4> {data.allMarkdownRemark.edges[1].node.frontmatter.title}</h4>
    </Link> 
    <br />

    <Link to={data.allMarkdownRemark.edges[2].node.frontmatter.path} style = {{color : '#925FCF'}}>
       <h4> {data.allMarkdownRemark.edges[2].node.frontmatter.title}</h4>
    </Link> 

    <br />

    <Link to="/blog/"  
    style={{
            color : '#CF5F9C' , 
          }}> <h3>See all Blogs </h3></Link>
          
    <br />
    <br />
    <br />
  </Layout>
)

export const pageQuery = graphql`
query MainIndexQuery{
    allMarkdownRemark(limit:3, sort: { fields: [frontmatter___date], order: DESC }) {
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

export default IndexPage
