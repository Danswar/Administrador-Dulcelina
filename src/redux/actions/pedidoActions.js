const PEDIDO = "[Pedido]";

export const ADD_ITEM = `${PEDIDO} Add Item`;
export const DELETE_ITEM = `${PEDIDO} Delete Item`;


//Middleware
export const addItem = product => ({
    type: ADD_ITEM,
    payload: {
        data: product
    }
});

export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: {
        data: id
    }
});
