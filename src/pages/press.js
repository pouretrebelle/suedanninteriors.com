import React from 'react';
import Press from '../components/pages/Press';

const PressPage = ({ data }) => {
  const { edges } = data.allGalleriesJson;

  const galleries = {};
  edges.forEach(gallery => {
    galleries[gallery.node.slug] = gallery.node.images.map(image => ({
      title: image.title,
      path: `press/${image.path}`,
    }));
  });

  return <Press galleries={galleries} />;
};

export const pageQuery = graphql`
  query PressPages {
    allGalleriesJson(filter: { slug: { regex: "/^press.+/gm" } }) {
      edges {
        node {
          slug
          images {
            title
            path
          }
        }
      }
    }
  }
`;

export default PressPage;
