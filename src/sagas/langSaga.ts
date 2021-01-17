import { takeEvery, put } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import langService from '../services/LanguageService';
import { initApp, setLanguage } from '../actions';
import { Action, Locale } from '../types';

export function* langSaga(action: Action) {
    const { payload } = action;
    const lang = payload.lang ?? Locale.EN;
    yield langService.setLanguage(lang);
    yield put(setLanguage(lang));
    yield put(initApp());
}

export default function* watchSwitchLang() {
    yield takeEvery(ActionsEnum.TOGGLE_LANGUAGE, langSaga);
}
