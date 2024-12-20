import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FindIdForm, VerifyIdentityForm } from '@@pages/FindAccount/types';
import {
  AuthState,
  LoginDTO,
  LoginResponse,
  RegisterDTO,
  RegisterResponse,
  User,
  UserChangePasswordRequest,
  UserEditRequestDTO,
  UserEditResponse,
  UserVerifyIdentityResponse,
} from '@@stores/auth/types';
import { clearToken, getAccessToken } from '@@utils/localStorage';

const initialState: AuthState = {
  token: getAccessToken() ?? undefined,
};

const PREFIX = 'auth';

export const loginRequest = createAction<LoginDTO>(`${PREFIX}/loginRequest`);
export const loginFailure = createAction<string>(`${PREFIX}/loginFailure`);

export const checkDuplicateIdRequest = createAction<string>(`${PREFIX}/checkDuplicateIdRequest`);
export const checkDuplicateIdSuccess = createAction(`${PREFIX}/checkDuplicateIdSuccess`);
export const checkDuplicateIdFailure = createAction(`${PREFIX}/checkDuplicateIdFailure`);

export const checkDuplicateEmailRequest = createAction<string>(`${PREFIX}/checkDuplicateEmailRequest`);
export const checkDuplicateEmailSuccess = createAction(`${PREFIX}/checkDuplicateEmailSuccess`);
export const checkDuplicateEmailFailure = createAction(`${PREFIX}/checkDuplicateEmailFailure`);

export const registerRequest = createAction<RegisterDTO>(`${PREFIX}/registerRequest`);
export const registerSuccess = createAction<RegisterResponse>(`${PREFIX}/registerSuccess`);
export const registerFailure = createAction<string>(`${PREFIX}/registerFailure`);

export const fetchMeRequest = createAction(`${PREFIX}/fetchMeRequest`);
export const fetchMeFailure = createAction<string>(`${PREFIX}/fetchMeFailure`);

export const userEditRequest = createAction<UserEditRequestDTO>(`${PREFIX}/userEditRequest`);
export const userEditFailure = createAction<string>(`${PREFIX}/userEditFailure`);

export const changeProfileRequest = createAction<File>(`${PREFIX}/changeProfileRequest`);
export const changeProfileFailure = createAction<string>(`${PREFIX}/changeProfileFailure`);

export const findIdRequest = createAction<FindIdForm>(`${PREFIX}/findIdRequest`);
export const findIdSuccess = createAction<string>(`${PREFIX}/findIdSuccess`);
export const findIdFailure = createAction<string>(`${PREFIX}/findIdFailure`);

export const verifyIdentityRequest = createAction<VerifyIdentityForm>(`${PREFIX}/verifyIdentityRequest`);
export const verifyIdentitySuccess = createAction<UserVerifyIdentityResponse>(`${PREFIX}/verifyIdentitySuccess`);
export const verifyIdentityFailure = createAction<string>(`${PREFIX}/verifyIdentityFailure`);

export const verifyOTPRequest = createAction<string>(`${PREFIX}/verifyOTPRequest`);
export const verifyOTPSuccess = createAction(`${PREFIX}/verifyOTPSuccess`);
export const verifyOTPFailure = createAction<string>(`${PREFIX}/verifyOTPFailure`);

export const resetPasswordRequest = createAction<UserChangePasswordRequest>(`${PREFIX}/resetPasswordRequest`);
export const resetPasswordSuccess = createAction(`${PREFIX}/resetPasswordSuccess`);
export const resetPasswordFailure = createAction<string>(`${PREFIX}/resetPasswordFailure`);

const authSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    loginSuccess(state, { payload: { token } }: PayloadAction<LoginResponse>) {
      state.token = token;
    },
    logout(state) {
      state.token = undefined;
      clearToken();
    },
    fetchMeSuccess(state, { payload }: PayloadAction<User>) {
      state.me = payload;
    },
    userEditSuccess(state, { payload }: PayloadAction<UserEditResponse>) {
      if (!state.me) return;
      state.me = { ...state.me, name: payload.name ?? state.me.name, email: payload.email ?? state.me.email };
    },
    changeProfileSuccess(state, { payload }: PayloadAction<string>) {
      if (!state.me) return;
      state.me = { ...state.me, imageUrl: payload };
    },
  },
});

export const { loginSuccess, logout, fetchMeSuccess, userEditSuccess, changeProfileSuccess } = authSlice.actions;

export default authSlice.reducer;
