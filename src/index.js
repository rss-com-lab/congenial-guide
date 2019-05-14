import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import App from './views/App';
import Store from './store';
import Utils from './utils';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Router history={Utils.History}>
                <App />
            </Router>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
