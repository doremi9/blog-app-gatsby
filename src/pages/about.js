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
    The blog series will have majorly 3 domains : Development, Coding and Books. I will mostly write about tools and 
     technologies which i learn while creating products. Also I do plan to share
     occasionally some fascinating ideas and principles which i will come across while reading books. 
    </p>
    <hr />
    <br />

  <h1>  Me 🙄  </h1>
  <br />
  <p> 
  Hi! I am Vinci, A final year dual degree student at IIIT Allahabad. I love coding and creating things. 
  My hobbies include reading books, any outdoor activity 😍 and sometimes long talks about anything 😃. 
  These days I am mostly active on 
  {` `} 
  <a href={`https://github.com/avvinci`} style= {{color:'blue'}}>
   Github </a>
    and {` `}
    <a href={`https://www.goodreads.com/user/show/90010944-abhinav-vinci`}  style= {{color:'blue'}}>
      Goodreads </a>
      .
  </p>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` ,marginTop: `1.45rem` }}>
  <Displaypic />
    </div>
<br />

</Layout>

)




export default AboutPage; 