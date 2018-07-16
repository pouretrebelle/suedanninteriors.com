import React from 'react';

import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';

const PlainPageTemplate = ({ data, pathContext }) => {
  const { markdownRemark: pageData } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <PageWrapper
      headerImage={
        pageData.frontmatter.cover &&
        `${pageSlug}/${pageData.frontmatter.cover}`
      }
    >
      <PageTitle title={pageData.frontmatter.title} />

      <PageContent>
        <main dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </PageContent>
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
