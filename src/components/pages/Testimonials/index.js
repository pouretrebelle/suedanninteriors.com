import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../../PageContent';
import PageHeader from '../../PageHeader';
import CaseStudy from '../CaseStudy';

import styles from './Testimonials.module.sass';

const Testimonials = ({ testimonials }) => (
  <div>
    <PageHeader title="Testimonials" />

    {testimonials.map((testimonial, i) => (
      <CaseStudy
        studies={[{
          link: testimonial.caseStudyLink,
          title: testimonial.caseStudyTitle,
          cover: testimonial.caseStudyCover,
        }]}
        key={i}
        className={styles.article}
      >
        <blockquote
          className={styles.quote}
          dangerouslySetInnerHTML={{ __html: testimonial.html }}
        />
        <cite className={styles.quoteName}>
          {testimonial.name}
        </cite>
        <h4 className={styles.quoteAddress}>
          {testimonial.address}
        </h4>
      </CaseStudy>
    ))}

  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      html: PropTypes.string,
    })
  ),
}

export default Testimonials;
