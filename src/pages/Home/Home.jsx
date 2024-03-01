import { useAuthValue } from '../../context/AuthContext';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { user } = useAuthValue();

  return (
    <>
      {!user && (
        <section className={styles.home}>
          <div>
            <h1>Home page</h1>
            <p>
              Bem vindo usuário, faça login para continuar <br />
              Ou crie sua conta agora mesmo
            </p>
          </div>
          <div className={styles.links}>
            <NavLink to='/login' className={styles.loginBtn}>Entrar</NavLink>
            <NavLink to='/register' className={styles.loginBtn}>Criar Conta</NavLink>
          </div>
        </section>
      )}
      {user && (
        <section className={styles.home}>
          <h1>Bem vindo {user.displayName}!</h1>
          <img src={user.photoURL} alt="" />
        </section>
      )}
    </>
  )
}

export default Home;