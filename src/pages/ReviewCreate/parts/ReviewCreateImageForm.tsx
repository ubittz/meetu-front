import { ChangeEventHandler } from 'react';

import { useFormikContext } from 'formik';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import { COLORS } from '@@constants/colors';
import ReviewCreateImageBox from '@@pages/ReviewCreate/parts/ReviewCreateImageBox';
import { ReviewCreateForm } from '@@pages/ReviewCreate/types';

const StyledReviewCreateImageForm = styled(FormGroup)``;

const StyledInput = styled.label`
  font-size: 12px;
  color: ${COLORS.TEXT_500};
  background: ${COLORS.MAIN};
  border-radius: 4px;
  padding: 4px 8px;

  &.disabled {
    opacity: 0.7;
  }
`;

function ReviewCreateImageForm() {
  const { values, setFieldValue } = useFormikContext<ReviewCreateForm>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const images = [...values.images];
      images.push(file);

      setFieldValue('images', images);
    }
  };

  const handleDelete = (index: number) => {
    const newImages = [...values.images];
    newImages.splice(index, 1);
    setFieldValue('images', newImages);
  };

  return (
    <StyledReviewCreateImageForm>
      <Flex.Vertical alignItems='flex-start' gap={4}>
        <StyledInput className={values.images.length >= 3 ? 'disabled' : ''}>
          이미지 업로드
          <input type='file' hidden onChange={handleChange} accept='image/*' disabled={values.images.length >= 3} />
        </StyledInput>
        <Flex.Horizontal gap={12}>
          {values.images.map((image, index) => {
            return <ReviewCreateImageBox key={index} image={image} index={index} onDelete={handleDelete} />;
          })}
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledReviewCreateImageForm>
  );
}

export default ReviewCreateImageForm;
