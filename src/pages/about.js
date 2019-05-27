import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Displaypic from "../display-pic";
import "./index.css"


const AboutPage = () => (

  <Layout>
  <SEO title="About Me" />
  <br />
    <h3>  About the Blog Series   </h3>
    <p> 
    Always Creating is a blog series  majorly focussing on 3 domains : Development, Coding and Books. I will mostly write about tools and 
     technologies which i learn while creating products. Also I do plan to share
     occasionally some fascinating ideas and principles which i will come across while reading books. 
    </p>
    <br />
    <hr />
    <br />

  <h3>  About Me 🙄  </h3>
  <p> 
  Hi! I love coding and creating things. 
  My hobbies include reading books, any outdoor activity 😍 and sometimes long talks about anything 😃. 
  These days I am mostly active on 
  {` `} 
  <a href={`https://github.com/doremi9`} style= {{color:'blue'}}>Github </a>.
  </p>
  {/* <p> I have workes at Amazon as an SDE Intern.  </p> */}

  <div style={{ maxWidth: `300px`, marginBottom: `3.45rem` ,marginTop: `2.75rem` , borderRadius : '50%'}}>
  <Displaypic />
    </div>
<br />

</Layout>

)


export default AboutPage; 