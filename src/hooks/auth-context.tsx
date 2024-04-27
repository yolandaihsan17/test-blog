"use client";
import { useContext, createContext, useState, useEffect } from "react";

interface User {
  name: string;
  id: number;
  isAuthenticated: boolean;
  avatar: string;
}

const initialValue: User = {
  name: "User 1",
  id: 1,
  isAuthenticated: false,
  avatar: "https://picsum.photos/200/300",
};

export const AuthContext = createContext(initialValue);
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>(initialValue);

  useEffect(() => {
    setUser({ ...user, isAuthenticated: true });
  }, []);

  return (
    <AuthContext.Provider value={{ ...user }}>{children}</AuthContext.Provider>
  );
};
