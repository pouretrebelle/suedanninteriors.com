import React, { Component } from 'react';
import Link from 'gatsby-link';

import styles from './Navigation.module.sass';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.navList}>
          <h2 className={styles.navTitle}>Services</h2>
          <li className={styles.navItem}>
            <Link
              to="/domestic"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Domestic
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/kitchens"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Bespoke Kitchens
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/commercial"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Commercial
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/products"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Products
            </Link>
          </li>
        </ul>
        <ul className={styles.navList}>
          <h2 className={styles.navTitle}>Company</h2>
          <li className={styles.navItem}>
            <Link
              to="/ethos"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Company Ethos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/sue-dann-profile"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Sue Dann Profile
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/testimonials"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Testimonials
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/press"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Press
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/contact"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Contact
            </Link>
          </li>
        </ul>

        <p className={styles.slogan}>
          for all your interior<br />design requirements
        </p>
      </div>
    );
  }
}

export default Navigation;
