import React from 'react'
import Link from 'gatsby-link'
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Layout from "../components/layout"

export default function Template({data}){
    const post = data.markdownRemark

    return(
        <div>
        <Layout > 
        <SEO title="Blog-posts" />
     
     
        <h2> {post.frontmatter.title} </h2>
        <h4> {post.frontmatter.date}</h4>
        <hr />
        <br /> 
        < div dangerouslySetInnerHTML = {{ __html: post.html}}/>
        <br /> 

        <Link to ="/blog" style = {{color : 'blue'}}>Go Back</Link>
        <br /> 

        </Layout>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter : {path : {eq : $path} }){
            html
            frontmatter{
                path 
                title
                author
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`