// UserAuthContext.js

import { createContext, useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const userAuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useUserAuth() {
  return useContext(userAuthContext);
}

// eslint-disable-next-line react/prop-types
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const auth = getAuth();

  // Listener for authentication state changes
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <userAuthContext.Provider value={{ user }}>
      {children}
    </userAuthContext.Provider>
  );
}
