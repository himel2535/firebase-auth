import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ---Get current user info--
  onAuthStateChanged(auth, (currentUser) => {
    
    if (currentUser) {
      console.log("Inside if ", currentUser);
    } else {
      console.log("OutSide if", currentUser);
    }
  });

  const authInfo = {
    createUser,
    signUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
