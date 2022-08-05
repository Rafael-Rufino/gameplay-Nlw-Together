import { createContext, useContext, useState, ReactNode } from "react";

import * as AuthSession from "expo-auth-session";
import { AuthContextData, User } from "./interface";

import { api } from "../services/api";

import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../configs";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

//retorna o usuário atual atraves do contexto
function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const { access_token } = params;
        api.defaults.headers.common["authorization"] = `Bearer ${access_token}`;

        const userInfo = await api.get("/users/@me");
        console.log(userInfo);

        const firstName = userInfo.data.username.split(" ")[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        setUser({
          ...userInfo.data,
          firstName,
          token: access_token,
        });

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      throw new Error("Não foi possivel autenticar");
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// hooks para acessar o contexto
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
