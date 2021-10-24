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
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signUp(email: string, password: string) {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  async function login(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  }

  async function logout() {
    try {
      return await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  }

  async function resetPassword(email: string) {
    try {
      return await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateEmail(email: string) {
    try {
      if (!currentUser) return;
      return await updateFBEmail(currentUser, email);
    } catch (err) {
      console.log(err);
    }
  }

  async function updatePassword(password: string) {
    try {
      if (!currentUser) return;
      return await updateFBPassword(currentUser, password);
    } catch (err) {
      console.log(err);
    }
  }

  async function isLoggedIn() {
    try {
      return auth.currentUser;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
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
