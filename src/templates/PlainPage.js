import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Gallery from '../components/Gallery';

const PlainPageTemplate = ({ data, pathContext }) => {
  const { markdownRemark: pageData } = data;
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
      }
    }
  }
`;

export default PlainPageTemplate;
