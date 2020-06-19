export const LOGIN = "[Login] Login";
export const LOGIN_INTENT = "[Login] Login intent";
export const LOGOUT = "[Login] Logout";
export const LOGIN_PENDING = "[Login] Login pendig";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const loginIntent = (password) => {
  return {
    type: LOGIN_INTENT,
    payload: password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginPending = (isPending) => {
  return {
    type: LOGIN_PENDING,
    payload: isPending,
  };
};
