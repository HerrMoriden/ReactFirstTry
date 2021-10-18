import React, { useContext, useState, useEffect } from 'react';
import { User, UserCredential } from 'firebase/auth';

type AuthContextType = {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<UserCredential> | undefined;
  login: (email: string, password: string) => Promise<UserCredential> | undefined;
  logout: () => Promise<void> | undefined;
  resetPassword: (email: string) => Promise<void> | undefined;
  updateEmail: (email: string) => Promise<void> | undefined;
  updatePassword: (password: string) => Promise<void> | undefined;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);


export function useAuth() {
  return useContext(AuthContext)
}

// interface ICredentials {
//   email: string,
//   password: string,
// }

// interface IAuthContext {
//   signup: (email: string, password: string) => void,
//   login: (email: string, password: string) => void,
//   logout: () => void,
//   resetPassword: (email: string) => void,
//   // updateEmail: (email: string) => void,
//   // updatePassword: (password: string) => void,
// }

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password)
//   }

//   function logout() {
//     return auth.signOut()
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email)
//   }

//   // function updateEmail(email) {
//   //   return currentUser.updateEmail(email)
//   // }

//   // function updatePassword(password) {
//   //   return currentUser.updatePassword(password)
//   // }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   }

//   // return (
//   //   <AuthContext.Provider value={value}>
//   //     {!loading && children}
//   //   </AuthContext.Provider>
//   // )
// }
