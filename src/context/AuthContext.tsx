import {
  AuthError,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useMemo, useState } from 'react';
import { auth, db } from '../services/firebaseConfig';
import { AuthUserType } from '../types/user';

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthContextType = {
  user?: User;
  signed: boolean;
  signUp: (data: AuthUserType, callback: () => void) => void;
  signIn: (data: AuthUserType, callback: () => void) => void;
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

  const signUp = async (data: AuthUserType, callback: () => void) => {
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

      callback && callback();
    } catch (error) {
      const _error = error as AuthError;
      console.error({ _error });
    }
  };

  const signIn = async (data: AuthUserType, callback: () => void) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
      const loggedUser = userCredentials.user;
      setUser(loggedUser);
      callback && callback();
    } catch (error) {
      const _error = error as AuthError;
      console.error({ _error });
    }
  };

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
