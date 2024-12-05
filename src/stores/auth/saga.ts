import { AxiosError } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import {
  loginFailure,
  loginRequest,
  loginSuccess,
  checkDuplicateIdRequest,
  checkDuplicateIdSuccess,
  checkDuplicateIdFailure,
  checkDuplicateEmailRequest,
  checkDuplicateEmailSuccess,
  checkDuplicateEmailFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  fetchMeRequest,
  fetchMeSuccess,
  fetchMeFailure,
} from '@@stores/auth/reducer';
import { LoginResponse, RegisterResponse, User } from '@@stores/auth/types';
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

function* checkDuplicateId({ payload }: ReturnType<typeof checkDuplicateIdRequest>) {
  try {
    const response: UbittzResponse<boolean> = yield authenticatedRequest.post('/api/user/check-id', {
      data: payload,
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const action = response.ok && !response.data ? checkDuplicateIdSuccess() : checkDuplicateIdFailure();

    yield put(action);
  } catch {
    yield put(checkDuplicateIdFailure());
  }
}

function* checkDuplicateEmail({ payload }: ReturnType<typeof checkDuplicateEmailRequest>) {
  try {
    const response: UbittzResponse<boolean> = yield authenticatedRequest.post('/api/user/check-email', {
      data: payload,
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const action = response.ok && !response.data ? checkDuplicateEmailSuccess() : checkDuplicateEmailFailure();

    yield put(action);
  } catch {
    yield put(checkDuplicateEmailFailure());
  }
}

function* register({ payload }: ReturnType<typeof registerRequest>) {
  try {
    const response: UbittzResponse<RegisterResponse> = yield authenticatedRequest.put('/api/user/register', {
      data: payload,
    });

    const action = response.ok ? registerSuccess(response.data) : registerFailure('가입을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(registerFailure((e as Error).message));
  }
}

function* fetchMe() {
  try {
    const response: UbittzResponse<User> = yield authenticatedRequest.post('/api/user/get-my-info');

    const action = response.ok ? fetchMeSuccess(response.data) : fetchMeFailure('가입을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(fetchMeFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(loginRequest.type, login);
  yield takeLatest(checkDuplicateIdRequest.type, checkDuplicateId);
  yield takeLatest(checkDuplicateEmailRequest.type, checkDuplicateEmail);
  yield takeLatest(registerRequest.type, register);
  yield takeLatest(fetchMeRequest.type, fetchMe);
}
