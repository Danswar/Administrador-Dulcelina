import React from "react";
import { useDispatch } from "react-redux";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import Proptype from "prop-types";

const TablaVentas = props => {
  const dispatch = useDispatch();
  const { listaVentas, meta, fetchPage } = props;
  const { current_page, last_page } = meta;

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
      <table className="table mt-2">
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
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.total}Bsf</td>
                <td>{venta.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TablaVentas.propTypes = {
  listaVentas: Proptype.array,
  meta: Proptype.object,
  fetchPage: Proptype.func
};

export default TablaVentas;
