import { createContext } from 'react';
import useAuthProvider from '../hooks/useAuthProvider';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) =>  {},
  logout: () => {},
}) ;

export const AuthProvider = ( children ) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthContext;