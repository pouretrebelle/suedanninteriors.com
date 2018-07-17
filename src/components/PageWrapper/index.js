import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';

import PageFooter from '../PageFooter';
import Navigation from '../Navigation';

import styles from './PageWrapper.module.sass';

@inject('UIStore')
@observer
class PageWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title, headerImage, UIStore } = this.props;

    const contentClasses = classNames({
      [styles.contentWrapper]: true,
      [styles.contentWrapperStretched]: UIStore.stretchContentHeight,
    })

    return (
      <div>
        <div className={styles.pageWrapper}>
          <aside className={styles.navigation}>
            <Navigation />
          </aside>

          <div className={contentClasses}>
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
  UIStore: PropTypes.object,
};

export default PageWrapper;
