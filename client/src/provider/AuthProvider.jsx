import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    

    const storeToken = (token) => {
        const decodedToken = jwt_decode(token);
        setToken(decodedToken);
    }

    const login = (user, token) => {

    }

    const logout = () => {
        setUser(null);
        setToken(null);
    }
  return (
    <AuthContext.Provider value={{ name: "Jorge" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
