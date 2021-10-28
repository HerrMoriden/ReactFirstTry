import { FSContext } from '../contexts/FSContext';

export const FSProvider: React.FC = ({ children }) => {
  const values = {};
  return <FSContext.Provider value={values}>{children}</FSContext.Provider>;
};
