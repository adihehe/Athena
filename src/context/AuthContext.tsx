import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (name: string, email: string, password: string) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate(); // Using React Router's navigate instead of Next.js router

  useEffect(() => {
    // Check if user is stored in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (name: string, email: string,) => {
    // Mock login behavior
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userData = { name, email };
      setUser(userData);
      
      // Store in localStorage as required
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoading(false);
      navigate("/dashboard"); // Using navigate from React Router
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login"); // Using navigate from React Router
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};