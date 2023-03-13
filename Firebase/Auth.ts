import {signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from './ConfiqFirebase'



// Function to log in a user with email and password
export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Function to log out the current user
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
