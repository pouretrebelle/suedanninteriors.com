import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Helmet from 'react-helmet';
import Gallery from '../../common/Gallery';

import styles from './Homepage.module.sass';

@inject('UIStore')
@observer
class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.UIStore.setStretchContentHeightFalse();
  }

  componentWillUnmount() {
    this.props.UIStore.setStretchContentHeightTrue();
  }

  render() {
    const { gridImages, children, UIStore } = this.props;

    return (
      <div>
        <Helmet title="Sue Dann Interiors" />

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
