import React from "react";
import styled from "styled-components";

import Banner from "../Banner";
import Titulo from "../Titulo";
import Formulario from "../Formulario";
import ContainerRadio from "../ContainerRadio";
import Tabla from "../Tabla"

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyleContent = styled.div``;

const Container = () => {
  return (
    <>
      <StyleContainer>
        <Banner />
        <Titulo>
          Selecciona tu proceso de Ingreso o Salida de activos y el tipo de
          carga de la información:
        </Titulo>
        <ContainerRadio />
        <StyleContent>
          <Formulario />
          <hr />
          <Tabla />
        </StyleContent>
      </StyleContainer>
    </>
  );
};

export default Container;
