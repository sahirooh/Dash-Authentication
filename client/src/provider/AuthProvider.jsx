import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = ( token) => {
    if (token) {
      setToken(token);
    }
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
