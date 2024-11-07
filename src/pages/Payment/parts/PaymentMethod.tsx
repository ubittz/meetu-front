import { Field, FieldProps, useFormikContext } from 'formik';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Radio from '@@components/Radio';
import { COLORS } from '@@constants/colors';
import { PaymentForm } from '@@pages/Payment/types';

import { PAYMENT_METHOD } from '../constants';
import KakaoPay from './EazyPaymentMethod/KakaoPay';
import NaverPay from './EazyPaymentMethod/NaverPay';

const StyledPaymentMethod = styled(Flex.Vertical)`
  margin-top: 8px;

  .divider {
    width: 100%;
    height: 1px;
    background: ${COLORS.LINE_100};
  }

  .payment_method__easy_pay {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function PaymentMethod() {
  const {
    values: { paymentMethod },
    getFieldProps,
  } = useFormikContext<PaymentForm>();

  const isCard = paymentMethod === PAYMENT_METHOD.CARD;
  const isAccount = paymentMethod === PAYMENT_METHOD.ACCOUNT;
  const isEasyPay = paymentMethod === PAYMENT_METHOD.EASY_PAY;

  return (
    <StyledPaymentMethod gap={23}>
      <Flex.Vertical className='payment_method__cell' gap={16}>
        <Field
          type='radio'
          {...getFieldProps('paymentMethod')}
          value={PAYMENT_METHOD.CARD}
          as={(props: FieldProps['field']) => (
            <Radio iconProps={{ className: 'tw-mr-[4px]' }} {...props}>
              카드결제
            </Radio>
          )}
        />
        {isCard && (
          <Flex.Vertical gap={18}>
            <InputFormGroup
              label='카드사'
              inputProps={{
                ...getFieldProps('cardCompany'),
                placeholder: '카드를 선택해주세요.',
              }}
            />
            <InputFormGroup
              label='할부'
              inputProps={{
                ...getFieldProps('installment'),
                placeholder: '할부개월을 선택해주세요.',
              }}
            />
          </Flex.Vertical>
        )}
      </Flex.Vertical>
      <div className='divider' />
      <Flex.Vertical className='payment_method__cell' gap={16}>
        <Field
          type='radio'
          {...getFieldProps('paymentMethod')}
          value={PAYMENT_METHOD.ACCOUNT}
          as={(props: FieldProps['field']) => (
            <Radio iconProps={{ className: 'tw-mr-[4px]' }} {...props}>
              계좌이체
            </Radio>
          )}
        />
        {isAccount && (
          <Flex.Vertical gap={18}>
            <InputFormGroup
              label='은행명'
              inputProps={{
                ...getFieldProps('bankName'),
                placeholder: '은행명을 선택해주세요.',
              }}
            />
            <InputFormGroup
              label='예금주'
              inputProps={{
                ...getFieldProps('depositor'),
                placeholder: '예금주 이름을 적어주세요.',
              }}
            />
          </Flex.Vertical>
        )}
      </Flex.Vertical>
      <div className='divider' />
      <Flex.Vertical className='payment_method__cell' gap={16}>
        <Field
          type='radio'
          {...getFieldProps('paymentMethod')}
          value={PAYMENT_METHOD.EASY_PAY}
          as={(props: FieldProps['field']) => (
            <Radio iconProps={{ className: 'tw-mr-[4px]' }} {...props}>
              간편 결제
            </Radio>
          )}
        />
        {isEasyPay && (
          <Flex.Horizontal gap={30} className='payment_method__easy_pay'>
            <NaverPay />
            <KakaoPay />
          </Flex.Horizontal>
        )}
      </Flex.Vertical>
    </StyledPaymentMethod>
  );
}

export default PaymentMethod;
