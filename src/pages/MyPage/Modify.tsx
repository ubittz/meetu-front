import { Formik } from 'formik';

import ModifyMyPageFormContent from '@@pages/MyPage/parts/ModifyMyPageFormContent';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';

const initialValues: ModifyMyInfoForm = {};

function ModifyMyInfo() {
  const handleSubmit = (form: ModifyMyInfoForm) => {
    console.log(form);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ModifyMyPageFormContent />
    </Formik>
  );
}

export default ModifyMyInfo;
