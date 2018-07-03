import React, { Component } from 'react';

import styles from './PageHeader.module.sass';

class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.header}>
        for all your interior design requirements
      </div>
    );
  }
}

export default PageHeader;
