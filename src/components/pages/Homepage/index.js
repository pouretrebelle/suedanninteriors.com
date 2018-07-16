import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Gallery from '../../common/Gallery';

import styles from './Homepage.module.sass';

@inject('UIStore')
@observer
class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gridImages, children, UIStore } = this.props;

    return (
      <div>
        <Gallery
          images={gridImages.slice(0, UIStore.windowWidth > 1200 ? 5 : 6)}
          gridClassName={styles.grid}
        >
          <div className={styles.contentWrapper}>
            {children}
          </div>
        </Gallery>
      </div>
    );
  }
}

Homepage.propTypes = {
  gridImages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
  })),
  children: PropTypes.node,
  UIStore: PropTypes.object,
}

export default Homepage;
