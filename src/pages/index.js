import React from 'react';

import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import Homepage from '../components/pages/Homepage';

const IndexPage = ({ data, pathContext }) => {
  const { galleriesJson: gallery } = data;

  return (
    <div>
      <Homepage
        slideshowImages={gallery.images.map(image => ({
          title: image.title,
          path: `kitchens/${image.path}`,
        }))}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    galleriesJson(slug: { eq: "kitchens" }) {
      images {
        title
        path
      }
    }
  }
`;

export default IndexPage;
