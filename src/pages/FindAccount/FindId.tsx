import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import FindIdFormContent from '@@pages/FindAccount/parts/FindIdFormContent';
import { FindIdForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: FindIdForm = {
  name: '',
  birth: '',
  email: '',
};

function FindId() {
  const navigate = useNavigate();

  const handleSubmit = (form: FindIdForm) => {
    console.log(form);
    navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/id/complete'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FindIdFormContent />
    </Formik>
  );
}

export default FindId;
