import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

          <div className={styles.contentWrapper}>
            {children}
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
};

export default PageWrapper;
