import { User, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useMemo, useState } from 'react';
import { firebaseApp } from '../services/firebaseConfig';

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthContextType = {
  user?: User;
  signed: boolean;
  signIn: (email: string, password: string, callback: () => void) => void;
  signOut: () => void;
};

const initialState = {
  user: undefined,
  signed: false,
  signIn: () => undefined,
  signOut: () => undefined,
};

export const AuthContext = createContext<AuthContextType>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  const auth = getAuth(firebaseApp);

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
      signIn,
      signOut,
    }),
    [user],
  );

  return <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>;
}
