import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from  "./index.css"


const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    
    <p className={styles['main-para']}>    <strong  style = {{color : '#925FCF'}} > Hi All !! </strong> Welcome to my Always Creating !! 
      Always Creating is a blog series focussed on largely 3 domains : Development, Coding and Books.
      The blogs will be about tools, technologies and concepts which I come across while creating new projects. 
      Also occasionally some blogs will be on fascinating ideas and principles based on interesting books.
    </p>
    
    <strong>Lets Create Great things !! 😎  </strong> 
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` ,  marginTop: `1.45rem` }}>
      <Image />
    </div> */}
    <br />
    <br />

    <h3  style = {{marginTop: '2em'}} > Latest Articles</h3>
    <hr />
    <Link to={data.allMarkdownRemark.edges[0].node.frontmatter.path} style = {{color : '#925FCF'}}>
        {data.allMarkdownRemark.edges[0].node.frontmatter.title}
    </Link> 
    <br /> <br />
    <Link to={data.allMarkdownRemark.edges[1].node.frontmatter.path} style = {{color : '#925FCF'}} >
     {data.allMarkdownRemark.edges[1].node.frontmatter.title}
    </Link> 
    <br /> <br />

    <Link to={data.allMarkdownRemark.edges[2].node.frontmatter.path} style = {{color : '#925FCF'}}>
        {data.allMarkdownRemark.edges[2].node.frontmatter.title}
    </Link> 
    <br /> <br />


    <h3 style = {{marginTop: '2em'}}> Recommended Articles</h3>
    <hr />
    {/* <h4> */}
    < a href = "https://bit.ly/2jMkuMs"  style = {{color : '#925FCF'}} > Secret of being a top developer is building things! </a>
    <br /> <br />
    < a href = "https://www.taniarascia.com/blog/"  style = {{color : '#925FCF'}} > Taniarascia blog </a> 
    <br /> <br />
    < a href = "https://bit.ly/2qbWfLs"  style = {{color : '#925FCF'}} > Everything you Know about reading is wrong! </a> 
    {/* </h4> */}
    
    <br />



{/* 
    <Link to="/blog/"  
    style={{
            color : '#CF5F9C' , 
            // marginTop : '25px' ,
          }}> <h4>See all Blogs </h4>
    </Link>
           */}

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
