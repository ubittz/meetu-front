import {
  ContactListQuery,
  ContactResponse,
  Meeting,
  MeetingByUserQuery,
  MeetingSingleResponse,
  ReviewListQuery,
  ReviewListResponse,
} from '@@stores/meeting/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMeetingDetail = (id: string) => {
  const { data, isLoading } = useSWRDetail<MeetingSingleResponse>(`/api/meeting/detail/${id}`);

  return {
    data: data?.data,
    isLoading,
  };
};

export const useMeetingByUser = (query: MeetingByUserQuery) => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/list/user', {
    query,
  });

  return formatSWRListResponse(data);
};

export const useReviewList = (query: ReviewListQuery, skip?: boolean) => {
  const data = useSWRList<MeetuPageResponse<ReviewListResponse>>('/api/meeting/review/list', {
    query,
    skip,
  });

  return formatSWRListResponse(data);
};

export const useContactList = (query: ContactListQuery) => {
  const data = useSWRList<MeetuPageResponse<ContactResponse>>('/api/meeting/contact/list', {
    query,
  });

  return formatSWRListResponse(data);
};
