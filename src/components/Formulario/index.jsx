import React from "react";
import { useState } from "react";

import styled from "styled-components";

import CampoTexto from "../CampoTexto";
import ListaCategorias from "../ListaCategorias";
import Button from "../BotonGuardar";

const StyleFormulario = styled.form``;

const ListaFormulario = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Formulario = () => {
  const [serie, setSerie] = useState("");
  const [ticket, setTicket] = useState("");
  const [categoria, setCategoria] = useState("");
  const [origenResponsable, setOrigenResponsable] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      serie,
      ticket,
      categoria,
      origenResponsable,
    };
    console.log(datosAEnviar);
  };

  return (
    <>
      <StyleFormulario onSubmit={manejarEnvio}>
        <ListaFormulario>
          <CampoTexto
            titulo="Serie"
            placeholder="Ingresar Serie"
            required
            valor={serie}
            setValor={setSerie}
          />
          <CampoTexto
            titulo="Ticket"
            placeholder="Ingresar Ticket"
            required
            valor={ticket}
            setValor={setTicket}
          />
          <CampoTexto
            titulo="Responsable"
            placeholder="Ingresar Responsable"
            required
            valor={origenResponsable}
            setValor={setOrigenResponsable}
          />
          <ListaCategorias
            titulo="Categoría"
            valor={categoria}
            setValor={setCategoria}
          />
        </ListaFormulario>
        <Button />
      </StyleFormulario>
    </>
  );
};

export default Formulario;
