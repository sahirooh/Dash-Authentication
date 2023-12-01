import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = ( tokenStr) => {
    if (tokenStr) {
      setToken(token);
    }
    const {exp} = jwtDecode(tokenStr);
    if(exp){
      setCookie("jwt", tokenStr, {
        path: "/",
        maxAge: exp,
        sameSite: true,
      });
      return;
    }
    logout();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeCookie("jwt", {path: "/"});
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
