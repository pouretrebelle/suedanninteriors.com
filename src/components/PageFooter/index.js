import React, { Component } from 'react';

import styles from './PageFooter.module.sass';

class PageFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.footer}>
        <p>
          Sue Dann Interiors, Unit 24, Salisbury Road Business Park, Pewsey,
          Wiltshire, SN9 5PZ. United Kingdom
        </p>
        <p>
          Tel: +44 (0) 167 256 2275 | Fax: +44 (0) 872 011 4572 | Mob: +44 (0) 7836 358 635
        </p>
        <p>
          E:{' '}
          <a href={'mailto:sue@suedanninteriors.com'}>
            sue@suedanninteriors.com
          </a>
        </p>

        <div className={styles.biidWrapper}>
          <a href="http://www.biid.org.uk/member/sue-dann-interiors/">
            <img
              src={require('../../assets/biid.png')}
              alt="Sue is a member of the British Institute of Interior Design"
              className={styles.biidLogo}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default PageFooter;
