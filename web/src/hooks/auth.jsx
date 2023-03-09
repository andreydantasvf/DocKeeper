import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@dockeeper:user", JSON.stringify(user));
      localStorage.setItem("@dockeeper:token", JSON.stringify(token));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@dockeeper:user");
    localStorage.removeItem("@dockeeper:token");

    setData({});
  }

  async function updateUser({ user }) {
    try {
      await api.put("/users", user);

      localStorage.setItem("@dockeeper:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Usuário alterado com sucesso!");
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@dockeeper:token");
    const user = localStorage.getItem("@dockeeper:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;

      setData({
        token: JSON.parse(token),
        user: JSON.parse(user)
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateUser,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };