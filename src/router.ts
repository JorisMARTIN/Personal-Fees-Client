import { createBrowserRouter, createContext, redirect, type MiddlewareFunction } from 'react-router';
import App from './App';
import authRouter from './pages/Auth/router';
import Dashboard from './pages/Dashboard';
import AuthService from './api/auth.service';
import type IUser from './interfaces/user.interface';

const userContext = createContext<IUser>();

const appMiddleware: MiddlewareFunction = async ({ context }) => {
  const user = await AuthService.getMe();
  if (!user) throw redirect('/auth/sign-in');

  context.set(userContext, user);
};

export default createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        middleware: [appMiddleware],
        children: [{ path: 'dashboard', Component: Dashboard }],
      },
      authRouter,
    ],
  },
]);
