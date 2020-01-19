import { API_REQUEST, apiSuccess, apiError } from "../../actions/apiActions";
import axios from 'axios';

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
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
