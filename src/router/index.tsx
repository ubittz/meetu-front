import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Register from '@@pages/Register';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.HOME)} element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
