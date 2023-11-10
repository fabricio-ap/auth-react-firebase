export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = SignInType & {
  firstName: string;
  lastName: string;
};

export type ProfileType = {
  firstName: string;
  lastName: string;
  email: string;
};

export type ErrorType = {
  type?: 'SIGN-IN' | 'SIGN-UP';
  message?: string;
};

export enum ErrorMessage {
  'auth/invalid-login-credentials' = 'Usuário ou senha inválidos',
  'auth/invalid-email' = 'Email invalido',
  'auth/weak-password' = 'A senha deve conter pelo menos 6 caracteres',
}
