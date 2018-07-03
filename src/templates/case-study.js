import React from 'react';
import Helmet from 'react-helmet';

// import '../css/blog-post.css'; // make it pretty!

const CaseStudyTemplate = ({ data, pathContext }) => {
  const { markdownRemark: caseStudy, galleriesJson: gallery } = data;
  const { slug } = pathContext;

  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${caseStudy.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{caseStudy.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: caseStudy.html }}
        />
      </div>

      {gallery.images.map((image, i) => (
        <figure key={i}>
          <img src={require(`../assets/images/${slug}/${image.path}`)} />
          <p>{image.title}</p>
        </figure>
      ))}
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
