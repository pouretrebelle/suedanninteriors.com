import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;

    return (
      <div>
        {images.map((image, i) => (
          <figure key={i}>
            <img src={image.src} />
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
