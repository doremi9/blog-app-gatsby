import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Displaypic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "vinci.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300 , maxHeight: 300,  quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Displaypic
