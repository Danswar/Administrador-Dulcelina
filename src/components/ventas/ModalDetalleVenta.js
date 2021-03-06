import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { cancelVenta } from "../../redux/actions/ventasActions";

const ModalDetalleVenta = props => {
  const { isOpen, toggle } = props;

  const { singleVenta, pending } = useSelector(state => state.ventas);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  const dispatch = useDispatch();
  const anularFactura = () => {
    if (singleVenta.id) {
      dispatch(cancelVenta(singleVenta.id));
      toggle();
    }
  };
  console.log(singleVenta);
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalHeader toggle={toggle}>Detalle de venta</ModalHeader>
        <ModalBody>
          <table className="table table-striped">
            <tbody>
              {pending && (
                <div className="text-center">
                  {" "}
                  <Spinner color="warning" />
                </div>
              )}
              {!pending &&
                singleVenta.items.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex justify-content-between">
                        <span className="font-italic">
                          {item.product.nombre} -{" "}
                          {item.p_venta
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                          Bsf
                        </span>
                        <span>x{item.cantidad}</span>
                      </div>
                      <p className="text-right mt-1">
                        {(item.p_venta * item.cantidad)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                        Bsf
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="d-flex flex-row-reverse height-full ">
            <p className="align-self-end fuente-ok">Bsf</p>
            <h3 className="align-self-end font-weight-bolder fuente-ok">
              {singleVenta.total &&
                singleVenta.total
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </h3>
          </div>

          <div className="d-flex flex-row-reverse height-full mt-2">
            <p className="align-self-end fuente-azul">Usd</p>
            <h3 className="align-self-end font-weight-bolder fuente-azul">
              {singleVenta.totalUsd &&
                singleVenta.totalUsd
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </h3>
          </div>
          <div className="d-flex flex-row-reverse height-fullmt-2">
            <p className="align-self-end"> BSF / Usd</p>
            <p className="align-self-end">
              {singleVenta.dolarRef &&
                singleVenta.dolarRef
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          {isLoggedIn && (
            <Button outline color="danger" onClick={anularFactura}>
              Anular
            </Button>
          )}
          <Button className="btn btn-primary" onClick={toggle}>
            Listo
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalDetalleVenta.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  venta: PropTypes.object,
  pending: PropTypes.bool,
};

export default ModalDetalleVenta;
