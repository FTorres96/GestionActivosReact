import React, { useState, useEffect } from "react";

import { IngresoFormulario } from "./style";

import Campo from "../Campo";
import Lista from "../Lista";
import Boton from "../Boton";
import { fetchData } from "../../../store/slices/select";
import { useDispatch } from "react-redux";

const Formulario = () => {
  const [fecha, setFecha] = useState("");
  const [serie, setSerie] = useState("");
  const [ticket, setTicket] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState([]);
  const [origenResponsable, setOrigenResponsable] = useState("");
  const [almacen, setAlmacen] = useState("");
  const [estado, setEstado] = useState("");
  const [condicion, setCondicion] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('https://localhost:44340/api/modelo/getall'))
  }, []);

  const manejarEnvio = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={manejarEnvio}>
        <IngresoFormulario>
          <Campo
            titulo="Fecha de Ingreso"
            placeholder="dd/mm/aaaa"
            required
            value={fecha}
            setValue={setFecha}
          />
          <Campo
            titulo="Serie"
            placeholder="Ingresar Serie"
            required
            value={serie}
            setValue={setSerie}
          />
          <Campo
            titulo="Ticket"
            placeholder="Ingresar Ticket"
            required
            value={ticket}
            setValue={setTicket}
          />
          <Lista
            url="https://localhost:44340/api/categoria/getall"
            titulo="Categoría"
            value={categoria}
            setValue={setCategoria}
          />
        </IngresoFormulario>
        <IngresoFormulario>
          <Lista
            url="https://localhost:44340/api/marca/getall"
            titulo="Marca"
            value={marca}
            setValue={setMarca}
          />
          <Lista
            // url="https://localhost:44340/api/marca/getall"
            titulo="Modelo"
            value={modelo}
            setValue={setModelo}
          />
          <Campo
            titulo="Origen/Responsable"
            placeholder="Ingresar Responsable"
            required
            value={origenResponsable}
            setValue={setOrigenResponsable}
          />
          <Lista
            url="https://localhost:44340/api/almacen/getall"
            titulo="Almacen"
            value={almacen}
            setValue={setAlmacen}
          />
        </IngresoFormulario>
        <IngresoFormulario>
          <Lista
            url="https://localhost:44340/api/estado/getall"
            titulo="Estado"
            value={estado}
            setValue={setEstado}
          />
          <Lista
            url="https://localhost:44340/api/condicion/getall"
            titulo="Condición"
            value={condicion}
            setValue={setCondicion}
          />
          <Campo
            titulo="Observaciones"
            placeholder="Ingresar Observaciones"
            required
            value={observaciones}
            setValue={setObservaciones}
          />
        </IngresoFormulario>
        <Boton texto="Agregar"></Boton>
      </form>
    </>
  );
};

export default Formulario;
