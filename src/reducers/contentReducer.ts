import initialState from '../initialState';
import { ContentState, StateSections } from '../state';
import { Action } from '../types';
import { ActionsEnum } from '../actions/types';

export const contentReducer = (state = initialState[StateSections.CONTENT], action: Action): ContentState => {
    switch (action.type) {
        case ActionsEnum.SET_CONTENT:
            return {
                ...state,
                jobs: action.payload.jobs,
                texts: {
                    about: action.payload.texts.about,
                    backend: action.payload.texts.backend,
                    frontend: action.payload.texts.frontend,
                },
                cvUrl: action.payload.cvUrl,
                courses: action.payload.courses,
                navigation: action.payload.navigation,
            };
        default:
            return state;
    }
};
