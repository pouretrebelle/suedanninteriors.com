import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buildCloudinaryImageUrl } from '../../../utils/imageUtils';

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
            <img
              src={buildCloudinaryImageUrl(image.path, {
                w: 200,
                h: 200,
                c: 'fill',
              })}
              className={styles.thumbnail}
            />
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
      path: PropTypes.string,
    })
  ),
};

export default Gallery;
