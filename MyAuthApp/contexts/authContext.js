// contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getToken, removeToken } from '../services/storageService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Vérifier la présence d'un token au démarrage de l'application
  useEffect(() => {
    const loadToken = async () => {
      const token = await getToken();
      setUserToken(token);
      setIsLoading(false);
    };
    loadToken();
  }, []);

  const signOut = async () => {
    await removeToken();
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, setUserToken, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
