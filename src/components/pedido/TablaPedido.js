import React from "react";
import PropTypes from "prop-types";

const TablaPedido = props => {
  const { listaPedido, deleteRow } = props;

  const onDelete = e => {
    e.stopPropagation();
    console.log(e.target.dataset.id);
    deleteRow(e.target.dataset.id);
  };

  return (
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
        {/* <tr className="d-block d-sm-none p-2" onClick={() => alert("hola")}>
          <i className="h5 text-muted text-center ">
            <i className="fas fa-plus img-circle border p-2"></i>
          </i>
          <i className="h5 text-muted text-center">Añadir item</i>
        </tr> */}
        {listaPedido.map(row => {
          console.log(row);
          return (
            <tr className="row" key={row.id}>
              <td className="col-sm-1">
                <button
                  className="btn btn-light img-circle"
                  onClick={onDelete}
                  data-id={row.id}
                >
                  <i
                    className="fas fa-times text-muted"
                    onClick={onDelete}
                    data-id={row.id}
                  ></i>
                </button>
              </td>
              <td className="col-sm-6">{row.producto.nombre}</td>
              <td className="col-sm-2">
                <i className="text-muted font-italic d-inline d-sm-none">
                  P. Unit.:{" "}
                </i>
                {row.producto.p_venta}
              </td>
              <td className="col-sm-1">
                <i className="text-muted font-italic d-inline d-sm-none">
                  Cant:{" "}
                </i>
                {row.cantidad}
              </td>
              <td className="col-sm-2">
                <i className="text-muted font-italic d-inline d-sm-none">
                  Final:{" "}
                </i>
                {row.final} Bsf
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// PROPTYPES
TablaPedido.propTypes = {
  listaPedido: PropTypes.array,
  deleteRow: PropTypes.func
};

export default TablaPedido;
