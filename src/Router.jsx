import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Acoes from './pages/Acoes'
import Contato from './pages/Contato'
import Footer from './components/Footer'

import logo from './assets/logoFanuel.png'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/acoes" element={<Acoes/>} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer 
        content="Um projeto da Comunidade Católica de Missão e Adoração Fanuel" 
        image={logo}/>
    </BrowserRouter>
  )
}

export default Router
