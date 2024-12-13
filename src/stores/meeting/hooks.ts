import { Meeting, MeetingSingleResponse } from '@@stores/meeting/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMeetingDetail = (id: string) => {
  const { data, isLoading } = useSWRDetail<MeetingSingleResponse>(`/api/meeting/${id}`);

  return {
    data: data?.data,
    isLoading,
  };
};

export const useMeetingMyList = () => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/my-contents');

  return formatSWRListResponse(data);
};
