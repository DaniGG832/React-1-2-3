import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({ contacto }) => {


  return (

    <div>
      <h2>
        Nombre: {contacto.nombre}
      </h2>
      <h3>
        Apellido: {contacto.apellido}
      </h3>
      <h4>
        Email: {contacto.email}
      </h4>
      <h5>
        Estado:
        <span className={contacto.conectado ? 'text-green-500' : 'text-red-500'}>
          {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </span>
      </h5>

    </div>
  );
};


ContactoComponent.propTypes = {

  Contacto: PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;
