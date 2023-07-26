import Header from "../components/Header"

import sobre from '../assets/sobre.png'
import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <>
      <Header 
        title="Conhecendo a nossa história... " 
        image={sobre} 
      />

      <div className={styles.sobreContainer}>        
        
         <section>
          <p className={styles.sobreDescription}>
          <h2 className={styles.cardContainer}>Quem somos</h2>

            Um projeto social da Comunidade Católica de Missão e Adoração Fanuel. Composto por voluntários, engajados e apoiadores da Comunidade, 
            que partilham de um desejo em comum de fazer o bem às pessoas mais necessitadas.

          </p>
        </section> 
        <section>
          <p className={styles.sobreDescription}>
          <h2 className={styles.cardContainer}>Como começamos</h2>

            No ano de 2008, com base na passagem bíblica Mt 25,35-45, nosso fundador Danilo Barbosa, teve a inspiração de idealizar este projeto.
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
