import { all, fork } from 'redux-saga/effects';

import authSaga from '@@stores/auth/saga';
import meetingSaga from '@@stores/meeting/saga';
import paymentSaga from '@@stores/payment/saga';

export function* rootSagas() {
  yield all([authSaga, meetingSaga, paymentSaga].map((saga) => fork(saga)));
}
