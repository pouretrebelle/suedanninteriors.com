import React from 'react';

import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import Homepage from '../components/pages/Homepage';

const IndexPage = ({ data, pathContext }) => {
  const {
    markdownRemark: pageData,
    galleriesJson: gallery,
  } = data;

  return (
    <div>
      <Homepage
        gridImages={gallery.images.map(image => ({
          title: image.title,
          path: `kitchens/${image.path}`,
        }))}
      >
        <main dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </Homepage>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { slug: { eq: "index" } }) {
      html
    }
    galleriesJson(slug: { eq: "kitchens" }) {
      images {
        title
        path
      }
    }
  }
`;

export default IndexPage;
