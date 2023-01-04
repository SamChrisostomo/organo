import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto placeholder="Digite seu nome" label="Nome" />
      <CampoTexto placeholder="Digite seu Cargo" label="Cargo" />
      <CampoTexto placeholder="Informe o endereço da imagem" label="Imagem" />
    </div>
  );
}

export default App;
