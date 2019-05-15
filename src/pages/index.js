import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  
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
    <Link to="/blog/"  
    style={{
            color : '#e76c67' , 
          }}> <h3>See all Blogs </h3></Link>
          
    <br />
    <br />
    <br />
  </Layout>
)

export default IndexPage
