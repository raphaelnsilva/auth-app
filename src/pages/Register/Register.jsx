import styles from './Register.module.css';
import { useAuthentication } from '../../hooks/useAutentication';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, googleProvider, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    };

    if (password !== confirmPassword) return setError("As senhas precisam ser iguais!");

    await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <>
      <div className={styles.register}>
        <h1>Cadastre-se para usar</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text"
              name="displayName"
              id="displayName"
              required placeholder='Digite seu nome'
              maxLength={50}
              minLength={3}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email"
              name="email"
              id="email"
              required placeholder='E-mail do usuário'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password"
              name="password"
              id="password"
              required placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirmar Senha:</span>
            <input type="password"
              name="confirmPassword"
              id="confirmPassword"
              required placeholder='Confirmar senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
      
          {!loading && <button className='btn'>Aceite e cadastre-se</button>}
          {loading && <button className='btn' >Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
          
          <div onClick={googleProvider} className='providers'>
            <FcGoogle />
            Continuar com Google
          </div>
  
          <div style={{margin: '20px 0'}}>Já faz parte do Auth App? <Link to='/login' style={{color: '#6B98FA'}}>Entrar</Link></div>
        </form>
      </div>
    </>
  )
}

export default Register