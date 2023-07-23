import Header from "../components/Header"

import sobre from '../assets/sobre.jpg'
import styles from '../styles/pages/sobre.module.css'
import logoCoracao from '../assets/logoCoracao.png'
import Bio from "../components/Bio"

const Sobre = () => {
  return (
    <>
      <Header 
        title="Conhecendo a nossa história... " 
        image={sobre} 
      />

      <div className={styles.sobreContainer}>
        <div className={styles.cardContainer}>
          <Bio 
           img={logoCoracao} //trocar essa foto       

          />
        </div>
        
        <h2 className={styles.cardContainer}>"Como começamos"</h2>
        <section>
          <p className={styles.sobreDescription}>
            Com base na passagem bíblica Mt 25,35-45, nosso fundador, Danilo Barbosa teve a inspiração de idealizar este projeto.
            Que leva alimento físico e espiritual aos necessitados que se encontram em situação de rua, vivendo na Praça do Ferreira no Centro de Fortaleza - CE.

          </p>
        </section> 

        <section>                  
          <p className={styles.sobreDescription}>
            Iniciamos fornecendo cestas básicas para pessoas carentes residentes no Bairro Ellery em Fortaleza - CE. 
            Os alimentos eram arrecadados (ou doados) e distribuídos pelos membros da Comunidade Fanuel. 
            Além de levar o alimento, fazíamos um momento de acolhida com eles, uma breve oração, partilha se assim o desejássem.

            Até que outras necessidades foram surgindo e estendemos a assistência para as pessoas em situação de rua.
          </p>
          </section>  
        </div>

      
    </>
  )
}

export default Sobre
