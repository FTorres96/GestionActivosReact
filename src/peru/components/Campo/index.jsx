import React from "react";
import { ContenedorCampo, Input } from "./style";

const CampoTexto = (props) => {
  // Destructuración
  const { titulo, placeholder, required, valor, type = "text" } = props;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <ContenedorCampo>
      <label>{titulo}*</label>
      <Input
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </ContenedorCampo>
  );
};

export default CampoTexto;
