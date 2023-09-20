import './App.css';
import logo from './Imagenes/logo.png';
import Contador from './Componentes/Contador.js';
import Boton from './Componentes/Boton.js';
import { useState } from 'react';

function App() {

  const [contClick, setNumClick] = useState(0);

  const clickCont = () => {
    setNumClick(contClick + 1);
  };

  const resetCont = () => {
    setNumClick(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt='Logo de Ramiro' />
      </div>
      <div className='contenedor'>
        <Contador numClick={ contClick } />
        <Boton texto='Click' esBotonDeClick={ true } contClick={ clickCont } />
        <Boton texto='Reinciar' esBotonDeClick={ false } contClick={ resetCont } />
      </div>
    </div>
  );
};

export default App;
