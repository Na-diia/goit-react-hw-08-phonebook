import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Wrap } from './App.styled';
import Loader from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { refreshUser } from 'redux/auth/auth-operations';
import { selectRefreshUser } from 'redux/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import ('pages/Contacts/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(selectRefreshUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

return (
  !isRefreshUser &&
  <Wrap>
  <Suspense fallback={<Loader />}>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/contacts"/>} />
  <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts"/>} />
  <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/"/>} />
  </Routes>
  </Suspense>
    <ToastContainer autoClose={1000}/>
  </Wrap>
  );
};

export default App;