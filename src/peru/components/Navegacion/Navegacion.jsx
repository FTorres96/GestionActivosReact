import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard";
import Ingreso from "../Ingreso"
import Salida from "../Salida"

const Navegacion = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/inicio" replace={true} />} />
      <Route path="/inicio" element={<Dashboard />} />
      <Route path="/ingreso" element={<Ingreso />} />
      <Route path="/salida" element={<Salida />} />
    </Routes>
  );
};

export default Navegacion;
