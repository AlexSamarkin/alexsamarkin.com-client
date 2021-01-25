import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from './services/apolloClient';
import AppContainer from './containers/AppContainer/AppContainer';

import './index.scss';

const client = getApolloClient();

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppContainer />
    </ApolloProvider>,
    document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
