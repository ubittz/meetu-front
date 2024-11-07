import { ACCOUNT_TYPE } from '@@components/ProfileDetail/constants';
import { asType } from '@@types/common';

export type AccountType = asType<typeof ACCOUNT_TYPE>;

export interface ProfileReview {
  classId: number;
  id: number;
  title: string;
  score: number;
  description: string;
  image: string;
  profileImage: string;
  writer: string;
  createdAt: Date;
}

export interface ProfileReviewClass {
  id: number;
  image: string;
  title: string;
  description: string;
  reviews: ProfileReview[];
}
