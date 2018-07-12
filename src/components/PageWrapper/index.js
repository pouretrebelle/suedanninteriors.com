import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
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
        <Helmet title={title} />

        <div className={styles.pageWrapper}>
          <aside className={styles.navigation}>
            <Link to="/">
              <img
                src={require('../../assets/logo.jpg')}
                alt="Sue Dann Interiors"
                className={styles.logo}
              />
            </Link>
            <Navigation />
          </aside>

          <div className={styles.mainWrapper}>
            {headerImage &&
              <img
                src={buildCloudinaryImageUrl(headerImage, {
                  w: 726,
                  h: 242,
                  c: 'fill',
                })}
              />
            }
            <div className={styles.contentWrapper}>
              <h1>{title}</h1>
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
