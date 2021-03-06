import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CloudinaryImage from '../common/CloudinaryImage';

import styles from './PageHeader.module.sass';

const PageHeader = ({ title, subtitle, headerImage }) => (
  <div>
    <Helmet title={`${title} | Sue Dann Interiors`} />

    {headerImage && (
      <CloudinaryImage
        imagePath={headerImage}
        aspectRatio={1/3}
        options={{
          c: 'fill',
        }}
      />
    )}

    <header className={styles.titleWrapper}>
      {subtitle &&
        <h2 className={styles.subtitle}>{subtitle}</h2>
      }

      <h1 className={styles.title}>{title}</h1>
    </header>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headerImage: PropTypes.string,
};

export default PageHeader;
