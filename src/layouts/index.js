import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CLOUDINARY_URL } from '../constants/urls';

import '../styles/application.sass';

import PageWrapper from '../components/PageWrapper';

const Layout = props => {
  const { children, data } = props;
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>

        <meta name="description" content="Sue Dann Interiors create classic and contemporary interiors for your home or commercial premises." />
        <meta name="author" content="Sue Dann" />
        <meta name="keywords" content="Sue Dann, Interior Design, Home Counties, Bespoke Kitchens, Commercial Interiors, Contemporary Design" />
        <meta name="viewport" content="width=device-width" />

        <link rel="icon" type="image/png" href={`${CLOUDINARY_URL}/w_16/assets/monologo.png`} sizes="16x16"/>
        <link rel="icon" type="image/png" href={`${CLOUDINARY_URL}/w_32/assets/monologo.png`} sizes="32x32"/>
        <link rel="icon" type="image/png" href={`${CLOUDINARY_URL}/w_64/assets/monologo.png`} sizes="64x64"/>

        <meta property="og:image" content={`${CLOUDINARY_URL}/w_1200,h_630,c_lpad,b_rgb:bbc6b8/assets/logo.png`}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={`${CLOUDINARY_URL}/w_500/assets/logo.png`}/>

      </Helmet>

      <PageWrapper>
        {children()}
      </PageWrapper>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
