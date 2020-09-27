export const HASH_PASSWORD =
  "$2a$10$vl6cR54sshirq0Bb.AgujO8wFFtg69.ZDxcPO/bL6gNYD3JnNsnI6";

const isDev = process.env.REACT_APP_USE_ENV_CONFIG || false;

export const SERVER_ENDPOINT = isDev
  ? "http://localhost/api"
  : "http://store.test/api";

export const PRODUCTS_ENDPOINT = `${SERVER_ENDPOINT}/products`;
export const PRODUCT_ENDPOINT = `${SERVER_ENDPOINT}/product`;

export const SELLS_ENDPOINT = `${SERVER_ENDPOINT}/sells`;
export const SELL_ENDPOINT = `${SERVER_ENDPOINT}/sell`;
export const SELLS_TODAY_ENDPOINT = `${SERVER_ENDPOINT}/sells/today`;
export const CANCEL_SELL_ENDPOINT = `${SERVER_ENDPOINT}/sell/cancel`;

export const DOLAR_ENDPOINT =
  "https://cors-anywhere.herokuapp.com/https://localbitcoins.com//api/equation/USD_in_DOLARTODAY";
