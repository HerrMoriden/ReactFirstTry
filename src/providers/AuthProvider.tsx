import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail as updateFBEmail,
  updatePassword as updateFBPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email: string) {
    if (!currentUser) return;
    return updateFBEmail(currentUser, email);
  }

  function updatePassword(password: string) {
    if (!currentUser) return;
    return updateFBPassword(currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setCurrentUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const values = {
    currentUser,
    login,
    signUp,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
