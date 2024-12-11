import { AxiosError } from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';

import { AppState } from '@@store/types';
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
  userEditRequest,
  userEditFailure,
  userEditSuccess,
  findIdRequest,
  findIdSuccess,
  findIdFailure,
  verifyIdentityRequest,
  verifyIdentitySuccess,
  verifyIdentityFailure,
  verifyOTPRequest,
  verifyOTPSuccess,
  verifyOTPFailure,
} from '@@stores/auth/reducer';
import { LoginResponse, RegisterResponse, User, UserEditResponse, UserVerifyIdentityResponse } from '@@stores/auth/types';
import { saveToken } from '@@utils/localStorage';
import { authenticatedRequest } from '@@utils/request';
import { ERROR_CODE_STRING } from '@@utils/request/constants';
import { MeetuErrorResponse, MeetuResponse } from '@@utils/request/types';

function* login({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const response: MeetuResponse<LoginResponse> = yield authenticatedRequest.post('/login', {
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
    const response: MeetuResponse<boolean> = yield authenticatedRequest.post('/api/user/check-id', {
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
    const response: MeetuResponse<boolean> = yield authenticatedRequest.post('/api/user/check-email', {
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
    const response: MeetuResponse<RegisterResponse> = yield authenticatedRequest.put('/api/user/register', {
      data: payload,
    });

    const action = response.ok ? registerSuccess(response.data) : registerFailure('가입을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(registerFailure((e as Error).message));
  }
}

function* userEdit({ payload }: ReturnType<typeof userEditRequest>) {
  try {
    const response: MeetuResponse<UserEditResponse> = yield authenticatedRequest.patch('/api/user/edit', {
      data: payload,
    });

    const action = response.ok ? userEditSuccess(response.data) : userEditFailure('회원정보 수정을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(userEditFailure((e as Error).message));
  }
}

function* fetchMe() {
  try {
    const response: MeetuResponse<User> = yield authenticatedRequest.post('/api/user/get-my-info');

    const action = response.ok ? fetchMeSuccess(response.data) : fetchMeFailure('가입을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(fetchMeFailure((e as Error).message));
  }
}

function* findId({ payload }: ReturnType<typeof findIdRequest>) {
  try {
    const response: MeetuResponse<string> = yield authenticatedRequest.post('/api/user/find-id', {
      data: payload,
    });

    const action = response.ok ? findIdSuccess(response.data) : findIdFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(findIdFailure((e as Error).message));
  }
}

function* verifyIdentity({ payload }: ReturnType<typeof verifyIdentityRequest>) {
  try {
    const response: MeetuResponse<UserVerifyIdentityResponse> = yield authenticatedRequest.post('/api/user/verify-identity', {
      data: payload,
    });

    const action = response.ok ? verifyIdentitySuccess(response.data) : verifyIdentityFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(verifyIdentityFailure((e as Error).message));
  }
}

function* verifyOTP({ payload }: ReturnType<typeof verifyOTPRequest>) {
  try {
    const changeKey = select((state: AppState) => state.auth.changeKey);
    const response: MeetuResponse<string> = yield authenticatedRequest.post('/api/user/verify-identity', {
      data: {
        ...payload,
        changeKey,
      },
    });

    const action = response.ok ? verifyOTPSuccess() : verifyOTPFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(verifyOTPFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(loginRequest.type, login);
  yield takeLatest(checkDuplicateIdRequest.type, checkDuplicateId);
  yield takeLatest(checkDuplicateEmailRequest.type, checkDuplicateEmail);
  yield takeLatest(registerRequest.type, register);
  yield takeLatest(fetchMeRequest.type, fetchMe);
  yield takeLatest(userEditRequest.type, userEdit);
  yield takeLatest(findIdRequest.type, findId);
  yield takeLatest(verifyIdentityRequest.type, verifyIdentity);
  yield takeLatest(verifyOTPRequest.type, verifyOTP);
}
