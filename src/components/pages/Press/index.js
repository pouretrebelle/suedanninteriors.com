import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../../PageContent';
import PageHeader from '../../PageHeader';
import Gallery from '../../common/Gallery';

import styles from './Press.module.sass';

const PressPage = ({ galleries }) => (
  <div>
    <PageHeader title='Press' />

    <Gallery
      images={galleries['press-wiltshire-living']}
      gridClassName={styles.gallery}
      aspectRatio={1.414}
    />
    <PageContent>
      <ul className={styles.pressList}>
        <li className={styles.pressItem}>
          <h2 className={styles.pressItemTitle}>
            <a
              href={'/assets/southwiltshirelivingarticle.pdf'}
              target={'_blank'}
            >
              Keeping Homes Fashionable
            </a>
          </h2>
          <p className={styles.pressItemOrigin}>Wiltshire Living</p>
          <time className={styles.pressItemTime}>July 2019</time>
        </li>
      </ul>
    </PageContent>

    <Gallery
      images={galleries['press-self-build-design']}
      gridClassName={styles.gallery}
      aspectRatio={1.414}
    />

    <PageContent>
      <ul className={styles.pressList}>
        <li className={styles.pressItem}>
          <h2 className={styles.pressItemTitle}>
            <a href={'/assets/selfbuilddesignarticle.pdf'} target={'_blank'}>
              Enhancing The Flow
            </a>
          </h2>
          <p className={styles.pressItemOrigin}>
            SelfBuild &amp; Design Magazine
          </p>
          <time className={styles.pressItemTime}>June 2016</time>
        </li>

        <li className={styles.pressItem}>
          <h2 className={styles.pressItemTitle}>
            <a
              href={
                'http://www.telegraph.co.uk/finance/property/advice/10520933/Best-20-interior-designers-in-Britain.html'
              }
              target={'_blank'}
            >
              Best 20 Interior Designers in Britain
            </a>
          </h2>
          <p className={styles.pressItemOrigin}>The Telegraph</p>
          <time className={styles.pressItemTime}>December 2013</time>
        </li>
      </ul>

      <hr />

      <ul className={styles.linkList}>
        <li className={styles.linkItem}>
          <a href='http://biid.org.uk/member/sue-dann' className={styles.link}>
            Sue Dann on the British Institute of Interior Design
          </a>
        </li>
        <li className={styles.linkItem}>
          <a
            href='http://www.houzz.co.uk/pro/suedann/sue-dann-interiors'
            className={styles.link}
          >
            Sue Dann on Houzz
          </a>
        </li>
      </ul>
    </PageContent>
  </div>
);

PressPage.propTypes = {
  galleries: PropTypes.object,
};

export default PressPage;
