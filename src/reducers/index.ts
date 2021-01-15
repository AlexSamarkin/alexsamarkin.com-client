import { combineReducers } from 'redux';
import { State, StateSections } from '../state';
import { contactReducer } from './contactReducer';
import { contentReducer } from './contentReducer';
import { articlesReducer } from './articleReducer';
import { settingsReducer } from './settingsReducer';

export const Reducers = combineReducers<State>({
  [StateSections.CONTACT]: contactReducer,
  [StateSections.CONTENT]: contentReducer,
  [StateSections.BLOG]: articlesReducer,
  [StateSections.SETTINGS]: settingsReducer,
});
