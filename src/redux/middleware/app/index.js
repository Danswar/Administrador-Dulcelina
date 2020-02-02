import { productosMiddleware } from "./productosMiddleware";
import { ventasMiddleware } from "./ventasMiddleware";
import { dolarMiddleware } from "./dolarMiddleware";

export const appMidleware = [
  productosMiddleware,
  ventasMiddleware,
  dolarMiddleware
];
