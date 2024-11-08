import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import PurchaseDetailSection from '@@pages/PurchaseHistory/parts/PurchaseDetailSection';

function PaymentInfo() {
  return (
    <PurchaseDetailSection title='결제 내역'>
      <Flex.Vertical gap={12}>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>결제수단</Typography.Sub>
          <Typography.Sub fontSize='14px'>간편결제</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>결제수단 번호</Typography.Sub>
          <Typography.Sub fontSize='14px'>카카오 체크카드</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>승인일시</Typography.Sub>
          <Typography.Sub fontSize='14px'>2024. 07. 28. 18:00</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>승인번호</Typography.Sub>
          <Typography.Sub fontSize='14px'>21139930</Typography.Sub>
        </Flex.Horizontal>
      </Flex.Vertical>
    </PurchaseDetailSection>
  );
}

export default PaymentInfo;
