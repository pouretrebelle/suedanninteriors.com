import React, { Component } from 'react';
import Link from 'gatsby-link';

import styles from './Navigation.module.sass';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navigation}>
        <ul>
          <h2>Services</h2>
          <li>
            <Link to={'/domestic'}>Domestic</Link>
          </li>
          <li>
            <Link to={'/kitchens'}>Bespoke Kitchens</Link>
          </li>
          <li>
            <Link to={'/commercial'}>Commercial</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
        <ul>
          <h2>Company</h2>
          <li>
            <Link to={'/ethos'}>Company Ethos</Link>
          </li>
          <li>
            <Link to={'/sue-dann-profile'}>Sue Dann Profile</Link>
          </li>
          <li>
            <Link to={'/testimonials'}>Testimonials</Link>
          </li>
          <li>
            <Link to={'/press'}>Press</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
