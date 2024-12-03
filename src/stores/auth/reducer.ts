import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, LoginDTO, LoginResponse } from '@@stores/auth/types';
import { clearToken, getAccessToken } from '@@utils/localStorage';

const initialState: AuthState = {
  token: getAccessToken() ?? undefined,
};

const PREFIX = 'auth';

export const loginRequest = createAction<LoginDTO>(`${PREFIX}/loginRequest`);
export const loginFailure = createAction<string>(`${PREFIX}/loginFailure`);

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
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
