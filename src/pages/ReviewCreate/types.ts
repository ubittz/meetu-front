export interface ReviewCreateForm {
  meetingId: string;
  score: number;
  description: string;
  images: File[];
}
