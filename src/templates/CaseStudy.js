import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Gallery from '../components/common/Gallery';

const CaseStudyTemplate = ({ data, pathContext }) => {
  const { markdownRemark: caseStudy, galleriesJson: gallery } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <PageWrapper
      title={`Case Study: ${caseStudy.frontmatter.title}`}
      headerImage={
        caseStudy.frontmatter.cover &&
        require(`../assets/images/${pageSlug}/${caseStudy.frontmatter.cover}`)
      }
    >
      <main dangerouslySetInnerHTML={{ __html: caseStudy.html }} />

      <Gallery
        images={gallery.images.map(image => ({
          title: image.title,
          src: require(`../assets/images/${pageSlug}/${image.path}`),
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
