import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { reaction, observable } from 'mobx';
import classNames from 'classnames';
import { buildCloudinaryImageUrl } from '../../../utils/imageUtils';

import styles from './CloudinaryImage.module.sass';

@inject('UIStore')
@observer
class CloudinaryImage extends Component {
  imageElement = undefined;
  pixelRatio = 1;
  @observable imageWidth = 0;
  @observable hasLoaded = false;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.pixelRatio = window.devicePixelRatio || 1;

    // recalculate image size when window is resized
    // but debounce by a second so it only happens with final size
    this.resizeReaction = reaction(
      () => this.props.UIStore.windowWidth,
      this.sizeImage,
      {
        delay: 1000,
        fireImmediately: true,
      }
    );
  }

  componentWillUnmount() {
    // dispose of reaction
    if (this.resizeReaction) this.resizeReaction();
  }

  onImageMount = element => {
    if (!element) return;

    this.imageElement = element;

    element.onload = () => {
      this.hasLoaded = true;
    };

    this.sizeImage();
  };

  sizeImage = () => {
    if (!this.imageElement) return;

    const newWidth = this.imageElement.clientWidth * this.pixelRatio;

    // don't resize if it's smaller than the current
    if (newWidth < this.imageWidth) return;

    // round up to the nearest 50
    this.imageWidth = Math.ceil(newWidth / 50) * 50;
  };

  render() {
    const {
      imagePath,
      aspectRatio,
      options,
      className,
      transitionOpacity,
      UIStore, // eslint-disable-line
      ...props
    } = this.props;

    const imageClasses = classNames({
      [className]: !!className,
      [styles.image]: true,
      [styles.imageTransition]: transitionOpacity,
      [styles.imageHidden]: !this.imageWidth || !this.hasLoaded,
    });

    const dimensions = { w: this.imageWidth };
    if (aspectRatio) {
      dimensions.h = Math.round(this.imageWidth * aspectRatio);
    }
    const imageOptions = Object.assign({}, dimensions, options || {});

    const image = (
      <img
        ref={this.onImageMount}
        src={buildCloudinaryImageUrl(imagePath, imageOptions)}
        key={imagePath}
        className={imageClasses}
        {...props}
      />
    );

    return aspectRatio ? (
      <figure
        className={styles.aspectRatioWrapper}
        style={{
          paddingBottom: `${Math.round(aspectRatio * 10000) / 100}%`,
        }}
      >
        {image}
      </figure>
    ) : (
      image
    );
  }
}

CloudinaryImage.propTypes = {
  UIStore: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.object,
  imagePath: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number,
  transitionOpacity: PropTypes.bool,
};

CloudinaryImage.defaultProps = {
  transitionOpacity: true,
};

export default CloudinaryImage;
