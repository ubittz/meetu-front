import { Meeting, MeetingSingleResponse } from './types';

export const singleResponseToMeeting = (meeting: MeetingSingleResponse): Meeting => ({
  meetingId: meeting.id,
  meetingName: meeting.name,
  meetingCategory: meeting.category,
  meetingMainPlace: '',
  meetingDetailPlace: '',
  meetingCost: meeting.cost,
  meetingLimit: meeting.limit,
  meetingProcessDate: meeting.processDate,
  meetingIntro: meeting.intro,
  meetingDescript: meeting.descript,
  meetingProcessGuide: meeting.processGuide,
  meetingItem: meeting.item,
});
