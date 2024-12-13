import { all, fork } from 'redux-saga/effects';

import authSaga from '@@stores/auth/saga';
import meetingSaga from '@@stores/meeting/saga';

export function* rootSagas() {
  yield all([authSaga, meetingSaga].map((saga) => fork(saga)));
}
