import React, { useContext } from 'react';
import { User, UserCredential } from 'firebase/auth';

type AuthContextType = {
  currentUser: User | null;
  signUp: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  login: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  logout: () => Promise<void | undefined>;
  resetPassword: (email: string) => Promise<void | undefined>;
  updateEmail: (email: string) => Promise<void | undefined>;
  updatePassword: (password: string) => Promise<void | undefined>;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}
