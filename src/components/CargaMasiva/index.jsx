import React from "react";
import styled from "styled-components";

const ContenedorCargaMasiva = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0.5rem 1rem 0;
`;

const BotonCargaMasiva = styled.button`
  font-size: 16px;
  font-family: "Barlow";
  font-weight: bold;
  width: 254px;
  height: 48px;
  background: #ffffff;
  color: #002eff;
  border: 1px solid #002eff;
  border-radius: 100px;
`;

const CargaMasiva = () => {
  return (
    <ContenedorCargaMasiva>
      <BotonCargaMasiva>Procesar archivo</BotonCargaMasiva>
    </ContenedorCargaMasiva>
  );
};

export default CargaMasiva;
