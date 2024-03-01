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
        <label>
          <span>Nome</span>
          <input type="text" value={user.displayName} readOnly />
        </label>
        <label>
          <span>Email</span>
          <input type="text" value={user.email} readOnly />
        </label>
      </ul>
      <button className={styles.logoutBtn} onClick={logout}>Sair</button>
    </section>
  )
}

export default UserAccount;