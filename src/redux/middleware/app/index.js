import { productosMiddleware } from "./productosMiddleware";
import { ventasMiddleware } from "./ventasMiddleware";

export const appMidleware = [productosMiddleware, ventasMiddleware];
