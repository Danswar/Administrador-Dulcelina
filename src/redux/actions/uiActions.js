export const SET_LOADER = "[ui] SET_LOADER";

export const setLoader = (state, entity) => ({
  type: SET_LOADER,
  payload: {
    data: state,
    meta: entity
  }
});
