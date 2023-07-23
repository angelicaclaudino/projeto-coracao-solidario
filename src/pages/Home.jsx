import Header from "../components/Header"

import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'

import logo from '../assets/logoCoracao.png'


import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Projeto Coração Solidário" 
        image={logo} 
        text='"Pois eu estava com fome, e me destes comer, estava com sede, e me destes de beber." Mt 25,35a'
      />
      
    </>
  )
}

export default Home
