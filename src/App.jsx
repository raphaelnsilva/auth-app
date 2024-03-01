import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAutentication';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserAccount from './pages/UserAccount/UserAccount';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ResetPassword from './pages/ResetPassword/resetPassword';

function App() {
  // VALIDAÇÃO DE USUARIO LOGADO.
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  // usa o efeito de usuário validado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <main className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path='/account' element={user ? <UserAccount /> : <Navigate to="/login" />} />
              <Route path='/resetPassword' element={!user ? <ResetPassword /> : <Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
