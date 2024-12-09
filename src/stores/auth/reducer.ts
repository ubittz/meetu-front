import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, LoginDTO, LoginResponse, RegisterDTO, RegisterResponse, User, UserEditRequestDTO, UserEditResponse } from '@@stores/auth/types';
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
  },
});

export const { loginSuccess, logout, fetchMeSuccess, userEditSuccess } = authSlice.actions;

export default authSlice.reducer;
