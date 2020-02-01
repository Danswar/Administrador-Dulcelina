import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import PropTypes from "prop-types";

const ModalDetalleVenta = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalHeader toggle={toggle}>Detalle de compra</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
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
  toggle: PropTypes.func
};

export default ModalDetalleVenta;
