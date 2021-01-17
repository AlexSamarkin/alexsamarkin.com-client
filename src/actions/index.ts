import { ActionsEnum } from './types';
import { Action, Article, CourseItem, JobItem, Locale, NavItem } from '../types';

export interface SendMessagePayload {
    name: string;
    email: string;
    message: string;
}

export const initApp = (): Action => ({
    type: ActionsEnum.INIT_APP as ActionsEnum.INIT_APP,
    payload: null,
});

export const sendMessage = ({ name, email, message }: SendMessagePayload): Action => ({
    type: ActionsEnum.SEND_MESSAGE,
    payload: { name, email, message },
});

export const sendSuccess = (): Action => ({
    type: ActionsEnum.SEND_SUCCESS,
    payload: null,
});

export const sendFailed = (): Action => ({
    type: ActionsEnum.SEND_FAILED,
    payload: null,
});

export const sending = (): Action => ({
    type: ActionsEnum.SENDING,
    payload: null,
});

export const setContent = (content: {
    jobs: JobItem[];
    texts: {
        about: string;
        backend: string;
        frontend: string;
    };
    cvUrl: string;
    courses: CourseItem[];
    navigation: NavItem[];
}) => ({
    type: ActionsEnum.SET_CONTENT,
    payload: content,
});

export const contentFetchFailed = () => ({
    type: ActionsEnum.CONTENT_FETCH_FAILED,
    payload: null,
});

export const loadArticles = () => ({
    type: ActionsEnum.LOAD_ARTICLES,
    payload: null,
});

export const setArticles = (articles: Article[]) => ({
    type: ActionsEnum.SET_ARTICLES,
    payload: { articles },
});

export const failedLoadingArticles = () => ({
    type: ActionsEnum.FAILED_LOADING_ARTICLES,
    payload: null,
});

export const loadArticle = (slug: string) => ({
    type: ActionsEnum.LOAD_ARTICLE,
    payload: { slug },
});

export const setArticle = (article: Article) => ({
    type: ActionsEnum.SET_ARTICLE,
    payload: { article },
});

export const failedLoadingArticle = () => ({
    type: ActionsEnum.FAILED_LOADING_ARTICLE,
    payload: null,
});

export const setLanguage = (lang: Locale) => ({
    type: ActionsEnum.SET_LANGUAGE,
    payload: { lang },
});

export const toggleLanguage = (lang: Locale) => ({
    type: ActionsEnum.TOGGLE_LANGUAGE,
    payload: { lang },
});

export type ActionTypes =
    | ReturnType<typeof initApp>
    | ReturnType<typeof toggleLanguage>
    | ReturnType<typeof setLanguage>
    | ReturnType<typeof failedLoadingArticle>
    | ReturnType<typeof setArticle>
    | ReturnType<typeof loadArticle>
    | ReturnType<typeof setArticles>
    | ReturnType<typeof failedLoadingArticles>
    | ReturnType<typeof loadArticles>
    | ReturnType<typeof contentFetchFailed>
    | ReturnType<typeof setContent>
    | ReturnType<typeof sending>
    | ReturnType<typeof sendSuccess>
    | ReturnType<typeof sendFailed>
    | ReturnType<typeof sendMessage>;
