import { Category } from '@@pages/Home/types';

export interface MeetingState {
  recentList: Meeting[];
}

export interface Meeting {
  meetingId: string;
  meetingName: string;
  meetingCategory: string;
  meetingMainPlace: string;
  meetingDetailPlace: string;
  meetingCost: number;
  meetingLimit: number;
  meetingProcessDate: Date;
  meetingIntro: string;
  meetingDescript: string;
  meetingProcessGuide: string;
  meetingItem: string;
}

export interface MeetingSingleResponse {
  id: string;
  name: string;
  hostName: string;
  address: string;
  processDate: Date;
  cost: number;
  limit: number;
  intro: string;
  descript: string;
  category: Category;
  processGuide: string;
  item: string;
  guestCount: number;
}

export interface ReviewListResponse {
  reviewNo: number;
  userId: string;
  reviewScore: number;
  reviewDescript: string;
  createDatetime: Date;
}

export interface ReviewListQuery {
  page: number;
  id: string;
}
