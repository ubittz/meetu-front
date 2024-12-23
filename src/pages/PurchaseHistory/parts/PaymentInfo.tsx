import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import PurchaseDetailSection from '@@pages/PurchaseHistory/parts/PurchaseDetailSection';

import { usePaymentDetail } from '../hooks';
import { getPaymentNo, getPaymentType } from '../utils';

function PaymentInfo() {
  const { id } = useParams();

  const { data } = usePaymentDetail(id ?? '');

  if (!data) return null;

  const paymentNo = getPaymentNo(data);

  return (
    <PurchaseDetailSection title='결제 내역'>
      <Flex.Vertical gap={12}>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>결제수단</Typography.Sub>
          <Typography.Sub fontSize='14px'>{getPaymentType(data)}</Typography.Sub>
        </Flex.Horizontal>
        {paymentNo && (
          <Flex.Horizontal justifyContent='space-between'>
            <Typography.Sub fontSize='14px'>결제수단 번호</Typography.Sub>
            <Typography.Sub fontSize='14px'>{paymentNo}</Typography.Sub>
          </Flex.Horizontal>
        )}
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>승인일시</Typography.Sub>
          <Typography.Sub fontSize='14px'>{data.pgData?.purchasedAt && format(data.pgData?.purchasedAt, 'yyyy. MM. dd HH:mm')}</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>승인번호</Typography.Sub>
          <Typography.Sub fontSize='14px'>{data.pgData?.approveNo}</Typography.Sub>
        </Flex.Horizontal>
      </Flex.Vertical>
    </PurchaseDetailSection>
  );
}

export default PaymentInfo;
