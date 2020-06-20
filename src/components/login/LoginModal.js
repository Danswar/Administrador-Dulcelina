import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { loginIntent, logout } from "../../redux/actions/loginActions";

const LoginModal = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const logAction = () => (isLoggedIn ? dispatch(logout()) : toggle());

  const [password, setPassword] = useState("");
  const handleOnChange = ({ target: { value } }) => setPassword(value);

  const tryLogin = () => dispatch(loginIntent(password));

  useEffect(() => {
    if (isLoggedIn && modal) setModal(false);
  }, [isLoggedIn]);

  useEffect(() => {
    if (!modal) setPassword("");
  }, [modal]);

  return (
    <div>
      <button className="btn btn-outline-success" onClick={logAction}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h5 className="text-center mb-4">Ingresa tu contraseña</h5>
          <div className="text-center p-4">
            <Input type="password" onChange={handleOnChange} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={toggle}>
            Cancelar
          </Button>
          <Button color="btn btn-success" onClick={tryLogin}>
            Entrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;
