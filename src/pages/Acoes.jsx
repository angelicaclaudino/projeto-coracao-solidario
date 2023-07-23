import Header from "../components/Header"
import acoes from '../assets/acoes.png'
import styles from '../styles/pages/acoes.module.css'
import { useRef } from "react"
import Axios from 'axios'
import { motion } from 'framer-motion'
import cafe from '../assets/cafe.png'
import cafe1 from '../assets/cafe1.jpeg'
import cafe2 from '../assets/cafe2.jpeg'
import cafe3 from '../assets/cafe3.jpeg'

import cestas1 from '../assets/cestas1.jpeg'
import cestas2 from '../assets/cestas2.jpeg'

import ceia1 from '../assets/ceia1.png'
import ceia2 from '../assets/ceia2.png'
import ceia3 from '../assets/ceia3.png'
import ceia4 from '../assets/ceia4.png'
import ceia5 from '../assets/ceia5.png'





const cafes = [cafe, cafe1, cafe2, cafe3];
const cestas = [cestas1, cestas2];
const ceias = [ceia1, ceia2, ceia3, ceia4, ceia5]


const Acoes = () => {
  const carousel = useRef();
  
  return (
    <>
      <Header 
        title="Confira nossas Ações" 
        image={acoes} 
      />

      
      <div className={styles.acoesContainer}>
      <section >
        
        <p className={styles.cardActions}>
        <h2 className={styles.h2}>Entrega de Cestas Básicas</h2>

        <motion.div ref={carousel} className={styles.carousel} whileTop={{ cursor: 'grabbing' }}>
        <motion.div className={styles.inner} drag="x">
          

          {cestas.map(cesta =>(
            <motion.div className={styles.item} key={cesta}>
              <img src={cesta} alt="Cestas Básicas"/>
            </motion.div>
          ))}

        </motion.div>

      </motion.div>
      
          Atendemos mensalmente cerca de 13 famílias carentes residentes no Bairro Ellery - Fortaleza | CE. Essa pessoas são acolhidas
          Tendo reconhecida a sua dignidade, levamos ainda algum conforto espiritual a elas, com oração e leitura da Palavra de Deus.
          Também estamos sempre atentos para ouvir suas partilhas e lhes dar a atenção que necessitam.
          Assim, fazemos para elas um mundo um pouco melhor, levando-lhes também um pouco de amor.
        </p>
      </section>
        
        <p className={styles.cardActions}>
          
        <h2 className={styles.h2}> Praça do Ferreira</h2>
        <motion.div ref={carousel} className={styles.carousel} whileTop={{ cursor: 'grabbing' }}>
          <motion.div className={styles.inner} drag="x">
          

            {cafes.map(cafe =>(
              <motion.div className={styles.item} key={cafe}>
                <img src={cafe} alt="Entrega de cafe da manhã"/>
              </motion.div>
            ))}

          </motion.div>

        </motion.div>
          Na Praça do Ferreira, localizada no Centro de Fortaleza - CE, levamos quinzenalmente aos domingos pela manhã café da manhã para distribuir
          às pessoas que lá vivem em situação de rua. 
          Também quinzenalmente, distribuímos sopão no domingo à noite, a estas mesmas pessoas.
        </p>
      <section>
        
        <p className={styles.cardActions}>
          
          <h2 className={styles.h2}>Distribuição da Ceia de Natal</h2>
          <motion.div ref={carousel} className={styles.carousel} whileTop={{ cursor: 'grabbing' }}>
            <motion.div className={styles.inner} drag="x">
          

              {ceias.map(ceia =>(
                <motion.div className={styles.item} key={ceia}>
                  <img src={ceia} alt="Entrega deia de natal"/>
                </motion.div>
              ))}

            </motion.div>

          </motion.div>

          Na semana do Natal, entregamos marmitas com uma ceia para que possam celebrar a chegada do Menino Jesus, 
          Ele que veio ao mundo para salvar a todos que O buscam. Levamos O seu amor até esses corações em forma de um alimento saboroso
          e preparado com todo o zelo e carinho que épossível sentir ao saborear o prato.
        </p>
      </section>
      </div>
      
       
      
    </>
  )
  }


export default Acoes