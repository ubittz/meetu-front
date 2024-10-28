import { all, fork } from 'redux-saga/effects';

export function* rootSagas() {
  // yield all([authSvcSaga].map((saga) => fork(saga)));
  yield all([].map((saga) => fork(saga)));
}
