import { useSWRDetail } from '@@utils/request/hooks';

import { MeetingSingleResponse } from './types';

export const useMeetingDetail = (id: string) => {
  const { data, isLoading } = useSWRDetail<MeetingSingleResponse>(`/api/meeting/${id}`);

  return {
    data: data?.data,
    isLoading,
  };
};
