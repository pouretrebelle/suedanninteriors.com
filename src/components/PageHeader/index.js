import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { buildCloudinaryImageUrl } from '../../utils/imageUtils';

import styles from './PageHeader.module.sass';

const PageHeader = ({ title, subtitle, headerImage }) => (
  <div>
    <Helmet title={title} />

    {headerImage && (
      <figure className={styles.headerImageWrapper}>
        <img
          src={buildCloudinaryImageUrl(headerImage, {
            w: 726,
            h: 242,
            c: 'fill',
          })}
        />
      </figure>
    )}

    {subtitle &&
      <h2 className={styles.subtitle}>{subtitle}</h2>
    }

    <h1 className={styles.title}>{title}</h1>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headerImage: PropTypes.string,
};

export default PageHeader;
