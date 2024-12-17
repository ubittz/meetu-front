import { put, takeLatest } from 'redux-saga/effects';

import { fetchPaymentConfigRequest, fetchPaymentConfigSuccess, fetchPaymentConfigFailure } from '@@stores/payment/reducer';
import { PaymentAddResponse } from '@@stores/payment/types';
import { authenticatedRequest } from '@@utils/request';
import { MeetuResponse } from '@@utils/request/types';

function* fetchPaymentConfig({ payload }: ReturnType<typeof fetchPaymentConfigRequest>) {
  try {
    const getRestResponse: MeetuResponse<string> = yield authenticatedRequest.get('/api/payment/get-rest-id');

    const response: MeetuResponse<PaymentAddResponse> = yield authenticatedRequest.put('/api/payment/add', {
      data: payload,
    });

    const action =
      getRestResponse.ok && response.ok
        ? fetchPaymentConfigSuccess({
            applicationId: getRestResponse.data,
            config: response.data,
          })
        : fetchPaymentConfigFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(fetchPaymentConfigFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(fetchPaymentConfigRequest.type, fetchPaymentConfig);
}
