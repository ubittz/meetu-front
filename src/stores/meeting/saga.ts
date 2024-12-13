import { put, takeLatest } from 'redux-saga/effects';

import { createContactFailure, createContactRequest, createContactSuccess } from '@@stores/meeting/reducer';
import { authenticatedRequest } from '@@utils/request';
import { MeetuResponse } from '@@utils/request/types';

function* createContact({ payload }: ReturnType<typeof createContactRequest>) {
  try {
    const response: MeetuResponse<string> = yield authenticatedRequest.put('/api/meeting/contact/add', {
      data: payload,
    });

    const action = response.ok ? createContactSuccess() : createContactFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(createContactFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createContactRequest.type, createContact);
}
