import styled from 'styled-components';
import './App.css';
import Botao from './Componentes/Botao';
import EstilosGlobais from './Componentes/EstilosGlobais';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';

function App() {
  const CentralizaBotoes = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `
  return (
    <>
      <EstilosGlobais />
        <Header />
        <CentralizaBotoes>
          <Botao rede={'tiktok'} link={'https://www.tiktok.com/@omenduelista'}> TikTok </Botao>
          <Botao rede={'youtube'} link={'https://www.youtube.com/@OmenDuelista'}> Youtube</Botao>
        </CentralizaBotoes>
        <Footer />
    </>
  )
}

export default App
