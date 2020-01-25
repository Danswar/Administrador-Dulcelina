const PEDIDO = "[Pedido]";

export const ADD_ROW = `${PEDIDO} Add Row`;
export const DELETE_ROW = `${PEDIDO} Delete Row`;


//Middleware
export const addRow = product => ({
    type: ADD_ROW,
    payload: {
        data: product
    }
});

export const deleteRow = id => ({
    type: DELETE_ROW,
    payload: {
        data: id
    }
});
