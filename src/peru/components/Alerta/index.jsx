import React from "react";
import {
  ContenedorAlerta,
  Icono,
  Texto,
} from "./style";

const Alerta = () => {
  return (
    <ContenedorAlerta>
        <Icono src="/img/Check.svg" alt="Aprobado" />
        <Texto>El listado cargado de "Equipo" fue guardado con éxito.</Texto>
    </ContenedorAlerta>
  );
};

export default Alerta;

    {/* <ContenedorAlerta>
<Icono src="/img/Error.svg" alt="Error" />
<Texto>Lo sentimos, tuvimos un inconveniente al guardar el listado. Inténtalo nuevamente.</Texto>
</ContenedorAlerta> */}