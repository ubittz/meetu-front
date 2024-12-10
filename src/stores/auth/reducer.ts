import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FindIdForm, VerifyIdentityForm, VerifyOTPForm } from '@@pages/FindAccount/types';
import {
  AuthState,
  LoginDTO,
  LoginResponse,
  RegisterDTO,
  RegisterResponse,
  User,
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

export const findIdRequest = createAction<FindIdForm>(`${PREFIX}/findIdRequest`);
export const findIdSuccess = createAction<string>(`${PREFIX}/findIdSuccess`);
export const findIdFailure = createAction<string>(`${PREFIX}/findIdFailure`);

export const verifyIdentityRequest = createAction<VerifyIdentityForm>(`${PREFIX}/verifyIdentityRequest`);
export const verifyIdentityFailure = createAction<string>(`${PREFIX}/verifyIdentityFailure`);

export const verifyOTPRequest = createAction<VerifyOTPForm>(`${PREFIX}/verifyOTPRequest`);
export const verifyOTPSuccess = createAction(`${PREFIX}/verifyOTPSuccess`);
export const verifyOTPFailure = createAction<string>(`${PREFIX}/verifyOTPFailure`);

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
    verifyIdentitySuccess(state, { payload }: PayloadAction<UserVerifyIdentityResponse>) {
      state.changeKey = payload.changeKey;
    },
  },
});

export const { loginSuccess, logout, fetchMeSuccess, userEditSuccess, verifyIdentitySuccess } = authSlice.actions;

export default authSlice.reducer;
