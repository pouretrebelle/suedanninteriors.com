const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const caseStudyTemplate = path.resolve(`src/templates/case-study.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              type
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      switch (node.frontmatter.type) {
        case 'case-study':
          createPage({
            path: `/domestic/case/${node.frontmatter.slug}`,
            component: caseStudyTemplate,
            context: {
              slug: node.frontmatter.slug,
            }, // additional data can be passed via context
          })
          break
      }
    })
  })
}
