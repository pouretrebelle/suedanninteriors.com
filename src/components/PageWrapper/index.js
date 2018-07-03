import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import Navigation from '../Navigation';

import styles from './PageWrapper.module.sass';

class PageWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;

    return (
      <div className={styles.pageWrapper}>
        <Helmet title={title} />
        <PageHeader />

        <div className={styles.mainWrapper}>
          <aside className={styles.navigation}>
            <Navigation />
          </aside>

          <div className={styles.contentWrapper}>
            <h1>{title}</h1>
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
