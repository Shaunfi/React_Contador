import React from 'react';
import '../Hojas-De-Estilo/Boton.css'

function Boton({ texto, esBotonDeClick, contClick }) {
  return (
    <button className={ esBotonDeClick ? 'boton-click' : 'boton-reinciar' } onClick={ contClick }>
      { texto }
    </button>
  );
}

export default Boton;