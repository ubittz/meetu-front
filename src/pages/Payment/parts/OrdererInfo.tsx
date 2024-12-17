import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import { PaymentForm } from '@@pages/Payment/types';

function OrdererInfo() {
  const { getFieldProps, errors } = useFormikContext<PaymentForm>();

  return (
    <Flex.Vertical gap={30}>
      <InputFormGroup
        label='이름'
        inputProps={{
          ...getFieldProps('customerName'),
          placeholder: '이름을 입력해주세요.',
        }}
        errorMessage={errors.customerName}
      />
      <InputFormGroup
        label='연락처'
        inputProps={{
          ...getFieldProps('customerTel'),
          placeholder: '전화번호를 입력해주세요.',
        }}
        errorMessage={errors.customerTel}
      />
    </Flex.Vertical>
  );
}

export default OrdererInfo;
