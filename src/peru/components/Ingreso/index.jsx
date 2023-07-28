import React from "react";
import { StyleContainer, Titulo } from "./style";
import Banner from "../Banner";
import ContainerRadio from "../ContainerRadio";
import Tabla from '../Tabla'
// import Alerta from "../Alerta";

const Ingreso = () => {
  return (
    <>
      <StyleContainer>
        <Banner tituloBanner='Ingreso' />
        <Titulo>
          Selecciona el tipo de carga y la categoría a cargar:
        </Titulo>
        <ContainerRadio 
        titulo1={'Carga masiva'} 
        titulo2={'Carga manual'} 
        value={'cargaMasiva'}
        value2={'cargaManual'}
        />
        {/* <Alerta /> */}
        <div>
          {/* <Formulario /> */}
          <Tabla />
        </div>
      </StyleContainer>
    </>
  );
};

export default Ingreso;
