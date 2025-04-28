import { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

// Create the context with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing user in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials with a backend
    // For demo purposes, we'll simulate a successful login
    
    // Validate input
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mock user
    const mockUser: User = {
      id: '123',
      name: email.split('@')[0],
      email,
      phone: '555-123-4567',
    };
    
    // Store in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Update state
    setUser(mockUser);
    setIsAuthenticated(true);
    
    return mockUser;
  };

  // Mock signup function
  const signup = async (name: string, email: string, password: string, phone: string) => {
    // In a real app, you would send this data to your backend API
    
    // Validate input
    if (!name || !email || !password || !phone) {
      throw new Error('All fields are required');
    }
    
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mock user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      phone,
    };
    
    // Store in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(newUser));
    
    // Update state
    setUser(newUser);
    setIsAuthenticated(true);
    
    return newUser;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};