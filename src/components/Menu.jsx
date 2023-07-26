import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

import styles from '../styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <Link to="/" target="_blank">
        <img className={styles.menuImage}src={logo} alt="Logo Projeto"/>
      </Link>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/sobre">Sobre</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/acoes">Ações</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/contato">Contato</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Menu
