import React, { useState } from "react";
import { ContenedorRadio, LabelRadio, InputRadio, HrRadio } from "./style";

import Formulario from "../Formulario";
import CargaMasiva from "../CargaMasiva";

const ContainerRadio = ({ titulo1, titulo2, value, value2 }) => {
  const [carga, setCarga] = useState("cargaMasiva");
  // const [baja, setBaja] = useState("Baja");
  const [opciones, setOpciones] = useState("Equipos");

  const HandleCarga = (e) => {
    setCarga(e.target.value);
  };

  // const HandleBaja = (e) => {
  //   setBaja(e.target.value);
  // };

  const HandleOpcion = (e) => {
    setOpciones(e.target.value);
  };

  return (
    <>
      <ContenedorRadio>
        {/* {carga === 'Ingreso' && <> */}
        <LabelRadio>
          {titulo1}
          <InputRadio
            type="radio"
            name="radioCarga"
            value={value}
            onChange={HandleCarga}
            checked={carga === "cargaMasiva"}
          />
          <span className="checkmark"></span>
        </LabelRadio>
        <LabelRadio>
          {titulo2}
          <InputRadio
            type="radio"
            name="radioCarga"
            value={value2}
            onChange={HandleCarga}
            // checked={false}
          />
          <span className="checkmark"></span>
        </LabelRadio>
        <HrRadio />
        <LabelRadio>
          Equipos
          <InputRadio
            type="radio"
            name="opciones"
            value="Equipos"
            onChange={HandleOpcion}
            checked={opciones === "Equipos"}
          />
          <span className="checkmark"></span>
        </LabelRadio>
        <LabelRadio>
          Repuestos
          <InputRadio
            type="radio"
            name="opciones"
            value="Repuestos"
            onChange={HandleOpcion}
            // checked={false}
          />
          <span className="checkmark"></span>
        </LabelRadio>
        <LabelRadio>
          Accesorios
          <InputRadio
            type="radio"
            name="opciones"
            value="Accesorios"
            onChange={HandleOpcion}
            // checked={false}
          />
          <span className="checkmark"></span>
        </LabelRadio>
      </ContenedorRadio>
      {(carga === "cargaManual" || carga === "cargaMasiva") && (
        <>
          {opciones === "Equipos" ||
          opciones === "Repuestos" ||
          opciones === "Accesorios" ? (
            carga === "cargaManual" ? (
              <Formulario />
            ) : (
              <CargaMasiva />
            )
          ) : null}
        </>
      )}{" "}
    </>
  );
};

export default ContainerRadio;
