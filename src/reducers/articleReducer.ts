import initialState from '../initialState';
import { ArticlesState, StateSections } from '../state';
import { Action } from '../types';
import { ActionsEnum } from '../actions/types';

export const articlesReducer = (
  state = initialState[StateSections.BLOG],
  action: Action,
): ArticlesState => {
  switch (action.type) {
    case ActionsEnum.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
      };
    case ActionsEnum.CONTENT_FETCH_FAILED:
      return {
        ...state,
        articles: [],
      };
    case ActionsEnum.SET_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload.article,
      };
    default:
      return state;
  }
};
