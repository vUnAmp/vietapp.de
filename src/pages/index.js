import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/main.scss"
import slugify from "../../utils/slugify"
import Logo from "../components/logo"

const IndexPage = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.nodes || []
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Logo /> */}
      {blogPosts.map((blog, i) => (
        <Link
          className="link-blog"
          key={i}
          to={slugify(blog.frontmatter.title)}
        >
          {blog.frontmatter.title}{" "}
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`
