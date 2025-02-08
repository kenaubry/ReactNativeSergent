// services/authService.js
// Simuler une API d'authentification

export const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Pour cet exercice, les identifiants corrects sont :
        // email: test@example.com, password: password
        if (email === 'test@example.com' && password === 'password') {
          resolve({ token: 'dummy-token-12345', user: { email } });
        } else {
          reject({ message: 'Identifiants invalides' });
        }
      }, 1500);
    });
  };
  
  export const register = async (email, password, username) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Supposons que l'inscription est toujours réussie
        resolve({ message: 'Inscription réussie' });
      }, 1500);
    });
  };
  