import type { ISignIn, ISignUp } from '../interfaces/auth.interface';
import type IUser from '../interfaces/user.interface';

const fakeUser: IUser = {
  id: '1',
  email: 'joris@martin.com',
  firstname: 'Joris',
  lastname: 'MARTIN',
  createdAt: new Date(),
};

const AuthService = {
  /**
   * Call API to retreive user profile.
   * @returns Signed in user profile
   */
  getMe: async (): Promise<IUser | null> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
        // resolve({
        //   id: '1',
        //   email: 'joris@martin.com',
        //   firstname: 'Joris',
        //   lastname: 'MARTIN',
        //   createdAt: new Date(),
        // });
      }, 1000),
    );
  },

  /**
   * Call sign up API route with given data
   * @param form Sign up data
   */
  signUp: async (form: ISignUp) => {},

  /**
   * Call sign in API route with given data
   * @param form Sign in data
   */
  signIn: async (form: ISignIn) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeUser);
      }, 1000);
    });
  },
};

export default AuthService;
