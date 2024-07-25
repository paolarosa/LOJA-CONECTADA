import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}
interface Client {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}
interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  client: Client | null;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState<Client | null>(null);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token, ...client } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("fullstack-challenge:token", token);
      setClient(client);
      console.log(token);
      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, client: client }}>
      {children}
    </AuthContext.Provider>
  );
};
