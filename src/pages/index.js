import React from "react"
import {graphql,Link} from "gatsby"
 import { Navbar } from "../components/Navbar"
import Head from "../components/Head"
import blog from "./blog"
import About from "./about"
import Contact from "./contact";
import Projects from "./projects"

export default function Home({data}) {
  const {title, description} =data.site.siteMetadata
  //  return(
  //   <Layout>index page</Layout>
  //  )
  return (
    
    
  <div>
    <Navbar/>
    <Head/>
    <blog/>
    <About/>
    <Contact/>
    <Projects/>
    {/* <h1>{title}</h1>
    <p>{description}</p>

    <img alt="Google" src={data.image.publicURL} />

    <Link to="/blog"> Read my Blog </Link> */}
  </div>
  
  )
}

export const pageQuery = graphql`
  query MetadataQuery{
    site{
      siteMetadata{
        title
        description
    }
  }

  image:file(base:{eq: "google.jpeg"}){
    publicURL
  }
}
`