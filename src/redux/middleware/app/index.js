import { productosMiddleware } from "./productosMiddleware";
import { ventasMiddleware } from "./ventasMiddleware";
import { dolarMiddleware } from "./dolarMiddleware";
import { loginMiddleware } from "./loginMiddleware";

export const appMidleware = [
  loginMiddleware,
  productosMiddleware,
  ventasMiddleware,
  dolarMiddleware,
];
