import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BlogPost = ({ location, pageContext, data }) => {
  console.log(location)
  const { nextPostSlug, previousPostSlug } = pageContext
  console.log(data)
  return (
    <div className="wrap-post">
      <h1>
        <Link to="/">←Home</Link> Hi! I'am StevPhan
      </h1>
      <section
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        itemProp="articleBody"
      />
      {nextPostSlug && (
        <Link to={nextPostSlug}>
          <h1>Next post</h1>{" "}
        </Link>
      )}
      {previousPostSlug && <Link to={previousPostSlug}>Previous post </Link>}
    </div>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
