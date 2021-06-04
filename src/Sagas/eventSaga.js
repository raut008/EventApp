import { put, call, takeLatest } from "redux-saga/effects";
import { loadEventRequest, loadEventSuccess, loadEventFailure, loadSingleEventRequest } from "../Actions/EventAction";
import { getEventContent } from "../Api/GetEventContent";

export function* getDataSaga() {
    try {
        const data = yield call(getEventContent);
        yield put(loadEventSuccess(data));
    } catch (error) {
        yield put(loadEventFailure(error.toString()));
    }
}

export function* getSingleEventContent() {

}

export function* watchEventLoadSaga() {
    yield takeLatest(loadEventRequest, getDataSaga);
}

export function* watchSingleEventLoadSaga() {
    yield takeLatest(loadSingleEventRequest, getSingleEventContent);
}