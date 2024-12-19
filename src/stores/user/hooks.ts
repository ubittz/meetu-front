import { UserProfileResponse } from '@@stores/user/types';
import { useSWRDetail } from '@@utils/request/hooks';

export const useUserDetail = (id: string) => {
  const { data, mutate, isLoading } = useSWRDetail<UserProfileResponse>(`/api/user/${id}/profile`);

  return {
    data: data?.data,
    mutate,
    isLoading,
  };
};
