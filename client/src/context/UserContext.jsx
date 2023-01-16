import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext({
  user: [],
  setCurrentUser: () => {},
  removeCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      let expTime = (user.exp * 1000) - Date.now();
      const autoLogout = setInterval(() => {
        removeCurrentUser();
      }, expTime);
      return () => clearInterval(autoLogout);
    }
  }, [user]);

  const setCurrentUser = (user) => {
    setUser(user);
  };

  const removeCurrentUser = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    setCurrentUser,
    removeCurrentUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
