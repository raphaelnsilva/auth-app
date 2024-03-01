import styles from './Login.module.css';
import { useAuthentication } from '../../hooks/useAutentication';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, googleProvider, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = { email, password };

    await login(user)
  };

  useEffect(() => {
    if (authError) setError(authError)
  }, [authError])

  return (
    <>
      <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login para poder utilizar o sistema.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder='Digite seu e-mail.'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NavLink to='/resetPassword' className={styles.recuperarSenha}>Esqueceu a senha?</NavLink>
          </label>
          {!loading && <button className='btn'>Entrar</button>}
          {loading && <button className='btn'>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}

          <div onClick={googleProvider} className='providers'>
            <FcGoogle />
            Continuar com Google
          </div>

          <div>Novo no Auth App? <NavLink to='/register' style={{color: '#6B98FA'}}>Cadastre-se</NavLink></div>
        </form>
      </div>
    </>
  )
}

export default Login;