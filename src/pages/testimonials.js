import React from 'react';
import Link from 'gatsby-link';

import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

const DomesticPage = ({ data, pathContext }) => {
  const { allMarkdownRemark: testimonials } = data;
  const { slug: pageSlug } = pathContext;

  return (
    <div>
      <PageTitle title="Testimonials" />

      <PageContent>
        {testimonials.edges.map((testimonial, i) => (
          <article key={i}>
            <h3>{testimonial.node.frontmatter.name}</h3>
            <h4>{testimonial.node.frontmatter.address}</h4>
            <div dangerouslySetInnerHTML={{ __html: testimonial.node.html }} />
          </article>
        ))}
      </PageContent>
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
          }
        }
      }
    }
  }
`;

export default DomesticPage;
