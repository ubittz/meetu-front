import { put, takeLatest } from 'redux-saga/effects';

import {
  createContactFailure,
  createContactRequest,
  createContactSuccess,
  addReviewRequest,
  addReviewSuccess,
  addReviewFailure,
} from '@@stores/meeting/reducer';
import { authenticatedRequest } from '@@utils/request';
import { MeetuResponse } from '@@utils/request/types';
import { createBlobJSON } from '@@utils/request/utils';

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

function* addReview({ payload }: ReturnType<typeof addReviewRequest>) {
  try {
    const formData = new FormData();
    const review = createBlobJSON(JSON.stringify(payload.review));

    formData.append('review', review);
    for (let i = 0; i < payload.files.length; i++) {
      formData.append('files', payload.files[i]);
    }

    const response: MeetuResponse<string> = yield authenticatedRequest.post('/api/meeting/review/add', {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const action = response.ok ? addReviewSuccess() : addReviewFailure('리뷰 등록을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(addReviewFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createContactRequest.type, createContact);
  yield takeLatest(addReviewRequest.type, addReview);
}
