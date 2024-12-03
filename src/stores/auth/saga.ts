import { AxiosError } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { loginFailure, loginRequest, loginSuccess } from '@@stores/auth/reducer';
import { LoginResponse } from '@@stores/auth/types';
import { saveToken } from '@@utils/localStorage';
import { authenticatedRequest } from '@@utils/request';
import { ERROR_CODE_STRING } from '@@utils/request/constants';
import { MeetuErrorResponse, UbittzResponse } from '@@utils/request/types';

function* login({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const response: UbittzResponse<LoginResponse> = yield authenticatedRequest.post('/login', {
      data: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      yield put(loginSuccess(response.data));
      saveToken(response.data.token);
    } else {
      const data = (response as unknown as AxiosError<MeetuErrorResponse>).response?.data;
      const message = data?.errorCode ? (ERROR_CODE_STRING[data.errorCode] ?? data.message) : '로그인을 실패했습니다.';
      yield put(loginFailure(message));
    }
  } catch (e) {
    yield put(loginFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(loginRequest.type, login);
}
