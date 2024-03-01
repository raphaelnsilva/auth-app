import styles from "./UserAccount.module.css";
import { useAuthentication } from "../../hooks/useAutentication";
import { useAuthValue } from "../../context/AuthContext";

const UserAccount = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <section className={styles.userAccountContainer}>
      <h1>Pagina de gerenciamento de conta!</h1>
      <ul>
        <li>Nome: {user.displayName}</li>
        <li>Email: {user.email}</li>
      </ul>
      <button className={styles.logoutBtn} onClick={logout}>Sair</button>
    </section>
  )
}

export default UserAccount;