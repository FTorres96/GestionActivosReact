// URL ----------------------------------------------------------------------------------------------------------------------
const url = new URL("https://localhost:44340/api/");

// Marca ----------------------------------------------------------------------------------------------------------------------

// Insertar Marca
data = {
  nombre: "APPLEE",
};

fetch(`${url}marca/insert`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Actualizar Marca
data = {
  id: 4,
  nombre: "APPLE",
};

fetch(`${url}marca/update`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Borrar Marca
data = {
  id: 4,
};

fetch(`${url}marca/delete`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Obtener todas las Marcas
fetch(`${url}marca/getall`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach(({ id, nombre }) => {
      console.log("ID:", id);
      console.log("Nombre:", nombre);
      console.log("----------------------------------");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Obtener Marcas por ID
data = {
  id: 5,
};

fetch(`${url}marca/get?id=${data.id}`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(({ id, nombre }) => {
    console.log(id);
    console.log(nombre);
    console.log("----------------------------------");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Modelo --------------------------------------------------------------------------------------------------------------------------

// Insertar Modelo
data = {
  nombre: "MACBOOKk",
  idMarca: 5,
};

fetch(`${url}modelo/insert`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Actualizar Modelo
data = {
  id: 8,
  nombre: "MACBOOK",
  idMarca: 5,
};

fetch(`${url}modelo/update`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Borrar Modelo
data = {
  id: 5,
};

fetch(`${url}modelo/delete`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Obtener todos los Modelos
fetch(`${url}modelo/getall`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach(({ id, nombreMarca, nombreModelo }) => {
      console.log("ID:", id);
      console.log("Marca:", nombreMarca);
      console.log("Modelo:", nombreModelo);
      console.log("----------------------------------");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Obtener Modelos por ID
data = {
  id: 5,
};

fetch(`${url}modelo/get?id=${data.id}`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(({ id, nombreMarca, nombreModelo }) => {
    console.log(id);
    console.log(nombreMarca);
    console.log(nombreModelo);
    console.log("----------------------------------");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Almacenes -----------------------------------------------------------------------------------------------------------------

// Insertar Almacen
data = {
  nombre: "ALMACEN PRUEBA",
  estadoAlmacen: true,
  ubicacion: "EN ALGUN LUGAR",
  pais: "PERU",
};

fetch(`${url}almacen/insert`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Actualizar Almacen
data = {
  id: 12,
  nombre: "ALMACEN",
  estadoAlmacen: true,
};

fetch(`${url}almacen/update`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Borrar Almacen

data = {
  id: 8,
};

fetch(`${url}almacen/delete`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Obtener todos los Almacenes
fetch(`${url}almacen/getall`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach(({ id, nombre, estadoAlmacen, ubicacion, pais }) => {
      console.log("ID:", id);
      console.log("Nombre:", nombre);
      console.log("Estado:", estadoAlmacen);
      console.log("Ubicación:", ubicacion);
      console.log("Pais:", pais);
      console.log("----------------------------------");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Obtener Almacen por ID
data = {
  id: 4,
};

fetch(`${url}almacen/get?id=${data.id}`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(({ id, nombre, estadoAlmacen, ubicacion, pais }) => {
    console.log("ID:", id);
    console.log("Nombre:", nombre);
    console.log("Estado:", estadoAlmacen);
    console.log("Ubicación:", ubicacion);
    console.log("Pais:", pais);
    console.log("----------------------------------");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Productos -------------------------------------------------------------------------------------------------

// Insertar Producto
data = {
  serie: "SERIE PRUEBA",
  ticket: "TICKET PRUEBA",
  idSubCategoria: 4,
  origenResponsable: "ORIGEN RESPONSABLE PRUEBA",
  idCondicion: 2,
  idMarca: 3,
  idAlmacen: 5,
  idColaborador: 1,
  idSubEstado: 2,
  observaciones: "OBSERVACIONES",
  valor: 9990,
};

fetch(`${url}producto/insert`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Actualizar Producto
data = {
  id: 1023,
  serie: "SERIE PRUEBA ACTUALIZADO",
  ticket: "TICKET PRUEBA ACTUALIZADO",
  idSubCategoria: 5,
  origenResponsable: "ORIGEN RESPONSABLE PRUEBA ACTUALIZADO",
  idCondicion: 1,
  idMarca: 2,
  idAlmacen: 3,
  idColaborador: 1,
  idSubEstado: 2,
  observaciones: "OBSERVACIONES ACTUALIZADO",
  valor: 5555,
};

fetch(`${url}producto/update`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Borrar Producto
data = {
  id: 1008,
};

fetch(`${url}producto/delete`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

// Obtener todos los productos
fetch(`${url}producto/getall`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach(
      ({
        id,
        serie,
        ticket,
        origenResponsable,
        observaciones,
        valor,
        subCategoria,
        condicion,
        marca,
        almacen,
        colabNombre,
        subEstado,
      }) => {
        console.log("ID:", id);
        console.log("Serie:", serie);
        console.log("Ticket:", ticket);
        console.log("Origen Responsable:", origenResponsable);
        console.log("Observaciones:", observaciones);
        console.log("Valor:", valor);
        console.log("Sub Categoría:", subCategoria);
        console.log("Condición:", condicion);
        console.log("Marca:", marca);
        console.log("Almacén:", almacen);
        console.log("Nombre del Colaborador:", colabNombre);
        console.log("Sub Estado:", subEstado);
        console.log("----------------------------------");
      }
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Obtener Producto por ID
const data = {
  id: 1,
};

fetch(`${url}producto/get?id=${data.id}`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(
    ({
      id,
      serie,
      ticket,
      origenResponsable,
      observaciones,
      valor,
      subCategoria,
      condicion,
      marca,
      almacen,
      colabNombre,
      subEstado,
    }) => {
      console.log("ID:", id);
      console.log("Serie:", serie);
      console.log("Ticket:", ticket);
      console.log("Origen Responsable:", origenResponsable);
      console.log("Observaciones:", observaciones);
      console.log("Valor:", valor);
      console.log("Sub Categoría:", subCategoria);
      console.log("Condición:", condicion);
      console.log("Marca:", marca);
      console.log("Almacén:", almacen);
      console.log("Nombre del Colaborador:", colabNombre);
      console.log("Sub Estado:", subEstado);
      console.log("----------------------------------");
    }
  )
  .catch((error) => {
    console.error("Error:", error);
  });

// ProductoHistorialMovimiento -------------------------------------------------------------------------------------------------

// Obtener todos los PHM
fetch(`${url}productohistorialmovimiento/getall`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach(
      ({
        id,
        idProducto,
        NombreCompleto,
        almacenSalida,
        almacenEntrada,
        subEstado,
        fecha,
      }) => {
        console.log("ID:", id);
        console.log("Producto:", idProducto);
        console.log("ID Colaborador:", NombreCompleto);
        console.log("Almacén Salida:", almacenSalida);
        console.log("Almacén Entrada:", almacenEntrada);
        console.log("Sub Estado:", subEstado);
        console.log("Fecha:", fecha);
        console.log("----------------------------------");
      }
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Obtener PHM por ID
data = {
  id: 9,
};

fetch(`${url}productohistorialmovimiento/get?id=${data.id}`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(
    ({
      id,
      idProducto,
      NombreCompleto,
      almacenSalida,
      almacenEntrada,
      subEstado,
      fecha,
    }) => {
      console.log("ID:", id);
      console.log("Producto:", idProducto);
      console.log("ID Colaborador:", NombreCompleto);
      console.log("Almacén Salida:", almacenSalida);
      console.log("Almacén Entrada:", almacenEntrada);
      console.log("Sub Estado:", subEstado);
      console.log("Fecha:", fecha);
      console.log("----------------------------------");
    }
  )
  .catch((error) => {
    console.error("Error:", error);
  });
