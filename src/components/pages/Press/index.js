import React from 'react';

import PageWrapper from '../../PageWrapper';
import PageTitle from '../../PageTitle';

import styles from './Press.module.sass';

const PressPage = () => (
  <PageWrapper>
    <PageTitle title="Press" />

    <ul className={styles.pressList}>
      <li className={styles.pressItem}>
        <h3 className={styles.pressItemTitle}>
          <a href={'/assets/selfbuilddesignarticle.pdf'} target={'_blank'}>
            Enhancing The Flow
          </a>
        </h3>
        <p className={styles.pressItemOrigin}>
          SelfBuild &amp; Design Magazine
        </p>
        <time className={styles.pressItemTime}>June 2016</time>
      </li>

      <li className={styles.pressItem}>
        <h3 className={styles.pressItemTitle}>
          <a
            href={
              'http://www.telegraph.co.uk/finance/property/advice/10520933/Best-20-interior-designers-in-Britain.html'
            }
            target={'_blank'}
          >
            Best 20 Interior Designers in Britain
          </a>
        </h3>
        <p className={styles.pressItemOrigin}>The Telegraph</p>
        <time className={styles.pressItemTime}>December 2013</time>
      </li>
    </ul>

    <ul className={styles.linkList}>
      <li className={styles.linkItem}>
        <a href="http://biid.org.uk/member/sue-dann" className={styles.link}>
          Sue Dann on the British Institute of Interior Design
        </a>
      </li>
      <li className={styles.linkItem}>
        <a
          href="http://www.houzz.co.uk/pro/suedann/sue-dann-interiors"
          className={styles.link}
        >
          Sue Dann on Houzz
        </a>
      </li>
    </ul>
  </PageWrapper>
);

export default PressPage;
