import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h3>Aplicação de autenticação de usuários!</h3>
        <p>Auth App &copy; 2024</p>
      </footer>
    </>
  )
}

export default Footer;