import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/main.scss"
import slugify from "../../utils/slugify"
import Logo from "../components/logo"

const IndexPage = ({ data }) => {
  console.log(data)
  const blogPosts = data.allMarkdownRemark.nodes || []
  const handleClick = () => {
    window.print()
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Logo />
      <Link to="using-typescript">To TypesSript </Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`
