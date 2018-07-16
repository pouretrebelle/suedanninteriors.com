import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import CloudinaryImage from '../../common/CloudinaryImage';

import PageContent from '../../PageContent';

import styles from './Homepage.module.sass';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { slideshowImages, children } = this.props;
    // console.log(slideshowImages);

    return (
      <div>
        <PageContent>
          {children}
        </PageContent>
      </div>
    );
  }
}

Homepage.propTypes = {
  slideshowImages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
  })),
  children: PropTypes.node,
}

export default Homepage;
