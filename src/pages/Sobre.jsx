import Header from "../components/Header"

import sobre from '../assets/sobre.jpg'
import styles from '../styles/pages/sobre.module.css'
import logoCoracao from '../assets/logoCoracao.png'
import Bio from "../components/Bio"

const Sobre = () => {
  return (
    <>
      <Header 
        title="Conhecendo a nossa história. " 
        image={sobre} 
      />
      <div className={styles.sobreContainer}>
        <div className={styles.cardContainer}>
          <Bio img={logoCoracao}/>
        </div>
        
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>"Como começamos."</h2>
          <p className={styles.cardDescription}>Palavras do Angeliuson </p>
        </div>

      </div>
    </>
  )
}

export default Sobre
