import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import CloudinaryImage from '../CloudinaryImage';
import { buildCloudinaryImageUrl } from '../../../utils/imageUtils';

import styles from './Gallery.module.sass';

const PIXEL_RATIO = window.devicePixelRatio || 1;

@inject('UIStore')
@observer
class Gallery extends Component {

  lightboxElement = undefined;
  @observable lightboxOpen = false;
  @observable lightboxImageIndex = 0;

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    if (this.lightboxOpen) this.closeLightbox();
  }

  onKeyUpped = (e) => {
    switch (e.keyCode) {
      case 27: // ESC
        this.closeLightbox();
        break;

      case 37: // left arrow
        this.onPrevButtonClicked();
        break;

      case 39: // right arrow
        this.onNextButtonClicked();
        break;
    }
  }

  openLightbox = (index) => {
    this.lightboxOpen = true;
    this.lightboxImageIndex = index;
    window.addEventListener('keyup', this.onKeyUpped);
  }

  closeLightbox = () => {
    this.lightboxOpen = false;
    window.removeEventListener('keyup', this.onKeyUpped);
  }

  onNextButtonClicked = () => {
    if (this.lightboxImageIndex === (this.props.images.length - 1)) {
      this.lightboxImageIndex = 0;
    }
    else {
      this.lightboxImageIndex++;
    }
  }

  onPrevButtonClicked = () => {
    if (this.lightboxImageIndex === 0) {
      this.lightboxImageIndex = (this.props.images.length - 1);
    }
    else {
      this.lightboxImageIndex--;
    }
  }

  onLightboxImageClicked = (e) => {
    const { UIStore } = this.props;
    if (e.pageX > UIStore.windowWidth / 2) {
      this.onNextButtonClicked();
    }
    else {
      this.onPrevButtonClicked();
    }
  }

  render() {
    const { images, UIStore, gridClassName, children } = this.props;

    const gridClasses = classNames({
      [styles.grid]: true,
      [gridClassName]: !!gridClassName,
    })

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

            { this.lightboxImageIndex < (images.length -1) &&
              <button onClick={this.onNextButtonClicked} className={styles.nextButton}>
                Next
              </button>
            }
            { this.lightboxImageIndex > 0 &&
              <button onClick={this.onPrevButtonClicked} className={styles.prevButton}>
                Prev
              </button>
            }
            <button onClick={this.closeLightbox} className={styles.closeButton}>
              Close
            </button>

            <div className={styles.loader} />

            <div className={styles.lightboxImageWrapper}>
              <img
                src={buildCloudinaryImageUrl(images[this.lightboxImageIndex].path, {
                  // round up to nearest 50
                  h: Math.ceil((UIStore.windowHeight - 160) / 50) * 50  * PIXEL_RATIO,
                  c: 'limit',
                })}
                className={styles.lightboxImage}
                key={this.lightboxImageIndex}
                onClick={this.onLightboxImageClicked}
              />
            </div>
            <div className={styles.captionWrapper}>
              <div className={styles.caption}>
                {images[this.lightboxImageIndex].title}
              </div>
              <p className={styles.indicator}>
              {(this.lightboxImageIndex + 1)} / {images.length}
              </p>
            </div>
          </div>
        }

        <div className={gridClasses}>
          {images.map((image, i) => (
            <figure key={i} className={styles.thumbnailWrapper}>
              <CloudinaryImage
                imagePath={image.path}
                aspectRatio={1}
                options={{
                  c: 'fill',
                }}
                title={image.title}
                onClick={() => this.openLightbox(i)}
              />
            </figure>
          ))}

          {children}
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
  gridClassName: PropTypes.string,
  children: PropTypes.node,
  UIStore: PropTypes.object,
};

export default Gallery;
