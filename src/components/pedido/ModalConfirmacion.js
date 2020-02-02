import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import PropTypes from "prop-types";

const ModalConfirmacion = props => {
  const { total, handleAccept } = props;

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (total === 0) {
      setModal(false);
    }
  }, [total]);

  const toggle = () => {
    if (total !== 0) {
      setModal(!modal);
    }
  };

  return (
    <div>
      <button className="btn btn-outline-success ml-sm-5 ml-2" onClick={toggle}>
        <i className="fas fa-cart-plus fuente-ok"></i>
        <h6>Procesar</h6>
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Procesar pedido</ModalHeader>
        <ModalBody>
          <h5 className="text-center">Monto total a cobrar:</h5>
          <h1 className="text-center"> {total} </h1>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={toggle}>
            Cancelar
          </Button>
          <Button className="btn btn-primary" onClick={handleAccept}>
            Si, todo ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalConfirmacion.propTypes = {
  total: PropTypes.number,
  handleAccept: PropTypes.func
};

export default ModalConfirmacion;
