/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const slugify = require("./utils/slugify")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = require.resolve("./src/templates/blog-post.js")

  const result = await graphql(`
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
  `)

  const posts = result.data.allMarkdownRemark.nodes
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug =
        index === 0 ? null : `/${slugify(posts[index - 1].frontmatter.title)}/`
      const nextPostSlug =
        index === posts.length - 1
          ? null
          : `/${slugify(posts[index + 1].frontmatter.title)}/`
      const slug = slugify(post.frontmatter.title)

      createPage({
        path: slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
