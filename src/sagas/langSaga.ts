import { takeEvery, put } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import langService from '../services/LanguageService';
import { initApp, setLanguage, toggleLanguage } from '../actions';

export function* langSaga(action: ReturnType<typeof toggleLanguage>) {
    const { payload } = action;
    const lang = payload.lang;
    yield langService.setLanguage(lang);
    yield put(setLanguage(lang));
    yield put(initApp());
}

export default function* watchSwitchLang() {
    yield takeEvery(ActionsEnum.TOGGLE_LANGUAGE, langSaga);
}
