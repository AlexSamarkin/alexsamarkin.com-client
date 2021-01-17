import { takeEvery, put } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import { sendSuccess, sendFailed } from '../actions';
import apiService from '../services/ApiService';
import { Action } from '../types';

export function* sendMessageSaga(action: Action) {
    const res = yield apiService.sendMessage(action.payload.name, action.payload.email, action.payload.message);
    if (res) {
        yield put(sendSuccess());
    } else {
        yield put(sendFailed());
    }
}

export default function* watchSendMessage() {
    yield takeEvery(ActionsEnum.SEND_MESSAGE, sendMessageSaga);
}
