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
          Sue&nbsp;Dann&nbsp;Interiors, Studio&nbsp;S14, Old&nbsp;Bakery&nbsp;Studios, Blewetts&nbsp;Wharf, Malpas&nbsp;Road, Truro, Cornwall, TR1&nbsp;1QH. United Kingdom
        </p>
        <p>
          Cornwall: +44&nbsp;(0)&nbsp;187&nbsp;285&nbsp;7249 | Mob: +44&nbsp;(0)&nbsp;7836&nbsp;358&nbsp;635
        </p>
        <p>
          E:{' '}
          <a href={'mailto:sue@suedanninteriors.com'}>
            sue@suedanninteriors.com
          </a>
        </p>

        <div className={styles.biidWrapper}>
          <a href="https://biid.org.uk/users/sue-dann">
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
