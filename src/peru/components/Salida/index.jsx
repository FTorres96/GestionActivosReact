import React from "react";
import { StyleContainer, Titulo } from "./style";
import Banner from "../Banner";
import ContainerRadio from "../ContainerRadio";

const Salida = () => {
  return (
    <>
      <StyleContainer>
        <Banner tituloBanner="Salida" />
        <Titulo>Selecciona el tipo de carga y la categoría a cargar:</Titulo>
        <ContainerRadio
          titulo1={"Baja"}
          titulo2={"Egreso"}
          value={"baja"}
          value2={"egreso"}
        />
      </StyleContainer>
    </>
  );
};

export default Salida;
