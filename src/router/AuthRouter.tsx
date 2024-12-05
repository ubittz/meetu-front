import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import ClassDetail from '@@pages/ClassDetail';
import FindClass from '@@pages/FindClass';
import Home from '@@pages/Home';
import MyClass from '@@pages/MyClass';
import MyPage from '@@pages/MyPage';
import ModifyMyInfo from '@@pages/MyPage/Modify';
import Payment from '@@pages/Payment';
import PaymentComplete from '@@pages/Payment/Complete';
import Profile from '@@pages/Profile';
import PurchaseHistory from '@@pages/PurchaseHistory';
import PurchaseDetail from '@@pages/PurchaseHistory/Detail';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { fetchMeRequest } from '@@stores/auth/reducer';

function AuthRouter() {
  const dispatch = useDispatch();

  const { me, token } = useAppState((state) => state.auth);

  useEffect(() => {
    if (token && !me) {
      dispatch(fetchMeRequest());
    }
  }, [me, token, dispatch]);

  return (
    <Routes>
      <Route path={pathGenerator(PAGES.HOME)} element={<Home />} />
      <Route path={pathGenerator(PAGES.FIND_CLASS)} element={<FindClass />} />
      <Route path={pathGenerator(PAGES.FIND_CLASS, '/:id')} element={<FindClass />} />
      <Route path={pathGenerator(PAGES.CLASS, '/:id')} element={<ClassDetail />} />
      <Route path={pathGenerator(PAGES.PAYMENT, '/complete')} element={<PaymentComplete />} />
      <Route path={pathGenerator(PAGES.PAYMENT, '/:id')} element={<Payment />} />
      <Route path={pathGenerator(PAGES.PROFILE, '/:id')} element={<Profile />} />

      <Route path={pathGenerator(PAGES.MY_PAGE)} element={<MyPage />} />
      <Route path={pathGenerator(PAGES.MY_PAGE, '/modify')} element={<ModifyMyInfo />} />
      <Route path={pathGenerator(PAGES.MY_PAGE, '/purchase-history')} element={<PurchaseHistory />} />
      <Route path={pathGenerator(PAGES.MY_PAGE, '/purchase-history/:id')} element={<PurchaseDetail />} />
      <Route path={pathGenerator(PAGES.MY_PAGE, '/my-class')} element={<MyClass />} />
    </Routes>
  );
}

export default AuthRouter;
