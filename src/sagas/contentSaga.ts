import { takeEvery, put, select } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import { setContent, contentFetchFailed } from '../actions';
import apiService from '../services/ApiService';

export function* contentSaga() {
    const locale = yield select((state) => state.settings.lang);
    try {
        const content = yield apiService.getContent(locale);
        if (content) {
            const payload = {
                texts: {
                    about: content.texts.aboutText,
                    backend: content.texts.backendText,
                    frontend: content.texts.frontendText,
                },
                navigation: content.navs,
                courses: content.courses,
                jobs: content.jobs,
                cvUrl: content.cv.url,
            };
            yield put(setContent(payload));
        } else {
            yield put(contentFetchFailed());
        }
    } catch (e) {
        yield put(contentFetchFailed());
    }
}

export default function* watchInitApp() {
    yield takeEvery(ActionsEnum.INIT_APP, contentSaga);
}
