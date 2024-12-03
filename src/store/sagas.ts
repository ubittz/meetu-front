import { all, fork } from 'redux-saga/effects';

import authSaga from '@@stores/auth/saga';

export function* rootSagas() {
  yield all([authSaga].map((saga) => fork(saga)));
}
