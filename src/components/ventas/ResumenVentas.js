import React from "react";
import { useDispatch } from "react-redux";
import Proptype from "prop-types";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import TablaVentas from "./TablaVentas";

const ResumenVentas = props => {
  const dispatch = useDispatch();
  const { listaVentas, meta, fetchPage } = props;
  const { current_page, last_page } = meta;

  function changeFirst() {
    dispatch(fetchPage(1));
  }

  function changeNext() {
    if (current_page + 1 <= last_page) {
      const next = current_page + 1;
      dispatch(fetchPage(next));
    }
  }

  function changePrev() {
    if (1 <= current_page - 1) {
      const prev = current_page - 1;
      dispatch(fetchPage(prev));
    }
  }

  function changeLast() {
    dispatch(fetchPage(last_page));
  }

  return (
    <div className="mt-3 ml-3 mr-3">
      <div className="d-flex justify-content-between">
        <h4>
          Historial de ventas <small>Sucursal Dulcelina "La Churuata"</small>
        </h4>
        <div>
          <Pagination size="md" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first onClick={() => changeFirst()} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous onClick={() => changePrev()} />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink>
                {current_page} - {last_page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next onClick={() => changeNext()} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last onClick={() => changeLast()} />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      <TablaVentas listaVentas={listaVentas} />
    </div>
  );
};

ResumenVentas.propTypes = {
  listaVentas: Proptype.array,
  meta: Proptype.object,
  fetchPage: Proptype.func
};

export default ResumenVentas;
