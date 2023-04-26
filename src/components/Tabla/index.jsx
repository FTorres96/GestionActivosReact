import React from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const fakeUsers = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 32,
    city: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 45,
    city: 'Chicago',
  },
  {
    id: 4,
    name: 'Juan Pablo',
    age: 21,
    city: 'Santiago',
  },
  {
    id: 5,
    name: 'Juanito Smith',
    age: 22,
    city: 'Concepcion',
  },
  {
    id: 6,
    name: 'Bob Patiño',
    age: 54,
    city: 'Rancagua',
  },
  {
    id: 7,
    name: 'John Wick',
    age: 23,
    city: 'Kansas',
  },
  {
    id: 8,
    name: 'Jane Doe',
    age: 33,
    city: 'Arica',
  },
  {
    id: 9,
    name: 'Bob Ross',
    age: 46,
    city: 'Punta Arenas',
  },
  {
    id: 10,
    name: 'Juan Herrera',
    age: 29,
    city: 'Talca',
  },
  {
    id: 11,
    name: 'Patricio Estrella',
    age: 100,
    city: 'Bajo del mar',
  },
  {
    id: 12,
    name: 'Bob Esponja',
    age: 99,
    city: 'Bajo del mar',
  },
];


const columns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Age',
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
  },
];

const InputFilter = styled.input`
	width: 180px;
	height: 34px;
	
`

const ButtonFilter = styled.button`
	width: 50px;
	height: 34px;
	background-color: #002eff;
	color: #FFF;
	border: none;
	border-radius: 0 10px 10px 0;
	cursor: pointer; 
	:hover{
		background-color: #FFF;
		color: #002eff;
		border: 1px solid #002eff;
	}
`

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <InputFilter id="search" type="text" placeholder="Buscar..." aria-label="Search Input" value={filterText} onChange={onFilter} />
    <ButtonFilter type="button" onClick={onClear}>X</ButtonFilter>
  </>
);



const Tabla = () => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  const filteredItems = fakeUsers.filter((item) =>
	(item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) ||
	(item.city && item.city.toLowerCase().includes(filterText.toLowerCase())) ||
	(item.age && item.age.toString().includes(filterText))
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
	//   progressPending={pending}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      resetPaginationToggle={resetPaginationToggle}
    />
  );
};

export default Tabla;
