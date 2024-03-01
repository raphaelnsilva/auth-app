import { NavLink } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useAuthValue();
  console.log(user)

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink to="/auth-app" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
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
      <NavLink to='/account'><img src={user ? `${user.photoURL}`: './profile-picture.png'} alt="userImage" className={styles.userImage} width='50px' /></NavLink>
    </header>
  )
}

export default Navbar;