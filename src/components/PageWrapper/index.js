import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buildCloudinaryImageUrl } from '../../utils/imageUtils';

import PageFooter from '../PageFooter';
import Navigation from '../Navigation';

import styles from './PageWrapper.module.sass';

class PageWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title, headerImage } = this.props;

    return (
      <div>
        <div className={styles.pageWrapper}>
          <aside className={styles.navigation}>
            <Navigation />
          </aside>

          <div className={styles.mainWrapper}>
            {headerImage && (
              <img
                src={buildCloudinaryImageUrl(headerImage, {
                  w: 726,
                  h: 242,
                  c: 'fill',
                })}
              />
            )}
            <div className={styles.contentWrapper}>
              {children}
            </div>
          </div>
        </div>

        <PageFooter />
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
};

export default PageWrapper;
