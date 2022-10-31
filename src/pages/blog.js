import React from 'react'
import { graphql,Link } from 'gatsby'

const blog = ({data}) => {
    const {posts}=data.blog;
//Let's link to each blog from our blog page
  return (
    <div>
    <h1>My blog posts</h1>

    {posts.map(post=>(
      <article key={post.id}>
        <Link to={post.fields.slug}>
        <h2>
           {post.frontmatter.title}
        </h2>
        </Link>
        <small>
           {post.frontmatter.author},{post.frontmatter.date}
        </small>
        <p>
           {post.excerpt}
        </p>
      </article>
    ))}
    </div>
  )
}

export const query = graphql`
  query  {
    blog:allMarkdownRemark {
      posts:nodes {
        fields{
            slug
        }
        frontmatter {
          date(fromNow: true)
          author
          title
        }
        excerpt
        id
      }
    }
  }
  `
export default blog