import { Category } from '@@pages/Home/types';
import { MEETING_FILTER_TYPE } from '@@stores/meeting/constants';
import { asType } from '@@types/common';

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
  imageUrl: string;
}

export interface MeetingSingleResponse {
  id: string;
  name: string;
  hostName: string;
  hostId: string;
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
  imageUrl: string;
}

export interface ReviewListResponse {
  reviewNo: number;
  userId: string;
  reviewScore: number;
  reviewDescript: string;
  createDatetime: Date;
  imageUrls?: string[];
  userImageUrl?: string;
}

export interface ContactResponse {
  no: number;
  userId: string;
  descript: string;
  secretStatus: boolean;
  answerStatus: boolean;
  createDatetime: Date;
}

export interface MeetingByUserQuery {
  page: number;
  size?: number;
  userId?: string;
  filterType?: MeetingFilterType;
}

export interface ReviewListQuery {
  id: string;
  page: number;
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

export interface ReviewAddRequest {
  meetingId: string;
  score: number;
  description: string;
}

export type MeetingFilterType = asType<typeof MEETING_FILTER_TYPE>;
