import { createAction } from '@reduxjs/toolkit';

import { PaymentAddDTO, PaymentAddResponse } from '@@stores/payment/types';

const PREFIX = 'payment';

export const fetchPaymentConfigRequest = createAction<PaymentAddDTO>(`${PREFIX}/fetchPaymentConfigRequest`);
export const fetchPaymentConfigSuccess = createAction<{ applicationId: string; config: PaymentAddResponse }>(`${PREFIX}/fetchPaymentConfigSuccess`);
export const fetchPaymentConfigFailure = createAction<string>(`${PREFIX}/fetchPaymentConfigFailure`);
