import React from "react";
import PropTypes from "prop-types";

const TablaPedido = (props) => {

    const {
        listaPedido,
        deleteRow
    } = props;

    const onDelete = (e) => {
        console.log(e.target.dataset.id);
        deleteRow(e.target.dataset.id)
    }

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

                {listaPedido.map((row) => {
                    console.log(row);
                    return (
                        <tr className="row" key={row.id}>
                            <td className="col-1">
                                <button className="btn btn-light img-circle" onClick={onDelete} data-id={row.id}>
                                    <i className="fas fa-times text-muted" onClick={onDelete} data-id={row.id}></i>
                                </button>
                            </td>
                            <td className="col-6">{row.producto.nombre}</td>
                            <td className="col-2">{row.producto.p_venta}</td>
                            <td className="col-1">{row.cantidad}</td>
                            <td className="col-2">{row.final}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    );
}


// PROPTYPES
TablaPedido.propTypes = {
    listaPedido: PropTypes.array,
    deleteRow: PropTypes.func,
}

export default TablaPedido;