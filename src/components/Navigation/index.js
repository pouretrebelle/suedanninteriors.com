import React, { Component } from 'react';

import styles from './Navigation.module.sass';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.navigation}>Navigation</div>;
  }
}

export default Navigation;
