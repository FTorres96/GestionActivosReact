import React from "react";
import { Links, StyleHeader, ContainerHeader, Menu } from "./style";

const Header = () => {
  return (
    <>
      <StyleHeader>
        <ContainerHeader>
          <img src="/img/Entel.svg" alt="Logo Entel" />
          <Menu>
            <Links to="/inicio">Inicio</Links>
            <Links to="/ingreso">Ingreso</Links>
            <Links to="/salida">Salida</Links>
          </Menu>
        </ContainerHeader>
      </StyleHeader>
    </>
  );
};

export default Header;
