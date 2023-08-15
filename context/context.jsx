import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  return (
    <GlobalContext.Provider value={{ name, setName, search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};
