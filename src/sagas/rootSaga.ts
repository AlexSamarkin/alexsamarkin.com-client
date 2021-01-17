import { spawn, all } from 'redux-saga/effects';
import watchSendMessage from './sendMessageSaga';
import watchInitApp from './contentSaga';
import watchLoadArticles from './blogSaga';
import watchSwitchLang from './langSaga';

export default function* rootSaga() {
    yield all([spawn(watchSendMessage), spawn(watchInitApp), spawn(watchLoadArticles), spawn(watchSwitchLang)]);
}
