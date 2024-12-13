import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ContactAddDTO, Meeting, MeetingState } from '@@stores/meeting/types';
import { getRecentMeeting, saveRecentMeeting } from '@@utils/localStorage';

const PREFIX = 'meeting';

const recentList = getRecentMeeting();

const initialState: MeetingState = {
  recentList: recentList,
};

export const createContactRequest = createAction<ContactAddDTO>(`${PREFIX}/createContactRequest`);
export const createContactSuccess = createAction(`${PREFIX}/createContactSuccess`);
export const createContactFailure = createAction<string>(`${PREFIX}/createContactFailure`);

const meetingSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    appendRecentMeeting(state, { payload }: PayloadAction<Meeting>) {
      const filteredList = state.recentList.filter((recent) => recent.meetingId !== payload.meetingId);
      const newList = [payload].concat(filteredList).splice(0, 10);
      state.recentList = newList;
      saveRecentMeeting(JSON.stringify(newList));
    },
  },
});

export const { appendRecentMeeting } = meetingSlice.actions;

export default meetingSlice.reducer;
