// Agregar item al carro

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Eliminar item del carro

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
