import { createSlice } from '@reduxjs/toolkit';

import { HomeState } from '@@stores/home/types';

const initialState: HomeState = {};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
