import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import FutureProjects from "../components/futureProjects"
import SEO from "../components/seo"


const projectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h3>What I am doing!</h3>
    <br />
    <Projects />
    <hr />
    <br />
    <br />

    <h3> What I am planning to do!</h3>
    <FutureProjects />
    <br />

   <Link to="/" style ={{color:'blue'}}>Back to homepage</Link>
  </Layout>
)

export default projectPage
