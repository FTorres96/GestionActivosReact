import React from "react";
import { StyleContainer, Titulo } from "./style";
import Banner from "../Banner";

const Dashboard = () => {
  return (
    <>
      <StyleContainer>
        <Banner tituloBanner="Dashboard" />
        <Titulo>Resumen general de activos:</Titulo>
        Asignados<span></span>
        Disponibles<span></span>
        Mantenimiento<span></span>
        Bajas<span></span>
      </StyleContainer>
    </>
  );
};

export default Dashboard;
