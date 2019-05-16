import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Ideas: What I am doing!</h2>
    <br />
    <p>This section is dedicated to the projects I am working on</p>
    <hr />
    <h2>Ideas: What I am planning to do!</h2>
    <br />
    <p>This section is dedicated to brainstorming my future development ideas.</p>
    <Link to="/" style ={{color:'blue'}}>Back to homepage</Link>
  </Layout>
)

export default SecondPage
