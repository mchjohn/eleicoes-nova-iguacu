import {
  createContext,
  ReactNode,
  useContext,
} from 'react';

import { IUser } from '@/interfaces/user';

import { useGetUser } from '@/queries/useGetUser';

interface IAuthContextStates {
  user: IUser | null;
  isSignedIn: boolean;
}

const AuthContext = createContext(
  {} as IAuthContextStates,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = useGetUser();

  return (
    <AuthContext.Provider
      value={{
        user: data ?
          {
            ...data,
            current_vote: Number(data?.current_vote) > 0 ? Number(data.current_vote) : data?.current_vote,
          } : {} as IUser,
        isSignedIn: isLoading,
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
