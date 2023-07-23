import Header from "../components/Header"

import portfolio from '../assets/portfolio.jpg'
import foto from '../assets/portfolio.jpg'


import styles from '../styles/pages/acoes.module.css'
// import { useEffect, useState } from "react"
import Axios from 'axios'

const Acoes = () => {
  return (
    <>
      <Header 
        title="Confira nossas Ações" 
        image={portfolio} 
      />
      
      <div className={styles.acoesContainer}>
      <section >
        <h2>Entrega de Cestas Básicas</h2>
        <img src="foto"/>
        <p className={styles.cardActions}>
          Atendemos mensalmente cerca de 13 famílias carentes residentes no Bairro Ellery - Fortaleza | CE. Essa pessoas são acolhidas
          Tendo reconhecida a sua dignidade, levamos ainda algum conforto espiritual a elas, com oração e leitura da Palavra de Deus.
          Também estamos sempre atentos para ouvir suas partilhas e lhes dar a atenção que necessitam.
          Assim, fazemos para elas um mundo um pouco melhor, levando-lhes também um pouco de amor.
        </p>
      </section>
      <h2>Atendimento na Praça do Ferreira</h2>
        image={foto}
        <p className={styles.cardActions}>
          Na Praça do Ferreira, localizada no Centro de Fortaleza - CE, levamos quinzenalmente aos domingos pela manhã café da manhã para distribuir
          às pessoas que lá vivem em situação de rua. 
          Também quinzenalmente, distribuímos sopão no domingo à noite, a estas mesmas pessoas.
        </p>
      <section>
        <h2>Distribuição da Ceia de Natal</h2>
        image={foto}
        <p className={styles.cardActions}>
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