import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import FindPasswordFormContent from '@@pages/FindAccount/parts/FindPasswordFormContent';
import { FindPasswordForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: FindPasswordForm = {
  id: '',
  name: '',
  birth: '',
  email: '',
};

function FindPassword() {
  const navigate = useNavigate();

  const handleSubmit = (form: FindPasswordForm) => {
    console.log(form);
    navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/password/reset'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FindPasswordFormContent />
    </Formik>
  );
}

export default FindPassword;
