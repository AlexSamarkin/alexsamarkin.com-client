import { ActionsEnum } from './types';
import { Action, Article, CourseItem, JobItem, Locale, NavItem } from '../types';

export interface SendMessagePayload {
    name: string;
    email: string;
    message: string;
}

export const initApp = (): Action => ({
    type: ActionsEnum.INIT_APP as ActionsEnum.INIT_APP,
});

export const sendMessage = ({ name, email, message }: SendMessagePayload): Action => ({
    type: ActionsEnum.SEND_MESSAGE,
    payload: { name, email, message },
});

export const sendSuccess = (): Action => ({
    type: ActionsEnum.SEND_SUCCESS,
});

export const sendFailed = (): Action => ({
    type: ActionsEnum.SEND_FAILED,
});

export const sending = (): Action => ({
    type: ActionsEnum.SENDING,
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
});

export const loadArticles = () => ({
    type: ActionsEnum.LOAD_ARTICLES,
});

export const setArticles = (articles: Article[]) => ({
    type: ActionsEnum.SET_ARTICLES,
    payload: { articles },
});

export const failedLoadingArticles = () => ({
    type: ActionsEnum.FAILED_LOADING_ARTICLES,
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
});

export const setLanguage = (lang: Locale) => ({
    type: ActionsEnum.SET_LANGUAGE,
    payload: { lang },
});

export const toggleLanguage = (lang: Locale) => ({
    type: ActionsEnum.TOGGLE_LANGUAGE,
    payload: { lang },
});
