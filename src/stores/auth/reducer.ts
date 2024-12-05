import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, LoginDTO, LoginResponse, RegisterDTO, RegisterResponse, User } from '@@stores/auth/types';
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
  },
});

export const { loginSuccess, logout, fetchMeSuccess } = authSlice.actions;

export default authSlice.reducer;
