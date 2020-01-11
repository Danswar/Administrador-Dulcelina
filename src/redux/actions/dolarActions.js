import {UPDATE_DOLAR} from './types';

export const updateDolar = (newValue) =>{
    return({
        type: UPDATE_DOLAR,
        payload: newValue
    });
}