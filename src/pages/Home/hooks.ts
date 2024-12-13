import { MeetingListWithCategoryQuery } from '@@pages/Home/types';
import { Meeting } from '@@stores/meeting/types';
import { useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMeetingListByFilter = (query: MeetingListWithCategoryQuery) => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/list', {
    query,
  });

  return formatSWRListResponse(data);
};

export const useMeetingListByLastMonth = () => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/list-last-month', {
    query: {
      page: 0,
    },
  });

  return formatSWRListResponse(data);
};
