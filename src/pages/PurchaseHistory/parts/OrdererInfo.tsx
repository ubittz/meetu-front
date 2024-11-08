import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import PurchaseDetailSection from '@@pages/PurchaseHistory/parts/PurchaseDetailSection';

function OrdererInfo() {
  return (
    <PurchaseDetailSection title='주문자 정보'>
      <Flex.Vertical gap={12}>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>이름</Typography.Sub>
          <Typography.Sub fontSize='14px'>김준수</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>생년월일</Typography.Sub>
          <Typography.Sub fontSize='14px'>1993-11-22</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>연락처</Typography.Sub>
          <Typography.Sub fontSize='14px'>010-1111-2222</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>이메일</Typography.Sub>
          <Typography.Sub fontSize='14px'>testname@gmail.com</Typography.Sub>
        </Flex.Horizontal>
      </Flex.Vertical>
    </PurchaseDetailSection>
  );
}

export default OrdererInfo;
