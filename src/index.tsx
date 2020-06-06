import * as serviceWorker from './serviceWorker';
import * as store from './mobx';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { router } from './mobx';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';

import './index.css';
import './plugins/sentry.plugin';
import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
