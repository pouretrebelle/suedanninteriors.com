import React from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../../constants/googleMaps';

import PageContent from '../../PageContent';
import PageTitle from '../../PageTitle';
import GoogleMapEmbed from './GoogleMapEmbed';

import styles from './Contact.module.sass';

const ContactPage = () => (
  <div>
    <PageTitle title="Contact" />

    <PageContent>
      <p>
        Our Pewsey studio / showroom is open for apointment only; please contact
        us by email or telephone to arrange a meeting
      </p>
      <p>
        Tel Pewsey: 44(0)1672 562275<br />
        Tel Bath: 44(0)1225 341501<br />
        Fax: 44(0)872 011 4572<br />
        Mob: 44(0)7836 358 635<br />
        Email: sue@suedanninteriors.com<br />
        Web: www.suedanninteriors.com<br />
      </p>
      <p>
        Sue Dann Interiors<br />
        Unit 24<br />
        Salisbury Road Business Park<br />
        Pewsey<br />
        Wiltshire<br />
        SN9 5PZ<br />
        United Kingdom
      </p>
    </PageContent>

    <GoogleMapEmbed
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
      loadingElement={<div />}
      containerElement={<div style={{ height: 350 }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
);

export default ContactPage;
