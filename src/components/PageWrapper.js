import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class PageWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Helmet title={title} />
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageWrapper;
