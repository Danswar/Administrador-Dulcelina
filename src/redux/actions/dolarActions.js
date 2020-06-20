export const SET_DOLAR = "[Dolar] Set dolar";
export const FETCH_DOLAR = "[Dolar] Fetch dolar";
export const SET_PENDING = "[Dolar] Set pending";

export const setDolar = (newValue) => {
  return {
    type: SET_DOLAR,
    payload: newValue,
  };
};

export const fetchDolar = () => {
  return {
    type: FETCH_DOLAR,
  };
};

export const unwrapAndSetDolar = (data) => {
  return {
    type: SET_DOLAR,
    payload: data.data,
  };
};

export const setPending = (isPending) => {
  return {
    type: SET_PENDING,
    payload: !!!isPending,
  };
};
