import styles from '../styles/components/footer.module.css'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = ({content}) => {
  return (
    <footer >
      <ul className={styles.socialList}>
        
        <p className={styles.footerContent}>
          <span>Um Projeto CCMAF</span> &copy; 2023
        </p>

        <Link to="https://www.instagram.com/comunidadefanuel" target="_blank">
          <li><FaInstagram/></li>
        </Link>
      
        <Link to="https://www.youtube.com/@ComunidadeCatolicaFAnuel" target="_blank">
          <li><FaYoutube/></li>
        </Link>
      </ul>
      
    </footer>
  )
}

export default Footer
