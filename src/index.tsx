import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.scss';
import { Reducers } from './reducers';
import initialState from './initialState';
import { AppContainer } from './containers/AppContainer/AppContainer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(Reducers, initialState, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
