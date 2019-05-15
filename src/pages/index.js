import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  
    <h1>Hi people</h1>
    <p>Welcome to my Blog !! .</p>
    <p>Lets build and write something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <br />
    <Link to="/blog/">See all Blogs</Link>
    <br />
    <br />
    <br />
  </Layout>
)

export default IndexPage
