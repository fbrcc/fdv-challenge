import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router'

import registerServiceWorker from './registerServiceWorker';

import { store, history } from './core/store';

import { App } from './views/containers/App';

import Home from './views/containers/Home';

import './main.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App>
            <Route exact path="/" component={Home} />
        </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
