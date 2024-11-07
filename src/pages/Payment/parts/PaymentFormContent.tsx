import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';

import { PaymentForm } from '../types';
import OrdererInfo from './OrdererInfo';
import PaymentInfo from './PaymentInfo';
import PaymentMethod from './PaymentMethod';
import PaymentProductInfo from './PaymentProductInfo';
import PaymentSection from './PaymentSection';
import PaymentTerms from './PaymentTemrs';
import PointBenefits from './PointBenefits';

const StyledPaymentFormContent = styled(FullScreen)`
  .body {
    padding-bottom: 60px;
  }
`;

function PaymentFormContent() {
  const navigate = useNavigate();

  const { handleSubmit } = useFormikContext<PaymentForm>();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledPaymentFormContent>
        <Header onBack={handleClickBack} />
        <Flex.Vertical className='body'>
          <PaymentSection title='결제 상품'>
            <PaymentProductInfo />
          </PaymentSection>
          <PaymentSection title='결제 상세'>
            <PaymentInfo />
          </PaymentSection>
          <PaymentSection title='적립혜택'>
            <PointBenefits />
          </PaymentSection>
          <PaymentSection title='주문자 정보'>
            <OrdererInfo />
          </PaymentSection>
          <PaymentSection title='결제 수단'>
            <PaymentMethod />
          </PaymentSection>
          <PaymentSection title='주문 동의' hiddenDivider>
            <PaymentTerms />
          </PaymentSection>
        </Flex.Vertical>
        <FooterContainer>
          <Button.Medium type='submit'>50,000원 결제하기</Button.Medium>
        </FooterContainer>
      </StyledPaymentFormContent>
    </Form>
  );
}

export default PaymentFormContent;
