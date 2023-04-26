import styled from "styled-components";

const ContenedorListaCategorias = styled.div`
  margin: 1rem 0.5rem 1rem 0;
  justify-content: space-between;
`;

const LabelListaCategorias = styled.label``;

const SelectListaCategorias = styled.select`
  display: block;
  width: 254px;
  height: 48px;
  background-color: #ffffff;
  outline-color: #6278f7;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-size: 18px;
  color: grey;
`;

const OptionListaCategorias = styled.option`
  font-size: 18px;
`;

const ListaCategorias = (props) => {
  const opciones = ["HP", "ACER", "DELL", "MSI", "LG", "SAMSUNG"];

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <ContenedorListaCategorias>
      <LabelListaCategorias>{props.titulo}*</LabelListaCategorias>
      <SelectListaCategorias value={props.valor} onChange={manejarCambio}>
        <OptionListaCategorias value="" defaultValue="" disabled hidden>
          Seleccionar
        </OptionListaCategorias>
        {opciones.map((opcion, index) => {
          return (
            <OptionListaCategorias key={index} value={opcion}>
              {opcion}
            </OptionListaCategorias>
          );
        })}
      </SelectListaCategorias>
    </ContenedorListaCategorias>
  );
};

export default ListaCategorias;
