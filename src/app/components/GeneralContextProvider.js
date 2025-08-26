import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('mediband_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    // Replace with your API endpoint
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok && data.user) {
      setUser(data.user);
      localStorage.setItem('mediband_user', JSON.stringify(data.user));
      return { success: true };
    }
    return { success: false, message: data.message };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('mediband_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
