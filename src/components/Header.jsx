import styles from '../styles/components/header.module.css'

const Header = ({ title, image, text }) => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <img className={styles.headerImage} src={image} alt={title} />
      <div >
        <h2 className={styles.headerText}>{text}</h2>
      </div>
    </header>
  )
}

export default Header
