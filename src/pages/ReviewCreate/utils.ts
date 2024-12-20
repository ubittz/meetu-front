import { ReviewAddRequest } from '@@stores/meeting/types';

import { ReviewCreateForm } from './types';

export const sanitizeReviewCreateForm = (form: ReviewCreateForm): ReviewAddRequest => ({
  meetingId: form.meetingId,
  score: form.score,
  description: form.description,
});
