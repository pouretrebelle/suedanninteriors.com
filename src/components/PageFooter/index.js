import React, { Component } from 'react';

import styles from './PageFooter.module.sass';

class PageFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.footer}>Footer</div>;
  }
}

export default PageFooter;
