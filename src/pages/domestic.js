import React from 'react';
import Link from 'gatsby-link';

import PageWrapper from '../components/PageWrapper';
import Gallery from '../components/common/Gallery';

const DomesticPage = ({ data, pathContext }) => {
  const { markdownRemark: pageData, allMarkdownRemark: caseStudies } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <PageWrapper
      title={pageData.frontmatter.title}
      headerImage={
        pageData.frontmatter.cover &&
        require(`../assets/images/${pageSlug}/${pageData.frontmatter.cover}`)
      }
    >
      <main dangerouslySetInnerHTML={{ __html: pageData.html }} />

      {caseStudies.edges.map((caseStudy, i) => (
        <p key={i}>
          <Link to={`/case-study/${caseStudy.node.frontmatter.slug}`}>
            {caseStudy.node.frontmatter.title}
          </Link>
        </p>
      ))}
    </PageWrapper>
  );
};

export const pageQuery = graphql`
  query DomesticPageQuery {
    markdownRemark(frontmatter: { slug: { eq: "domestic" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "case-study" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover
            slug
          }
        }
      }
    }
  }
`;

export default DomesticPage;
