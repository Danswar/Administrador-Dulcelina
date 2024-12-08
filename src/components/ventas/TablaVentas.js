import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleVenta } from "../../redux/actions/ventasActions";

import ModalDetalleVenta from "./ModalDetalleVenta";

import PropTypes from "prop-types";

const TablaVentas = ({ listaVentas }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const dispatch = useDispatch();

  function clickRow(e) {
    dispatch(fetchSingleVenta(e.target.dataset.id));
    toggleModal();
  }

  const exportToCSV = () => {
    const headers = ['ID venta', 'Importe (BsF)', 'Tiempo'];
    const csvData = listaVentas.map(venta => [
      venta.id,
      venta.total,
      venta.created_at
    ]);
    
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ventas.csv';
    a.click();
  };

  return (
    <>
      <button className="btn btn-primary mb-2" onClick={exportToCSV}>
        Exportar
      </button>
      <table className="table table-hover mt-2">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID venta</th>
            <th scope="col">Importe</th>
            <th scope="col">Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {listaVentas.map((venta) => {
            return (
              <tr
                key={venta.id}
                className="hover-pointer hover-font-blue"
                onClick={clickRow}
              >
                <td data-id={venta.id}>{venta.id}</td>
                <td data-id={venta.id}>
                  {venta.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  Bsf
                  {venta.anulado ? (
                    <span className="text-muted font-italic"> Anulado</span>
                  ) : null}
                </td>
                <td data-id={venta.id}>{venta.created_at}</td>
              </tr>
            );
          })}
        </tbody>
        <ModalDetalleVenta isOpen={modal} toggle={toggleModal} />
      </table>
    </>
  );
};

TablaVentas.propTypes = {
  listaVentas: PropTypes.array,
};

export default TablaVentas;
