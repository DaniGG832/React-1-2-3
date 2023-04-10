import React from "react";
import ContactoComponent from "../pure/contacto";
import { Contacto } from "../../models/contacto.class";

const ContactoContainerComponet = () => {
  const contacto1 = new Contacto("Dani", "González", "dani@gmail.com", false);

  console.log(contacto1);

  return (
    <div>
      <h1 className="text-5xl">Contacto:</h1>
      <ContactoComponent contacto={contacto1}></ContactoComponent>
    </div>
  );
};

export default ContactoContainerComponet;
