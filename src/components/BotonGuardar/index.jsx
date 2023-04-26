import React from "react";
import styled from "styled-components";

const ContenedorBotonGuardar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 1rem 0.5rem 1rem 0;
`;
const BotonGuardar = styled.button`
  font-size: 16px;
  font-family: "Barlow";
  font-weight: bold;
  width: 254px;
  height: 48px;
  background: #ffffff;
  color: #002eff;
  border: 1px solid #002eff;
  cursor: pointer;
  border-radius: 100px;
  :hover {
    background-color: #002eff;
    color: #ffffff;
  }
`;

const Button = () => {
  return (
    <ContenedorBotonGuardar>
      <BotonGuardar>Guardar</BotonGuardar>
    </ContenedorBotonGuardar>
  );
};

export default Button;
