import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ComponenteB({ estado }) {
  
  const [conectado, setConectado] = useState(estado);


  return (
    <div>
      <h3 className={conectado === false ? 'text-red-500' : 'text-green-500'}>
        {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}
      </h3>

      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectar' : 'Desconectar'}</button>
    </div>
  );
}

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;