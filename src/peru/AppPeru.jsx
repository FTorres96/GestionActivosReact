import React from "react";
import { GlobalStyle } from "./Styled";
import Header from "./components/Header";
import Navegacion from "./components/Navegacion/Navegacion";

const AppPeru = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navegacion />
    </>
  );
};

export default AppPeru;
