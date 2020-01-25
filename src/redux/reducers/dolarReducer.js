import { UPDATE_DOLAR } from '../actions/types';


const initialState = {
    dolar_actual: localStorage.getItem("dolar") ? localStorage.getItem("dolar") : 1,
    otrostate: 'no debe cambiar'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_DOLAR:
            localStorage.setItem("dolar", action.payload);
            return {
                ...state,
                dolar_actual: action.payload
            };
        default:
            return state;
    }
}