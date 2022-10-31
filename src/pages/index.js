import React from "react"
import {graphql,Link} from "gatsby"

export default function Home({data}) {
  const {title, description} =data.site.siteMetadata

  return (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>

    <img alt="Google" src={data.image.publicURL} />

    <Link to="/blog"> Read my Blog </Link>
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