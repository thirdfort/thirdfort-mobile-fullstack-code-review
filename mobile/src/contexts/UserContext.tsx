import { createContext, useState, ReactNode } from "react";

type UserContextProviderProps = {
  children: ReactNode;
}

export const UserContext = createContext<string | undefined>(undefined);

export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState('test');

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};