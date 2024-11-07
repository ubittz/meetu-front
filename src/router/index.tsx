import { Navigate, Route, Routes } from 'react-router-dom';

import ClassDetail from '@@pages/ClassDetail';
import Error from '@@pages/Error';
import FindId from '@@pages/FindAccount/FindId';
import FindIdComplete from '@@pages/FindAccount/FindIdComplete';
import FindPassword from '@@pages/FindAccount/FindPassword';
import ResetPassword from '@@pages/FindAccount/ResetPassword';
import FindClass from '@@pages/FindClass';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import MyPage from '@@pages/MyPage';
import Payment from '@@pages/Payment';
import PaymentComplete from '@@pages/Payment/Complete';
import Profile from '@@pages/Profile';
import Register from '@@pages/Register';
import RegisterComplete from '@@pages/Register/Complete';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.REGISTER, '/complete')} element={<RegisterComplete />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/id')} element={<FindId />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/id/complete')} element={<FindIdComplete />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/password')} element={<FindPassword />} />
      <Route path={pathGenerator(PAGES.FIND_ACCOUNT, '/password/reset')} element={<ResetPassword />} />

      <Route path={pathGenerator(PAGES.HOME)} element={<Home />} />
      <Route path={pathGenerator(PAGES.FIND_CLASS)} element={<FindClass />} />
      <Route path={pathGenerator(PAGES.FIND_CLASS, '/:id')} element={<FindClass />} />
      <Route path={pathGenerator(PAGES.CLASS, '/:id')} element={<ClassDetail />} />
      <Route path={pathGenerator(PAGES.PAYMENT, '/complete')} element={<PaymentComplete />} />
      <Route path={pathGenerator(PAGES.PAYMENT, '/:id')} element={<Payment />} />
      <Route path={pathGenerator(PAGES.PROFILE, '/:id')} element={<Profile />} />

      <Route path={pathGenerator(PAGES.MY_PAGE)} element={<MyPage />} />

      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
