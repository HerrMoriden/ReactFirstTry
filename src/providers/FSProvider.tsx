import { FSContext } from '../contexts/FSContext';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fs } from '../firebase';
import { addDoc, setDoc, updateDoc, collection, doc, Timestamp } from 'firebase/firestore';

export interface UserData {
  firstName?: string;
  lastName?: string;

  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export const FSProvider: React.FC = ({ children }) => {
  /******************************
   *  S E C T I O N :   U S E R
   ******************************/

  const userCollectionPath: string = 'users';

  function userCollectionRef () {
    let temp = collection(fs, userCollectionPath);
    console.log(temp);
    return temp;
  };

  function CurrUserId () {
    let temp = useAuth()?.currentUser?.uid || '';
    console.log(temp);
    return temp;
  };

  function CurrUserRef () {
    let temp = doc(fs, userCollectionPath, CurrUserId());
    console.log(temp);
    return temp;
  };

  async function addUserData(userData: UserData): Promise<void> {
    try {
      console.log(userData);
      userData.createdAt = Timestamp.fromDate(new Date());
      let dafuq = userCollectionRef();
      const docRef = await addDoc(dafuq, { ...userData });
      console.log('Document written with ID: ', docRef.id);
    } catch (err) {
      console.error(err);
    }
  }

  async function setUserData(userData: UserData) {
    try {
      userData.updatedAt = Timestamp.fromDate(new Date());
      await updateDoc(CurrUserRef(), {
        ...userData,
      });
      console.log(
        `Updated userdata for user with Lastname ${userData.lastName}`,
      );
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    addUserData,
    setUserData,
  };
  return <FSContext.Provider value={values}>{children}</FSContext.Provider>;
};
