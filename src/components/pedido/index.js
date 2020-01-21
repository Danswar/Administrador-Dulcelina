import React, { Component } from "react";
import BarraEntrada from "./BarraEntrada";

export default class Pedido extends Component {
  render() {
    return (
      <div className="container">
        <div id="ventana-factura" className="card mt-3">
          <h5 className="card-header card-header-importe">
            Gestion de pedidos <small>Sucursal "La churuata"</small>
          </h5>

          <div className="card-body">
            <BarraEntrada />
            <div className="container tabla-factura scroll-on mt-3">
              <table className="table">
                <thead>
                  <tr className="row">
                    <th className="col-1" scope="col"></th>
                    <th className="col-6" scope="col">
                      Nombre
                    </th>
                    <th className="col-2" scope="col">
                      P.Unit
                    </th>
                    <th className="col-1" scope="col">
                      Cant.
                    </th>
                    <th className="col-2" scope="col">
                      Final
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row">
                    <td className="col-1">
                      <button className="btn btn-light img-circle">
                        <i className="fas fa-times text-muted"></i>
                      </button>
                    </td>
                    <td className="col-6">Algun nombre de articulo</td>
                    <td className="col-2">78.000,00</td>
                    <td className="col-1">10</td>
                    <td className="col-2">780.000,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer importe">
            <div className="d-flex flex-row-reverse height-full">
              <p className="align-self-end fuente-ok">Bsf</p>
              <h1 className="align-self-end font-weight-bolder fuente-ok">
                430.600, 00{" "}
              </h1>
              <h4 className="mr-3 fuente-ok">Importe</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
