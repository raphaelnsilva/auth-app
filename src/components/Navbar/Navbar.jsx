import { NavLink } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useAuthValue();

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        {!user && (
          <>
            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/account" className={({ isActive }) => (isActive ? styles.active : "")}>Minha Conta</NavLink>
          </>
        )}
      </nav>
    </header>
  )
}

export default Navbar;