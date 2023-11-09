import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, useMemo, useState } from 'react';
import { firebaseApp } from '../services/firebaseConfig';

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthContextType = {
  user?: User;
  signed: boolean;
  signUp: (email: string, password: string, callback: () => void) => void;
  signIn: (email: string, password: string, callback: () => void) => void;
  signOut: () => void;
};

const initialState = {
  user: undefined,
  signed: false,
  signUp: () => undefined,
  signIn: () => undefined,
  signOut: () => undefined,
};

export const AuthContext = createContext<AuthContextType>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  const auth = getAuth(firebaseApp);

  const signUp = (email: string, password: string, callback: () => void) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log({ user });
        callback && callback();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
      });

  const signIn = (email: string, password: string, callback: () => void) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        setUser(loggedUser);
        callback && callback();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
      });

  const signOut = () => {
    setUser(undefined);
  };

  const provider = useMemo(
    () => ({
      user,
      signed: !!user,
      signUp,
      signIn,
      signOut,
    }),
    [user],
  );

  return <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>;
}
