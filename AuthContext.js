import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = (email, password) => {
    setLoading(true);
    // Mock sign-in
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === 'password') {
        setUser({ email });
        setError(null);
      } else {
        setError('Invalid email or password');
      }
    }, 1000);
  };

  const signUp = (email, password, name) => {
    setLoading(true);
    // Mock sign-up
    setTimeout(() => {
      setLoading(false);
      setUser({ email, name });
      setError(null);
    }, 1000);
  };

  const value = {
    user,
    signIn,
    signUp,
    error,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
