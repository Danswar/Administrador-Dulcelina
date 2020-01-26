import { ADD_ROW, DELETE_ROW } from "../actions/pedidoActions";

const initialState = {
    listaPedido: []
};

export const pedidoReducer = (state = initialState, action) => {
    switch (action.type) {
        //ACTIONS TO THE REDUCER GOES HERE
        case ADD_ROW:
            return {
                ...state,
                listaPedido: [action.payload.data, ...state.listaPedido]
            }

        case DELETE_ROW:
            const id = action.payload.data;
            return {
                ...state,
                listaPedido: state.listaPedido.filter(row => row.id !== id)
            }

        default:
            return state;
    }
}