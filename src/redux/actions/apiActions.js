export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export const INSERT = "INSERT";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export const apiRequest = (body, method, url, entity) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: {
    data: body,
    meta: { method, url, entity }
  }
});

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: {
    data: response,
    meta: { entity }
  }
});

export const apiError = (response, entity) => ({
  type: `${entity} ${API_ERROR}`,
  payload: {
    data: response /* TODO: ver que es este objeto response*/,
    meta: { entity }
  }
});
