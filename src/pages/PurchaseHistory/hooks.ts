import { PaymentDetailResponse, PaymentListResponse } from '@@stores/payment/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse, PageQuery } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const usePaymentList = (query: PageQuery) => {
  const data = useSWRList<MeetuPageResponse<PaymentListResponse>>('/api/payment/list', {
    query,
  });

  return formatSWRListResponse(data);
};

export const usePaymentDetail = (id: string) => {
  const { data, mutate, isLoading } = useSWRDetail<PaymentDetailResponse>(`/api/payment/detail/${id}`);

  return {
    data: data?.data,
    mutate,
    isLoading,
  };
};
