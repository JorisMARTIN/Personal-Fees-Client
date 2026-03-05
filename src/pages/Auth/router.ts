import { redirect, type MiddlewareFunction, type RouteObject } from 'react-router';
import Auth from '.';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AuthService from '../../api/auth.service';

const authMiddleware: MiddlewareFunction = async () => {
  const user = await AuthService.getMe();
  if (user) throw redirect('/');
};

const authRouter: RouteObject = {
  path: 'auth',
  middleware: [authMiddleware],
  Component: Auth,
  children: [
    { path: 'sign-in', Component: SignIn },
    { path: 'sign-up', Component: SignUp },
  ],
};

export default authRouter;
