import React from 'react'
import Link from 'gatsby-link'
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Menu from "../components/menu"
import Layout from "../components/layout"

export default function Template({data}){
    const post = data.markdownRemark

    return(
        <div>
        <Layout > 
        <SEO title="Blog-posts" />
     
     
        <h1> {post.frontmatter.title} </h1>
        <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
        <hr />
        <br /> 
        < div dangerouslySetInnerHTML = {{ __html: post.html}}/>
        <br /> 

        <Link to ="/blog">Go Back</Link>
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
                date
            }
        }
    }
`