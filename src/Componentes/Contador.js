import React from 'react';
import '../Hojas-De-Estilo/Contador.css'

function Contador ({ numClick }) {
  return (
    <div className='contador'>
      {numClick}
    </div>
  );
}

export default Contador