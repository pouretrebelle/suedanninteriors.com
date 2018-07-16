import React from 'react';

import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import CaseStudy from '../components/pages/CaseStudy';

const DomesticPage = ({ data, pathContext }) => {
  const { markdownRemark: pageData, allMarkdownRemark: caseStudies } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <PageWrapper
      headerImage={
        pageData.frontmatter.cover &&
        require(`../assets/images/${pageSlug}/${pageData.frontmatter.cover}`)
      }
    >
      <PageTitle title={pageData.frontmatter.title} />

      <CaseStudy
        studies={
          caseStudies.edges.map((caseStudy, i) => ({
            link: `/domestic/${caseStudy.node.frontmatter.slug}`,
            title: caseStudy.node.frontmatter.title,
            cover: `${caseStudy.node.frontmatter.slug}/${caseStudy.node.frontmatter.cover}`,
          }))
        }
      >
        <main dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </CaseStudy>
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
