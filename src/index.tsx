import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from './services/apolloClient';
import AppContainer from './containers/AppContainer/AppContainer';

Sentry.init({
    dsn: 'https://7b8fe730c38b4e37991d54285abfc63b@o518088.ingest.sentry.io/5626589',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
});

import './index.scss';

const client = getApolloClient();

ReactDOM.render(
    <Sentry.ErrorBoundary fallback={'An error has occurred'}>
        <ApolloProvider client={client}>
            <AppContainer />
        </ApolloProvider>
    </Sentry.ErrorBoundary>,
    document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        await navigator.serviceWorker.register('/service-worker.js');
    });
}
