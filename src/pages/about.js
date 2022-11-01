import React from 'react'
import {Link} from "gatsby"
import {graphql,useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import "../css/main.css"

const About = () => {
    const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="about-page">
      <div className="section-center about-center">
         <Image fluid={fluid} className="about-img" />
        <article className="about-text">
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          
           
            <Link to="/contact" className="btn">
              contact me
            </Link>
            
          
        </article>
        
      </div>
    </header>
  )
}
const query = graphql`
  {
    file(relativePath: { eq: "head.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default About