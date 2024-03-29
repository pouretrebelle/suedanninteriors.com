import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { GOOGLE_MAPS_API_KEY } from '../../../constants/googleMaps';

import PageContent from '../../PageContent';
import PageHeader from '../../PageHeader';
import GoogleMapEmbed from './GoogleMapEmbed';

import styles from './Contact.module.sass';

@inject('UIStore')
@observer
class ContactPage  extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.UIStore.setStretchContentHeightFalse();
  }

  componentWillUnmount() {
    this.props.UIStore.setStretchContentHeightTrue();
  }

  render() {
    return (
      <div>
        <PageHeader title="Contact" />

        <PageContent>
          <p>
            Our Somerset studio / showroom is open for appointment only; please contact
            us by email or telephone to arrange a meeting.
          </p>
          <p>
            <dl className={styles.contactList}>
              <dt className={styles.contactTerm}>
                Mob
              </dt>
              <dd className={styles.contactDescription}>
                +44 (0) 7836 358 635
              </dd>
              <dt className={styles.contactTerm}>
                Email
              </dt>
              <dd className={styles.contactDescription}>
                sue@suedanninteriors.com
              </dd>
              <dt className={styles.contactTerm}>
                Web
              </dt>
              <dd className={styles.contactDescription}>
                www.suedanninteriors.com
              </dd>
            </dl>
          </p>
          <p>
            Sue Dann Interiors <br />
            The Studio <br />
            20 Palmer Street <br />
            South Petherton <br />
            Somerset <br />
            TA13 5DD <br />
            United Kingdom
          </p>
        </PageContent>

        <GoogleMapEmbed
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div />}
          containerElement={<div style={{ height: 450 }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

ContactPage.propTypes = {
  UIStore: PropTypes.object,
}

export default ContactPage;
