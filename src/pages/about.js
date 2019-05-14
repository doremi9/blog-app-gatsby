import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (

  <Layout>
  <SEO title="About Me" />
  
  <h1> About Me </h1>
  <p> 
  Final year dual degree student at IIIT Allahabad.
Mostly active on Github and Goodreads
Summer intern at Amazon, Bangalore
  </p>
  <Link to="/"> Go back to the homepage</Link>
</Layout>

)




export default AboutPage; 