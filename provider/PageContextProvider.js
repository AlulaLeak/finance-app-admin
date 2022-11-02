import React, { useState, useEffect, createContext } from "react";
export const PageContext = createContext();
const PageContextProvider = (props) => {
  const [user, setUser] = useState({
    name: "harry potter",
  });
  return (
    <PageContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
