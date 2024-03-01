import { auth, provider } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);
  const [message, setMessage] = useState(null)

  function checkIfIsCancelled() {
    if (cancelled) return;
  };

  // Cria um novo usuário

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      return user;
    } catch (error) {
      console.log(error.message);

      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-alredy")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }
      setLoading(false);

      setError(systemErrorMessage);
    }
  };

  // lOGOUT

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // lOGIN

  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      const systemErrorMessage = (
        <p>
          Usuário ou senha incorreta. Tente novamente ou{" "}
          <NavLink to="/register" style={{textDecoration: 'underline'}}>crie uma conta.</NavLink>
        </p>
      );

      console.error(error);

      setError(systemErrorMessage);

      setLoading(false);
    }
  };

  // fazer login com o google

  const googleProvider = async () => {
    checkIfIsCancelled();

    try {
      const res = await signInWithPopup(auth, provider)

      const user = res.user;

      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Resetar password

  const passwordReset = async (email) => {
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
    } finally {
      setMessage('Verifique seu email.')
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    message,
    logout,
    login,
    passwordReset,
    googleProvider,
  };
}
