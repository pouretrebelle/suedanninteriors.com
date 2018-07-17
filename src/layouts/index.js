import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/application.sass';

import PageWrapper from '../components/PageWrapper';

const Layout = props => {
  const { children, data } = props;
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sue Dann Interiors create classic and contemporary interiors for your home or commercial premises.' },
          { name: 'Author', content: 'Sue Dann' },
          { name: 'keywords', content: 'Sue Dann, Interior Design, Home Counties, Bespoke Kitchens, Commercial Interiors, Contemporary Design' },
          { name: 'viewport', content: 'width=device-width' },
        ]}
      />
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
