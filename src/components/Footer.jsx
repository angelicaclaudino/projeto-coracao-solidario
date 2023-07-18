import styles from '../styles/components/footer.module.css'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = ({content}) => {
  return (
    <footer >
      <ul className={styles.socialList}>
        <li><FaInstagram/></li>
        <li><FaYoutube/></li>
      </ul>
      <p className={styles.footerContent}>{content}</p>
    </footer>
  )
}

export default Footer
