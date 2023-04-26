import styled from "styled-components";
import { useState } from "react";

const ContenedorCampoTexto = styled.div`
  margin: 1rem 1.5rem 1rem 0;
`;

const Label = styled.label``;

const Input = styled.input`
  display: block;
  width: 254px;
  height: 48px;
  border-radius: 10px;
  border: solid 1px grey;
  padding: 10px 5px;
  outline-color: #6278f7;
  font-size: 18px;
`;

const CampoTexto = (props) => {
  // const [valor, setValor] = useState("");

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <ContenedorCampoTexto>
      <Label>{props.titulo}*</Label>
      <Input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </ContenedorCampoTexto>
  );
};

export default CampoTexto;
