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
  avgScore: number;
}

export interface ReviewListResponse {
  reviewNo: number;
  userId: string;
  reviewScore: number;
  reviewDescript: string;
  createDatetime: Date;
}

export interface ContactResponse {
  no: number;
  userId: string;
  descript: string;
  secretStatus: boolean;
  answerStatus: boolean;
  createDatetime: Date;
}

export interface ReviewListQuery {
  page: number;
  id: string;
}
export interface ContactListQuery {
  page: number;
  id: string;
}

export interface ContactAddDTO {
  meetingId: string;
  description: string;
  secretStatus: boolean;
  contactAnswerStatus: boolean;
}
