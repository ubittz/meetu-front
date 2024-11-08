import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import ModifyMyPageFormContent from '@@pages/MyPage/parts/ModifyMyPageFormContent';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: ModifyMyInfoForm = {};

function ModifyMyInfo() {
  const navigate = useNavigate();

  const handleSubmit = (form: ModifyMyInfoForm) => {
    console.log(form);
    navigate(pathGenerator(PAGES.MY_PAGE));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ModifyMyPageFormContent />
    </Formik>
  );
}

export default ModifyMyInfo;
