import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';

import { PaymentForm } from '../types';

function OrdererInfo() {
  const { getFieldProps } = useFormikContext<PaymentForm>();

  return (
    <Flex.Vertical gap={30}>
      <InputFormGroup
        label='이름'
        inputProps={{
          ...getFieldProps('ordererName'),
          placeholder: '이름을 입력해주세요.',
        }}
      />
      <InputFormGroup
        label='연락처'
        inputProps={{
          ...getFieldProps('ordererPhone'),
          placeholder: '전화번호를 입력해주세요.',
        }}
      />
    </Flex.Vertical>
  );
}

export default OrdererInfo;
