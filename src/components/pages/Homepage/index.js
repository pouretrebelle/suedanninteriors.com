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
    const { slideshowImages } = this.props;
    // console.log(slideshowImages);
    return (
      <div>
        <PageContent>
          <p><b>Are you restyling your home, kitchen, hotel or restaurant</b> – or just looking for that one lamp or rug to finish off your own scheme – we can help.</p>
          <p>We offer a complete Interior Design service to domestic and commercial clients.</p>
          <p>Sue Dann Interiors is a BIID recognised Interior Design practice established for 15 years led by a professional and creative designer with over 30 years design experience.</p>
          <hr/>
          <p>The company was founded in 1998 in Buckinghamshire and serviced the Home Counties and London for seven years.</p>
          <p>After a move to Bath in 2005 we have undertaken many projects in Somerset and Wiltshire.</p>
          <p>We now have our main studio / showroom in Pewsey in Wiltshire which is ideally located for clients anywhere along the M4 corridor from Bath to London.</p>
        </PageContent>
      </div>
    );
  }
}

Homepage.propTypes = {
  slideshowImages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
  }))
}

export default Homepage;
