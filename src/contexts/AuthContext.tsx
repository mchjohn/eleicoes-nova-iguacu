import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { IUser } from '@/interfaces/user';

import { supabase } from '@/services/supabase';
import { errorMessage } from '@/services/supabase/errors/signUp';

interface IAuthContextStates {
  user: IUser | null;
  isSignedIn: boolean;
}

interface IAuthContextActions {
  signUp: (data: any) => void;
  signIn: (data: any) => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext(
  {} as IAuthContextStates & IAuthContextActions,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isSignedIn, setIsSignedInUser] = useState(false);

  async function signUp(data: any) {
    const { email, password } = data;
  }

  async function signIn({ email, password }: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:5173/sign-in',
      },
    });

    console.log({ data });

    console.log('MESSAGE', error?.message);
    console.log('STATUS', error?.status);

    const message = errorMessage(String(error?.status));

    if (error) throw new Error(message);
  }

  async function signOut() {
    setUser(null);
    setIsSignedInUser(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignedIn,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
