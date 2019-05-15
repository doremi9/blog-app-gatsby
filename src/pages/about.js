import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Displaypic from "../display-pic";
const AboutPage = () => (

  <Layout>
  <SEO title="About Me" />
  <br />
    <h1>  About the Blog Series   </h1>


    <p> 
    The blog series will have majorly 3 domains : Development, Coding and Books. I will mostly write about what i have recently 
    learnt in deveopment field. Sometimes sharing the books and related info which fascinate me. 
    </p>

    <br />
  <h1>  Me 🙄  </h1>

  <br />
  <p> 
  Hi! I am Vinci, A final year dual degree student at IIIT Allahabad. I love coding and building things. 
  My hobbies include reading books, any outdoor activity 😍 and sometimes chatting about anything 😃. 
  These days I am mostly active on Github and Goodreads.
  </p>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` ,marginTop: `1.45rem` }}>
  <Displaypic />
    </div>
<br />

  

</Layout>

)




export default AboutPage; 