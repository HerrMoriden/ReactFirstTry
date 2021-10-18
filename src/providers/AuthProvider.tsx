import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail as updateFBEmail,
  updatePassword as updateFBPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signUp(email: string, password: string) {
    try {      
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  function login(email: string, password: string) {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    try {
      return auth.signOut();
    } catch (err) {
      console.log(err);
    }
  }

  function resetPassword(email: string) {
    try {
      return sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
    }
  }

  function updateEmail(email: string) {
    try {
      if (!currentUser) return;
      return updateFBEmail(currentUser, email);
    } catch (err) {
      console.log(err);
    }
  }

  function updatePassword(password: string) {
    try {
      if (!currentUser) return;
      return updateFBPassword(currentUser, password);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth ,firebaseUser => {
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
