import React from 'react';

import PageWrapper from '../components/PageWrapper';

const PlainPageTemplate = ({ data, pathContext }) => {
  const { markdownRemark: pageData } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <PageWrapper
      title={pageData.frontmatter.title}
      headerImage={
        pageData.frontmatter.cover &&
        `${pageSlug}/${pageData.frontmatter.cover}`
      }
    >
      <main dangerouslySetInnerHTML={{ __html: pageData.html }} />
    </PageWrapper>
  );
};

export const pageQuery = graphql`
  query PlainPageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover
      }
    }
  }
`;

export default PlainPageTemplate;
