import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageContent.module.sass';

const PageContent = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

PageContent.propTypes = {
  children: PropTypes.string,
};

export default PageContent;
