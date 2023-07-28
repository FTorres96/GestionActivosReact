import React from "react";
import { InputFilter, ButtonFilter, Icono, BotonTabla } from "./style";
import DataTable from "react-data-table-component";

const fakeUsers = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 45,
    city: "Chicago",
  },
  {
    id: 4,
    name: "Juan Pablo",
    age: 21,
    city: "Santiago",
  },
  {
    id: 5,
    name: "Juanito Smith",
    age: 22,
    city: "Concepcion",
  },
  {
    id: 6,
    name: "Bob Patiño",
    age: 54,
    city: "Rancagua",
  },
  {
    id: 7,
    name: "John Wick",
    age: 23,
    city: "Kansas",
  },
  {
    id: 8,
    name: "Jane Doe",
    age: 33,
    city: "Arica",
  },
  {
    id: 9,
    name: "Bob Ross",
    age: 46,
    city: "Punta Arenas",
  },
  {
    id: 10,
    name: "Juan Herrera",
    age: 29,
    city: "Talca",
  },
  {
    id: 11,
    name: "Patricio Estrella",
    age: 100,
    city: "Bajo del mar",
  },
  {
    id: 12,
    name: "Bob Esponja",
    age: 99,
    city: "Bajo del mar",
  },
];

const columns = [
  {
    name: "Fecha de Ingreso",
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: "Serie",
    selector: (row) => row.serie,
    sortable: true,
  },
  {
    name: "Ticket",
    selector: (row) => row.ticket,
    sortable: true,
  },
  {
    name: "Categoría",
    selector: (row) => row.categoria,
    sortable: true,
  },
  {
    name: "Marca",
    selector: (row) => row.marca,
    sortable: true,
  },
  {
    name: "Modelo",
    selector: (row) => row.modelo,
    sortable: true,
  },
  {
    name: "Origen/Responsable",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Almacen",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.acciones,
    sortable: true,
  },
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <ButtonFilter type="button" onClick={onClear}>
      Buscar
    </ButtonFilter>
    <InputFilter
      id="search"
      type="text"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <BotonTabla>
      <Icono src="/img/Imprimir.svg" alt="Imprimir" />
      Imprimir
    </BotonTabla>
    <BotonTabla>
      <Icono src="/img/Descargar.svg" alt="Descargar" />
      Descargar excel
    </BotonTabla>
  </>
);

const Tabla = () => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = fakeUsers.filter(
    (item) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city &&
        item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.age && item.age.toString().includes(filterText))
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
      <hr />
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        resetPaginationToggle={resetPaginationToggle}
      />
    </>
  );
};

export default Tabla;
