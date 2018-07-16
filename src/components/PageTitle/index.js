import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.sass';

const PageTitle = ({ title }) => <h1 className={styles.title}>{title}</h1>;

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
