
import styles from './ResetPassword.module.css'
import { useAuthentication } from '../../hooks/useAutentication';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [ error, setError ] = useState('');
  const { passwordReset, message, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    
    await passwordReset(email);

    setEmail('')
  }

  useEffect(() => {
    if(message) setError(message)
  }, [message])

  return (
    <>
      <div className={styles.emailLink}>
        <h1>Esqueci a senha</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Digite seu email:</span>
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
          <p>
            Enviaremos um código de verificação a este e-mail
            se corresponder a uma conta do Auth App.
          </p>
          {!loading && <button className='btn'>Enviar</button>}
          {loading && <button className='btn'>Aguarde...</button>}
          {message && <p className='message'>{message}</p>}
        </form>
        <div style={{margin: '10px 0'}}>
          <NavLink to='/login'>Voltar</NavLink>
        </div>
      </div>
    </>
  )
}

export default ResetPassword;