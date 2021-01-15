import { takeEvery, put } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import langService from '../services/LanguageService';
import { initApp, setLanguage } from '../actions';
import { Action } from '../types';

export function* langSaga(action: Action) {
  yield langService.setLanguage(action.payload.lang);
  yield put(setLanguage(action.payload.lang));
  yield put(initApp());
}

export default function* watchSwitchLang() {
  yield takeEvery(ActionsEnum.TOGGLE_LANGUAGE, langSaga);
}
