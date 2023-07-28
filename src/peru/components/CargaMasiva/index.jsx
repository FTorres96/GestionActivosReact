import React from "react";
import { useState } from "react";

import { IngresoFormulario } from "./style";

import Campo from "../Campo";
import Lista from "../Lista";
import Boton from "../Boton";

const CargaMasiva = () => {
  const [fecha, setFecha] = useState("");
  const [serie, setSerie] = useState("");
  const [categoria, setCategoria] = useState("");
  const [archivo, setArchivo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={manejarEnvio}>
      <IngresoFormulario>
        <Campo
          titulo="Fecha de compra"
          placeholder="dd/mm/aaaa"
          required
          valor={fecha}
          setValor={setFecha}
        />
        <Campo
          titulo="Orden de compra"
          placeholder="Ingresar orden"
          required
          valor={serie}
          setValor={setSerie}
        />
        <Lista
          url="https://localhost:44340/api/categoria/getall"
          titulo="Categoría"
          valor={categoria}
          setValor={setCategoria}
        />
        <Campo
          titulo="Subir Archivo"
          placeholder="Seleccionar"
          required
          valor={archivo}
          setValor={setArchivo}
          type="file"
        />
      </IngresoFormulario>
      <Boton className='procesar-boton' texto="Procesar archivo"></Boton>
    </form>
  );
};

export default CargaMasiva;
