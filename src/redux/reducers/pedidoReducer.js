import { ADD_ITEM, DELETE_ITEM } from "../actions/pedidoActions";

const initialState = {
    listaPedido: []
};

export const pedidoReducer = (state = initialState, action) => {
    switch (action.type) {
        //ACTIONS TO THE REDUCER GOES HERE
        case ADD_ITEM: /**TODO: Interceptar en el middleware */
            return {
                ...state,
                listaPedido: [action.payload.data, ...state.listaPedido]
            }

        case DELETE_ITEM: /**TODO: Interceptar en el middleware */
            const id = action.payload.data;
            return {
                ...state,
                listaPedido: state.listaPedido.filter((item) => item.producto.id !== id)
            }

        default:
            return state;
    }
}