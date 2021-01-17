import { Article, CourseItem, JobItem, Locale, NavItem, SendingStatus } from './types';

export enum StateSections {
    CONTACT = 'contact',
    CONTENT = 'content',
    BLOG = 'blog',
    SETTINGS = 'settings',
}

export interface ContactState {
    status: SendingStatus;
}

export interface SettingsState {
    lang: Locale;
}

export interface ArticlesState {
    articles: Article[];
    currentArticle: Article | null;
}

export interface ContentState {
    jobs: JobItem[];
    texts: {
        about: string;
        backend: string;
        frontend: string;
    };
    cvUrl: string;
    courses: CourseItem[];
    navigation: NavItem[];
}

export interface State {
    [StateSections.CONTACT]: ContactState;
    [StateSections.CONTENT]: ContentState;
    [StateSections.BLOG]: ArticlesState;
    [StateSections.SETTINGS]: SettingsState;
}
