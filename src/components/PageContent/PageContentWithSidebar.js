import React from 'react';
import PropTypes from 'prop-types';
import CloudinaryImage from '../common/CloudinaryImage';

import styles from './PageContent.module.sass';

const PageContentWithSidebar = ({ children, sidebarImage }) => (
  <div className={styles.wrapperWithSidebar}>
    <div className={styles.sidebarContent}>
      {children}
    </div>
    
    <figure className={styles.sidebarImage}>
      <CloudinaryImage
        imagePath={sidebarImage}
        options={{
          c: 'limit',
        }}
      />
    </figure>
  </div>
);

PageContentWithSidebar.propTypes = {
  children: PropTypes.node,
  sidebarImage: PropTypes.string.isRequired,
};

export default PageContentWithSidebar;
