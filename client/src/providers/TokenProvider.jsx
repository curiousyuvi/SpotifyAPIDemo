import React, { createContext, useContext } from "react";

const tokenContext = createContext(null);

export default function TokenProvider({ children }) {
  return (
    <tokenContext.Provider value={{ token: "", refreshToken: "" }}>
      {children}
    </tokenContext.Provider>
  );
}

const useTokenContext = () => useContext(tokenContext);

export { useTokenContext };
