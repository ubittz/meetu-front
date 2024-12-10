import { Navigate, Route, Routes } from 'react-router-dom';

import FindId from '@@pages/FindAccount/FindId';
import FindIdComplete from '@@pages/FindAccount/FindIdComplete';
import FindPassword from '@@pages/FindAccount/FindPassword';
import ResetPassword from '@@pages/FindAccount/ResetPassword';
import VerifyOTP from '@@pages/FindAccount/VerifyOTP';
import Login from '@@pages/Login';
import Register from '@@pages/Register';
import RegisterComplete from '@@pages/Register/Complete';
import AuthRouter from '@@router/AuthRouter';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';

function Router() {
  const token = useAppState((state) => state.auth.token);

  return (
    <Routes>
      <Route path='/' element={<Navigate to={pathGenerator(token ? PAGES.HOME : PAGES.LOGIN)} />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.REGISTER, '/complete')} element={<RegisterComplete />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/id')} element={<FindId />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/id/complete')} element={<FindIdComplete />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/password')} element={<FindPassword />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/password/otp')} element={<VerifyOTP />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/password/reset')} element={<ResetPassword />} />
      <Route path='*' element={token ? <AuthRouter /> : <Navigate to={pathGenerator(PAGES.LOGIN)} replace />} />
    </Routes>
  );
}

export default Router;
