import React from 'react';
import Link from 'gatsby-link';

import Testimonials from '../components/pages/Testimonials';

const TestimonialPage = ({ data, pathContext }) => {
  const { allMarkdownRemark: testimonialsData } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <div>
      <Testimonials
        testimonials={testimonialsData.edges.map(testimonial => Object.assign({}, testimonial.node.frontmatter, { html: testimonial.node.html }))}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "testimonial" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            name
            address
            caseStudyTitle
            caseStudyLink
            caseStudyCover
          }
        }
      }
    }
  }
`;

export default TestimonialPage;
