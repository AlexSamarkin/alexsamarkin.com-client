import { takeEvery, put, select } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import { setArticle, setArticles, failedLoadingArticles, failedLoadingArticle } from '../actions';
import apiService from '../services/ApiService';
import { Action } from '../types';

export function* blogSaga() {
    const locale = yield select((state) => state.settings.lang);
    const posts = yield apiService.getPosts(locale);
    if (posts) {
        yield put(setArticles(posts));
    } else {
        yield put(failedLoadingArticles());
    }
}

export function* postBySlugSaga(action: Action) {
    const locale = yield select((state) => state.settings.lang);
    const post = yield apiService.getPostBySlug(action.payload.slug, locale);
    if (post) {
        yield put(setArticle(post));
    } else {
        yield put(failedLoadingArticle());
    }
}

export default function* watchLoadArticles() {
    yield takeEvery(ActionsEnum.LOAD_ARTICLES, blogSaga);
    yield takeEvery(ActionsEnum.LOAD_ARTICLE, postBySlugSaga);
}
