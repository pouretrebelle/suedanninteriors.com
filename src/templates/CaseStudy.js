import React from 'react';

import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';
import Gallery from '../components/common/Gallery';

const CaseStudyTemplate = ({ data, pathContext }) => {
  const { markdownRemark: caseStudy, galleriesJson: gallery } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <PageWrapper
      headerImage={
        caseStudy.frontmatter.cover &&
        `${pageSlug}/${caseStudy.frontmatter.cover}`
      }
    >
      <PageTitle title={`Case Study: ${caseStudy.frontmatter.title}`} />

      <PageContent>
        <main dangerouslySetInnerHTML={{ __html: caseStudy.html }} />
      </PageContent>

      <Gallery
        images={gallery.images.map(image => ({
          title: image.title,
          path: `${pageSlug}/${image.path}`,
        }))}
      />
    </PageWrapper>
  );
};

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover
      }
    }
    galleriesJson(slug: { eq: $slug }) {
      images {
        title
        path
      }
    }
  }
`;

export default CaseStudyTemplate;
