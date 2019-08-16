import React from 'react';

export const AppContext = React.createContext({
  appName: 'e-commerce-react-loopback',
  baseUrl: 'http://localhost:3000/api',
  //token: sessionStorage.getItem('finch_jwt') || '',
  //id: sessionStorage.getItem('finch_id') || '',
  role: '',
  alert: null,
  setAlert: (param) => {},
  handleError: (error) => {},
  handleWaiting: () => {},
  handleLogin: (param) => {},
  handleLogout: () => {},
});
