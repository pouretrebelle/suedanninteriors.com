import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { buildCloudinaryImageUrl } from '../../../utils/imageUtils';

import styles from './Gallery.module.sass';

@inject('UIStore')
@observer
class Gallery extends Component {

  lightboxElement = undefined;
  @observable lightboxOpen = false;
  @observable lightboxImageIndex = 0;

  constructor(props) {
    super(props);
  }

  openLightbox = (index) => {
    this.lightboxOpen = true;
    this.lightboxImageIndex = index;
  }

  closeLightbox = () => {
    this.lightboxOpen = false;
  }

  onNextButtonClicked = () => {
    this.lightboxImageIndex++;
  }

  onPrevButtonClicked = () => {
    this.lightboxImageIndex--;
  }

  render() {
    const { images, UIStore } = this.props;

    return (
      <div>
        { this.lightboxOpen &&
            <div
              className={styles.lightbox}
              ref={element => this.lightboxElement = element}
              onClick={(e) => {
                if (e.target === this.lightboxElement) this.closeLightbox()
              }}
            >

            { this.lightboxImageIndex < images.length &&
              <button onClick={this.onNextButtonClicked} className={styles.nextButton}>
                Next
              </button>
            }
            { this.lightboxImageIndex > 0 &&
              <button onClick={this.onPrevButtonClicked} className={styles.prevButton}>
                Previous
              </button>
            }
            <button onClick={this.closeLightbox} className={styles.closeButton}>
              Close
            </button>

            <div className={styles.lightboxImageWrapper}>
              <img
                src={buildCloudinaryImageUrl(images[this.lightboxImageIndex].path, {
                  h: UIStore.windowHeight - 100,
                  c: 'limit',
                })}
                className={styles.lightboxImage}
              />
            </div>
          </div>
        }

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
                title={image.title}
                onClick={() => this.openLightbox(i)}
              />
            </figure>
          ))}
        </div>
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
  UIStore: PropTypes.object,
};

export default Gallery;
