export interface ISignIn {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ISignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
