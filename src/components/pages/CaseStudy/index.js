import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import CloudinaryImage from '../../common/CloudinaryImage';

import styles from './CaseStudy.module.sass';

class CaseStudy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { studies, children } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {children}
        </div>

        <ul className={styles.studyList}>
          {studies.map((study, i) => (
            <li key={i} className={styles.studyItem}>
              <Link to={study.link} className={styles.studyLink}>
                <CloudinaryImage
                  imagePath={study.cover}
                  aspectRatio={1/3}
                  options={{
                    c: 'fill',
                  }}
                />
                <h3 className={styles.studyTitle}>
                  {study.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CaseStudy.propTypes = {
  children: PropTypes.node,
  studies: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
  }))
}

export default CaseStudy;
