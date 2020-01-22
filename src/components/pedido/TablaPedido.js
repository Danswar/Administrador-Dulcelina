import React from "react";
import PropTypes from "prop-types";

const TablaPedido = (props) => {

    const {
        listaPedido,
        deleteRow
    } = props;

    const onDelete = (e) => {
        deleteRow(e.target.value)
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

                {listaPedido.map((producto) => {
                    return (
                        <tr className="row">
                            <td className="col-1">
                                <button className="btn btn-light img-circle" onClick={onDelete} value={producto.id}>
                                    <i className="fas fa-times text-muted"></i>
                                </button>
                            </td>
                            <td className="col-6">{producto.nombre}</td>
                            <td className="col-2">{producto.p_venta}</td>
                            <td className="col-1">{producto.cantidad}</td>
                            <td className="col-2">{producto.final}</td>
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