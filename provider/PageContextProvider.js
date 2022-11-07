import React, { useState, useEffect, createContext } from "react";
import { useClientList } from "../hooks/useClientList";

export const PageContext = createContext();
const PageContextProvider = (props) => {
  const { initializeClientList, sortList, list, noPersonsFound, getSpecificUser, specificUser } = useClientList();

  const [user, setUser] = useState(null);
  return (
    <PageContext.Provider
      value={{
        user: user,
        setUser: setUser,
        initializeClientList,
        sortList,
        list,
        noPersonsFound,
        getSpecificUser,
        specificUser,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
