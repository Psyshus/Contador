import './App.css';
import OnePieceLogo from '../src/images/descarga.png';
import './styles/Boton.css';
import './styles/Contador.css';
import { useState } from 'react';

import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const menosClicks = () => {
    if (numClicks > 0) {
      setNumClicks(numClicks - 1);
    }
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={OnePieceLogo}
          alt="freecodecamp-logo"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <div>
          <Boton
            texto=" + Clicks"
            esBotonDeClick={true}
            manejarClick={manejarClick}
            value={numClicks}
          />

          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
            value={numClicks}
          />
          <Boton
            texto="- Clicks"
            esBotonDeClick={true}
            manejarClick={menosClicks}
            value={numClicks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
