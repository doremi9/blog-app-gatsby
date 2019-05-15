import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Ideas: What I am planning to do!!</h1>
    <p>This page is dedicated to brainstorming my future development ideas.</p>
    <Link to="/">Back to homepage</Link>
  </Layout>
)

export default SecondPage
