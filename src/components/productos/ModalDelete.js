import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productosActions";

import PropTypes from "prop-types";

const ModalDelete = props => {
  const { classNameButton, classNameIcon, buttonLabel, producto } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const borrarItem = () => {
    dispatch(deleteProduct(producto));
    toggle();
  };

  return (
    <div>
      <button className={classNameButton} onClick={toggle}>
        <i className={classNameIcon}></i>
        {buttonLabel}
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h5 className="text-center mb-4">Seguro que deseas eliminar?</h5>
          <h2 className="text-center">
            <strong>{producto.nombre}</strong>
          </h2>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={toggle}>
            Cancelar
          </Button>
          <Button color="danger" onClick={borrarItem}>
            Si, seguro
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalDelete.propTypes = {
  classNameButton: PropTypes.string,
  classNameIcon: PropTypes.string,
  buttonLabel: PropTypes.string,
  producto: PropTypes.object,
};

export default ModalDelete;
