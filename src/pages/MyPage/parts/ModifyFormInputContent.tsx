import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import InputFormGroup from '@@components/InputFormGroup';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import Radio from '@@components/Radio';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';
import { GENDER } from '@@pages/Register/constants';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { checkDuplicateEmailFailure, checkDuplicateEmailRequest, checkDuplicateEmailSuccess } from '@@stores/auth/reducer';

function ModifyFormInputContent() {
  const dispatch = useDispatch();
  const me = useAppState((state) => state.auth.me);

  const { values, getFieldProps, setFieldValue, errors } = useFormikContext<ModifyMyInfoForm>();

  const { visible, setVisible, content, setContent } = useModal();

  const handleClickCheckEmail = () => {
    dispatch(checkDuplicateEmailRequest(values.email ?? ''));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: checkDuplicateEmailSuccess.type,
    callback: () => {
      setContent('사용 가능한 이메일입니다.');
      setVisible(true);
      setFieldValue('checkedEmail', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailFailure.type,
    callback: () => {
      setContent('이미 사용중인 이메일입니다.');
      setVisible(true);
      setFieldValue('checkedEmail', false);
    },
  });

  return (
    <Flex.Vertical className='tw-pt-[30px] tw-px-[20px]' gap={30}>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        {content}
      </Modal>
      <InputFormGroup
        label='아이디'
        inputProps={{
          value: values.id,
          readOnly: true,
        }}
      />
      <InputFormGroup
        label='이름'
        inputProps={{
          value: me?.name,
          readOnly: true,
        }}
      />
      <Flex.Vertical gap={8}>
        <InputFormGroup
          label='비밀번호'
          inputProps={{
            ...getFieldProps('password'),
            placeholder: '비밀번호를 입력해주세요.',
          }}
          errorMessage={errors.password}
        />
        <InputFormGroup
          inputProps={{
            ...getFieldProps('passwordCheck'),
            placeholder: '비밀번호를 한번 더 입력해주세요.',
          }}
          errorMessage={errors.passwordCheck}
        />
      </Flex.Vertical>
      <InputFormGroup
        label='생년월일'
        inputProps={{
          value: me?.birth,
          readOnly: true,
        }}
      />
      <FormGroup label='성별'>
        <Flex.Horizontal className='tw-pt-[8px] tw-pb-[12px]' gap={30}>
          <Radio readOnly checked={me?.gender === GENDER.MALE}>
            남자
          </Radio>
          <Radio readOnly checked={me?.gender === GENDER.FEMALE}>
            여자
          </Radio>
        </Flex.Horizontal>
      </FormGroup>
      <InputFormGroup
        label='연락처'
        inputProps={{
          value: me?.tel,
          readOnly: true,
        }}
      />
      <InputFormGroup
        label='이메일'
        inputProps={{
          ...getFieldProps('email'),
          placeholder: '이메일 주소를 입력해주세요.',
        }}
        buttonProps={{
          children: '중복체크',
          type: 'button',
          disabled: !values.email || !!errors.email,
          onClick: handleClickCheckEmail,
        }}
        errorMessage={errors.email || errors.checkedEmail}
      />
      <InputFormGroup
        label='소개글'
        inputProps={{
          ...getFieldProps('description'),
          placeholder: '소개글을 입력해주세요.',
        }}
      />
    </Flex.Vertical>
  );
}

export default ModifyFormInputContent;
