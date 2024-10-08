import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { IUser } from '@/interfaces/user';
import { SignInData } from '@/validations/signInSchema';
import { SignUpData } from '@/validations/signUpUserSchema';

import { useSignIn, useSignOut, useSignUp } from '@/mutations/useUser';
import { useGetUserData } from '@/queries/useGetUser';
import { auth } from '@/services/supabase/users/auth';

interface IAuthContextStates {
  user: IUser | null;
  loadings: {
    isLoadingUser: boolean;
    isPendingSignUp: boolean;
    isPendingSignIn: boolean;
    isPendingSignOut: boolean;
  };
  signOut: () => Promise<void>
  handleSignUp: (params: SignUpData) => void;
  handleSignIn: (params: SignInData) => void;
}

const AuthContext = createContext(
  {} as IAuthContextStates,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  const { data, isLoading: isLoadingUser } = useGetUserData();
  const { mutateAsync: signIn, isPending: isPendingSignIn } = useSignIn();
  const { mutateAsync: signUp, isPending: isPendingSignUp } = useSignUp();
  const { mutateAsync: signOut, isPending: isPendingSignOut } = useSignOut();

  const handleSignUp = (params: SignUpData) => {
    signUp(params);
  }

  const handleSignIn = (params: SignInData) => {
    signIn(params);
  }

  useEffect(() => {
    if (data) {
      setUser(data);
    }

    const unsubscribe = auth.listemUserChanges(setUser);

    return () => unsubscribe();
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        loadings: {
          isLoadingUser,
          isPendingSignUp,
          isPendingSignIn,
          isPendingSignOut,
        } as const,
        signOut,
        handleSignUp,
        handleSignIn,
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
