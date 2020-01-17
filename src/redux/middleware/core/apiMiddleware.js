import { API_REQUEST, apiSuccess, apiError } from "../../actions/apiActions";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { body, method, url } = action.payload.meta;
    /*body no lo estamos usando pero aqui la data para  update/insert */

    fetch(url, { method }, JSON.stringify(body))
      .then(res => res.json())
      .then(data => dispatch(apiSuccess(data.data, action.payload.meta.entity)))
      .catch(error => dispatch(apiError(error, action.payload.meta.entity)));
  }
};
