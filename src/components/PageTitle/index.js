import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styles from './PageTitle.module.sass';

const PageTitle = ({ title }) => (
  <div>
    <Helmet title={title} />
    <h1 className={styles.title}>{title}</h1>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
