export interface UserProfileResponse {
  userId: string;
  userName: string;
  processingMeetingCount: number;
  writeReviewCount: number;
  description: string;
  isHost: boolean;
}
