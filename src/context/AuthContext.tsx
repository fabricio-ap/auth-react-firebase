import {
  AuthError,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useMemo, useState } from 'react';
import { auth, db } from '../services/firebaseConfig';
import { ErrorMessage, ErrorType, SignInType, SignUpType } from '../types/user';

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthContextType = {
  user?: User;
  signed: boolean;
  isLoading: boolean;
  error?: ErrorType;
  signUp: (data: SignUpType, callback: () => void) => void;
  signIn: (data: SignInType, callback: () => void) => void;
  signOut: () => void;
};

const initialState = {
  user: undefined,
  signed: false,
  isLoading: false,
  error: undefined,
  signUp: () => undefined,
  signIn: () => undefined,
  signOut: () => undefined,
};

export const AuthContext = createContext<AuthContextType>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  // movi o setIsLoading para dentro do try e catch porque dentro do finally ele estava impedindo o router de redirecionar os componentes
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType | undefined>(undefined);

  const signUp = async (data: SignUpType, callback: () => void) => {
    setIsLoading(true);

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredentials.user;

      const usersDoc = doc(db, 'users', String(user.uid));

      await setDoc(usersDoc, {
        id: user?.uid,
        email: user?.email,
        firstName: data.firstName,
        lastName: data.lastName,
        provider: 'firebase',
      });

      setIsLoading(false);
      callback && callback();
    } catch (error) {
      const _error = error as AuthError;

      setIsLoading(false);
      setError({
        type: 'SIGN-UP',
        message: ErrorMessage[_error.code as keyof typeof ErrorMessage] || _error.message,
      });
    }
  };

  const signIn = async (data: SignInType, callback: () => void) => {
    setIsLoading(true);

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
      const loggedUser = userCredentials.user;
      setUser(loggedUser);

      setIsLoading(false);
      callback && callback();
    } catch (error) {
      const _error = error as AuthError;

      setIsLoading(false);
      setError({
        type: 'SIGN-IN',
        message: ErrorMessage[_error.code as keyof typeof ErrorMessage] || _error.message,
      });
    }
  };

  const signOut = () => {
    setUser(undefined);
  };

  const provider = useMemo(
    () => ({
      user,
      signed: !!user,
      isLoading,
      error,
      signUp,
      signIn,
      signOut,
    }),
    [user, isLoading, error],
  );

  return <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>;
}
