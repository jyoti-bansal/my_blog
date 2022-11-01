import React from 'react'
import {Link} from "gatsby"
import {graphql,useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import "../css/main.css"
import SocialLinks from '../constants/socialLinks'
// ...GatsbyImageSharpFluid

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

const Head = () => {
    const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Jyoti</h1>
            <h4> Software Engineer </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Head