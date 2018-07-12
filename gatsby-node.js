const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const CaseStudyTemplate = path.resolve(`src/templates/CaseStudy.js`);
  const GalleryPageTemplate = path.resolve(`src/templates/GalleryPage.js`);
  const PlainPageTemplate = path.resolve(`src/templates/PlainPage.js`);

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
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      switch (node.frontmatter.type) {
        case 'case-study':
          createPage({
            path: `/domestic/${node.frontmatter.slug}`,
            component: CaseStudyTemplate,
            context: {
              slug: node.frontmatter.slug,
            }, // additional data can be passed via context
          });
          break;
        case 'gallery-page':
          createPage({
            path: `/${node.frontmatter.slug}`,
            component: GalleryPageTemplate,
            context: {
              slug: node.frontmatter.slug,
            },
          });
          break;
        case 'plain-page':
          createPage({
            path: `/${node.frontmatter.slug}`,
            component: PlainPageTemplate,
            context: {
              slug: node.frontmatter.slug,
            },
          });
          break;
      }
    });
  });
};
