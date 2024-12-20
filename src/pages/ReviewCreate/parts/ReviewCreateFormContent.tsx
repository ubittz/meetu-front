import { FormHelperText } from '@mui/material';
import { Form, useFormikContext } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FormGroup from '@@components/FormGroup';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ReviewCreateForm } from '@@pages/ReviewCreate/types';
import { useMeetingDetail } from '@@stores/meeting/hooks';

import ReviewCreateImageForm from './ReviewCreateImageForm';

const StyledReviewCreateFormContent = styled(FullScreen)`
  .body {
    padding: 30px 20px 0;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${COLORS.LINE_100};
  border-radius: 8px;
  resize: none;
  height: 300px;
`;

function ReviewCreateFormContent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getFieldProps, setFieldValue, errors, handleSubmit, isValid } = useFormikContext<ReviewCreateForm>();

  const { data } = useMeetingDetail(id ?? '');

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledReviewCreateFormContent>
        <Header onBack={handleClickBack}>리뷰 작성</Header>
        <Flex.Vertical className='body'>
          <Flex.Vertical>
            <Typography.Point fontSize='20px'>{data?.name}</Typography.Point>
            <Typography.Main fontSize='20px' fontWeight={700}>
              리뷰 작성
            </Typography.Main>
          </Flex.Vertical>
          <Flex.Vertical className='tw-mt-[30px]' gap={24}>
            <FormGroup label='별점'>
              <select {...getFieldProps('score')} onChange={(e) => setFieldValue('score', +e.target.value)}>
                <option value={1}>★</option>
                <option value={2}>★★</option>
                <option value={3}>★★★</option>
                <option value={4}>★★★★</option>
                <option value={5}>★★★★★</option>
              </select>
            </FormGroup>
            <FormGroup label='내용'>
              <StyledTextArea placeholder='리뷰 내용을 입력해주세요.' {...getFieldProps('description')} />
              <FormHelperText error>{errors.description}</FormHelperText>
            </FormGroup>
            <ReviewCreateImageForm />
          </Flex.Vertical>
        </Flex.Vertical>
        <FooterContainer>
          <Button.Large disabled={!isValid} type='submit'>
            작성
          </Button.Large>
        </FooterContainer>
      </StyledReviewCreateFormContent>
    </Form>
  );
}

export default ReviewCreateFormContent;
