import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.sass';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;

    return (
      <div className={styles.grid}>
        {images.map((image, i) => (
          <figure key={i} className={styles.thumbnailWrapper}>
            <img src={image.src} className={styles.thumbnail} />
            <p>{image.title}</p>
          </figure>
        ))}
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};

export default Gallery;
