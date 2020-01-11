import { UPDATE_DOLAR } from '../actions/types';

const initialState = {
    dolar_actual : 1,
    otrostate: 'no debe cambiar'
}

export default function( state=initialState , action ) {
    switch(action.type){
        case UPDATE_DOLAR:
            return {
                ...state,
                dolar_actual: action.payload
            };
        default:
            return state;
    }
}