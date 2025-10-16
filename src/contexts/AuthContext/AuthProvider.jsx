import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.init";

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading,setLoading]=useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
  }

  // ---onAuth must be getting with useStare such that reduce many times call which will reduce time problem and slow problem-->

  useEffect(() => {
    // --set/mount the observer--
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User in on state change", currentUser);
      setUser(currentUser);
      setLoading(false)
    });

    // --clear the observer on unmount--
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signUser,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
