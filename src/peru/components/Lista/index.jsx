import React, { useState, useEffect } from "react";
import { ContenedorLista, SelectLista, OptionLista } from "./style";

const Lista = ({ titulo, value, setValue, url, modelo  }) => {
  const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         body: "",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const json = await response.json();
  //       setOptions(json);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, [url]);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(titulo)
  };

  return (
    <ContenedorLista>
      <label>{titulo}*</label>
      <SelectLista value={value} onChange={handleChange}>
        <OptionLista value="" defaultValue="" disabled hidden>
          Seleccionar
        </OptionLista>
        {options.map(({id,nombre}, index) => (
          <OptionLista key={index} value={id}>
            {nombre}
          </OptionLista>
        ))}
      </SelectLista>
    </ContenedorLista>
  );
};

export default Lista;
