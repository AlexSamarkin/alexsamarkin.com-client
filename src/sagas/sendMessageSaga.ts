import { takeEvery, put } from 'redux-saga/effects';
import { ActionsEnum } from '../actions/types';
import { sendSuccess, sendFailed, sendMessage } from '../actions';
import apiService from '../services/ApiService';

export function* sendMessageSaga(action: ReturnType<typeof sendMessage>) {
    const { payload } = action;
    const res = yield apiService.sendMessage(payload.name, payload.email, payload.message);
    if (res) {
        yield put(sendSuccess());
    } else {
        yield put(sendFailed());
    }
}

export default function* watchSendMessage() {
    yield takeEvery(ActionsEnum.SEND_MESSAGE, sendMessageSaga);
}
