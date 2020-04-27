import React, {useState, useContext} from 'react';
import {User} from '../types/types';

type ContextProps = {
  user: User;
};

export const Context = React.createContext<ContextProps>({} as ContextProps);

export const RootContextProvider: React.FC = ({children}) => {
  const [user, setUser] = useState({
    id: 0,
    name: '',
  });

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useRootContext = () => useContext(Context);
