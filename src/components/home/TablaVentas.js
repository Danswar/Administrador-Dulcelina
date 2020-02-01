import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Proptype from "prop-types";

import ModalDetalleVenta from "./ModalDetalleVenta";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const TablaVentas = props => {
  const dispatch = useDispatch();
  const { listaVentas, meta, fetchPage } = props;
  const { current_page, last_page } = meta;

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const changeFirst = () => {
    dispatch(fetchPage(1));
  };

  const changeNext = () => {
    if (current_page + 1 <= last_page) {
      const next = current_page + 1;
      dispatch(fetchPage(next));
    }
  };

  const changePrev = () => {
    if (1 <= current_page - 1) {
      const prev = current_page - 1;
      dispatch(fetchPage(prev));
    }
  };

  const changeLast = () => {
    dispatch(fetchPage(last_page));
  };

  const clickRow = e => {
    toggleModal();
  };

  return (
    <div className="mt-3 ml-3 mr-3">
      <div className="d-flex justify-content-between">
        <h4>
          Ultimas ventas <small>Sucursal Dulcelina "La Churuata"</small>
        </h4>
        <div>
          <Pagination size="md" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first onClick={changeFirst} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous onClick={changePrev} />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink>
                {current_page} - {last_page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next onClick={changeNext} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last onClick={changeLast} />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      <table className="table table-hover mt-2">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID venta</th>
            <th scope="col">Importe</th>
            <th scope="col">Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {listaVentas.map(venta => {
            return (
              <tr
                key={venta.id}
                className="hover-pointer hover-font-blue"
                onClick={clickRow}
              >
                <td data-id={venta.id}>{venta.id}</td>
                <td data-id={venta.id}>{venta.total}Bsf</td>
                <td data-id={venta.id}>{venta.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalDetalleVenta isOpen={modal} toggle={toggleModal} />
    </div>
  );
};

TablaVentas.propTypes = {
  listaVentas: Proptype.array,
  meta: Proptype.object,
  fetchPage: Proptype.func
};

export default TablaVentas;
