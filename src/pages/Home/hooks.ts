import { Category } from '@@pages/Home/types';
import { Meeting } from '@@stores/meeting/types';
import { useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMeetingByCategory = (category: Category) => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/list', {
    query: {
      page: 0,
      category,
    },
  });

  return formatSWRListResponse(data);
};
