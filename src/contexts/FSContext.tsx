import React, { useContext } from 'react';
import { UserData } from '../providers/FSProvider';

export type FSContextType = {
  addUserData: (userData: UserData) => Promise<void>;
  setUserData: (userData: UserData) => Promise<void>;
};

export const FSContext = React.createContext<FSContextType | null>(null);

export function useFS() {
  return useContext(FSContext);
}
