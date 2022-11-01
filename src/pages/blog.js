import React from 'react'
import { graphql,Link } from 'gatsby'
import { Navbar } from '../components/Navbar';

const blog = ({data}) => {
    const {posts}=data.blog;
//Let's link to each blog from our blog page
  return (
    <div >
      <Navbar/>
    {/* <h2>My blog posts</h2> */}

    {posts.map(post=>(
      <article key={post.id} className="bg-color blog-page">
        <Link to={post.fields.slug}>
        <h2 className='change-mg'>
           {post.frontmatter.title}
        </h2>
        </Link>
        <small className='small'>
           {post.frontmatter.author},{post.frontmatter.date}
        </small>
        <p className='change'>
           Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <p className='change'>
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