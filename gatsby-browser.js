import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ReactGA from 'react-ga';
import UIStore from './src/stores/UIStore';

ReactGA.initialize('UA-40297679-5');

exports.onClientEntry = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

exports.onRouteUpdate = ({ location }) => {
  ReactGA.pageview(location.pathname);
};

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider UIStore={UIStore}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
