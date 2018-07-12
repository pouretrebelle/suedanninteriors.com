import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Gallery from '../components/common/Gallery';

const GalleryPageTemplate = ({ data, pathContext }) => {
  const { markdownRemark: pageData, galleriesJson: gallery } = data;
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
  query GalleryPageBySlug($slug: String!) {
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

export default GalleryPageTemplate;
