import initialState from '../initialState';
import { ContactState, StateSections } from '../state';
import { Action, SendingStatus } from '../types';
import { ActionsEnum } from '../actions/types';

export const contactReducer = (state = initialState[StateSections.CONTACT], action: Action): ContactState => {
    switch (action.type) {
        case ActionsEnum.SENDING:
            return {
                ...state,
                status: SendingStatus.SENDING,
            };
        case ActionsEnum.SEND_FAILED:
            return {
                ...state,
                status: SendingStatus.FAILED,
            };
        case ActionsEnum.SEND_SUCCESS:
            return {
                ...state,
                status: SendingStatus.SUCCESS,
            };
        default:
            return state;
    }
};
