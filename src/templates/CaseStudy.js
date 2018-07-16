import React from 'react';

import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import Gallery from '../components/common/Gallery';

const CaseStudyTemplate = ({ data, pathContext }) => {
  const { markdownRemark: caseStudy, galleriesJson: gallery } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <div>
      <PageHeader
        subtitle="Case Study"
        title={caseStudy.frontmatter.title}
        headerImage={
          caseStudy.frontmatter.cover &&
          `${pageSlug}/${caseStudy.frontmatter.cover}`
        }
      />

      <PageContent>
        <main dangerouslySetInnerHTML={{ __html: caseStudy.html }} />
      </PageContent>

      <Gallery
        images={gallery.images.map(image => ({
          title: image.title,
          path: `${pageSlug}/${image.path}`,
        }))}
      />
    </div>
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
