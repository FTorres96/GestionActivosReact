import React from "react";
import { ContenedorBoton, Botones, Mas } from "./style";

const Boton = ({texto}) => {
  return (
    <ContenedorBoton>
      <Botones>
        {/* <Mas src="/img/+.svg" alt="+" /> */}
        {texto}
      </Botones>
    </ContenedorBoton>
  );
};

export default Boton;
