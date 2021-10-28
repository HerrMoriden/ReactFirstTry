import React, { useContext } from 'react';

export type FSContextType = {};

export const FSContext = React.createContext<FSContextType | null>(null);

export function useFS() {
  return useContext(FSContext);
}
