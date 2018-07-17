import React from 'react';
import Press from '../components/pages/Press';

const PressPage = ({ data }) => {
  const { galleriesJson: gallery } = data;
  return (
    <Press
      images={gallery.images.map(image => ({
        title: image.title,
        path: `press/${image.path}`,
      }))}
    />
  );
};

export const pageQuery = graphql`
  query PressPages {
    galleriesJson(slug: { eq: "press-self-build-design" }) {
      images {
        title
        path
      }
    }
  }
`;

export default PressPage;
