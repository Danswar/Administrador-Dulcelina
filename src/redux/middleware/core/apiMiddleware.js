import {
  API_REQUEST,
  apiSuccess,
  apiError,
  API
} from "../../actions/apiActions";
import axios from "axios";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  /** TODO: pasar todo a este tipo de action */
  /** TODO: implementar que hacer en caso de error */
  if (action.type === API) {
    const { method, url, success } = action.payload.meta;
    const body = action.payload.data;

    axios({
      url: url,
      method: method,
      data: JSON.stringify(body)
    })
      .then(data => dispatch(success(data.data)))
      .catch(error => {
        console.log(error);
        dispatch(apiError(error, action.payload.meta.entity));
      });
  } else if (action.type.includes(API_REQUEST)) {
    const { method, url } = action.payload.meta;
    const body = action.payload.data;

    axios({
      url: url,
      method: method,
      data: JSON.stringify(body)
    })
      .then(data => dispatch(apiSuccess(data.data, action.payload.meta.entity)))
      .catch(error => dispatch(apiError(error, action.payload.meta.entity)));
  }
};
