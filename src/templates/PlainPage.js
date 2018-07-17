import React from 'react';

import PageContent from '../components/PageContent';
import PageContentWithSidebar from '../components/PageContent/PageContentWithSidebar';
import PageHeader from '../components/PageHeader';

const PlainPageTemplate = ({ data, pathContext }) => {
  const { markdownRemark: pageData } = data;
  const { slug: pageSlug } = pathContext;

  const ContentComponent = pageData.frontmatter.sidebar ? PageContentWithSidebar : PageContent;

  return (
    <div>
      <PageHeader
        title={pageData.frontmatter.title}
        headerImage={
          pageData.frontmatter.cover &&
          `${pageSlug}/${pageData.frontmatter.cover}`
        }
      />

      <ContentComponent
        sidebarImage={
          pageData.frontmatter.sidebar &&
          `${pageSlug}/${pageData.frontmatter.sidebar}`
        }
      >
        <main dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </ContentComponent>
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
        sidebar
      }
    }
  }
`;

export default PlainPageTemplate;
