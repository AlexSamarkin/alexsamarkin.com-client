import { takeEvery, put, select } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import { setContent, contentFetchFailed } from '../actions';
import apiService from '../services/ApiService';

export function* contentSaga() {
  const locale = yield select((state) => state.settings.lang);
  const content = yield apiService.getContent(locale);
  if (content) {
    console.log(content)
    yield put(setContent({
      texts: {
        about: content.texts.aboutText,
        backend: content.texts.backendText,
        frontend: content.texts.frontendText
      },
      navigation: content.navs,
      courses: content.courses,
      jobs: content.jobs,
      cvUrl: content.cv.url
    }));
  } else {
    yield put(contentFetchFailed());
  }
}

export default function* watchInitApp() {
  yield takeEvery(ActionsEnum.INIT_APP, contentSaga);
}
