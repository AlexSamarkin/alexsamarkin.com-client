import initialState from '../initialState';
import { SettingsState, StateSections } from '../state';
import { Action } from '../types';
import { ActionsEnum } from '../actions/types';

export const settingsReducer = (state = initialState[StateSections.SETTINGS], action: Action): SettingsState => {
    switch (action.type) {
        case ActionsEnum.SET_LANGUAGE:
            return {
                ...state,
                lang: action.payload.lang,
            };
        default:
            return state;
    }
};
