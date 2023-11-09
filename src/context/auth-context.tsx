// Define your context type
import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../screens/project-list/search-panel";
import * as Auth from "../auth-provider";

type AuthContextType = {
  user: User | null;
  authLogin: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => void;
};

type AuthForm = {
  username: string;
  password: string;
};

// Create your context
const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const authLogin = (authForm: AuthForm) =>
    Auth.login(authForm)
      .then(setUser)
      .catch((e) => {
        console.log(e);
      });
  const register = (authForm: AuthForm) =>
    Auth.register(authForm)
      .then(setUser)
      .catch((e) => console.log(e));

  const logout = () =>
    Auth.logout().then(() => {
      setUser(null);
    });

  return (
    <AuthContext.Provider value={{ user, authLogin, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AppProvider");
  }
  return context;
};
