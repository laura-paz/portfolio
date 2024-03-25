import Menu from './Componentes/Menu';
import Apresentacao from './Componentes/Apresentacao';
import SobreMim from './Componentes/SobreMim';
import Habilidades from './Componentes/Habilidades';
import Portfolio from './Componentes/Portfolio';
import Footer from './Componentes/Footer';

function App() {
  return (
    <>
      <Menu />
      <div className='container'>
        <Apresentacao />
        <SobreMim />
        <Habilidades />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}

export default App;
