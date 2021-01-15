import { State, StateSections } from './state';
import {
  Article, CourseItem, JobItem, NavItem, SendingStatus,
} from './types';
import langService from './services/LanguageService';

export const initialState: State = {
  [StateSections.CONTACT]: {
    status: SendingStatus.IDLE,
  },
  [StateSections.CONTENT]: {
    jobs: [] as JobItem[],
    texts: {
      about: '',
      backend: '',
      frontend: '',
    },
    cvUrl: '',
    courses: [] as CourseItem[],
    navigation: [] as NavItem[],
  },
  [StateSections.BLOG]: {
    articles: [] as Article[],
    currentArticle: null,
  },
  [StateSections.SETTINGS]: {
    lang: langService.getLanguage(),
  },
};

export default initialState;
