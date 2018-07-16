import React, { Component } from 'react';
import Link from 'gatsby-link';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames';

import styles from './Navigation.module.sass';

@observer
class Navigation extends Component {

  @observable mobileNavOpen = {
    'services': false,
    'domestic': false,
  }

  constructor(props) {
    super(props);
  }

  toggleNavList = (category) => {
    this.mobileNavOpen[category] = !this.mobileNavOpen[category];
  }

  render() {

    const listClasses = (category) => classNames({
      [styles.navList]: true,
      [styles.navListOpen]: this.mobileNavOpen[category],
      [styles.navListClosed]: !this.mobileNavOpen[category],
    });

    return (
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logoWrapper}>
          <img
            src={require('../../assets/logo.jpg')}
            alt="Sue Dann Interiors"
          />
        </Link>

        <ul className={listClasses('services')}>
          <h2
            className={styles.navTitle}
            onClick={() => this.toggleNavList('services')}
          >
            Services
          </h2>
          <li className={styles.navItem}>
            <Link
              to="/domestic"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Domestic
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/kitchens"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Bespoke Kitchens
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/commercial"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Commercial
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/products"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Products
            </Link>
          </li>
        </ul>

        <ul className={styles.navList} className={listClasses('company')}>
          <h2
            className={styles.navTitle}
            onClick={() => this.toggleNavList('company')}
          >
            Company
          </h2>
          <li className={styles.navItem}>
            <Link
              to="/ethos"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Company Ethos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/sue-dann-profile"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Sue Dann Profile
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/testimonials"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Testimonials
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/press"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
            >
              Press
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/contact"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              exact={false}
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
