import React from 'react';

import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

const PlainPageTemplate = ({ data, pathContext }) => {
  const { markdownRemark: pageData } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <div>
      <PageTitle
        title={pageData.frontmatter.title}
        headerImage={
          pageData.frontmatter.cover &&
          `${pageSlug}/${pageData.frontmatter.cover}`
        }
      />

      <PageContent>
        <main dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </PageContent>
    </div>
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
