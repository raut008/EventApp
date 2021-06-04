import { all, fork } from 'redux-saga/effects';
import { watchEventLoadSaga } from './eventSaga';

export default function* rootSaga() {
    yield all([
        fork(watchEventLoadSaga),
    ])
};