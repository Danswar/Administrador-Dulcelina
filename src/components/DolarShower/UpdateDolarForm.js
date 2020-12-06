import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setDolar, fetchDolar } from "../../redux/actions/dolarActions";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const UpdateDolarForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const { dolar_actual, pending } = useSelector(state => state.dolar);
  const [inputValue, setInputValue] = useState(dolar_actual);

  useEffect(() => {
    setInputValue(dolar_actual);
  }, [dolar_actual]);

  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setDolar(inputValue));
    toggle();
  };

  const onClickFetchDolar = () => dispatch(fetchDolar());

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      direction="left"
      style={{ display: "inline" }}
    >
      <DropdownToggle className="btn btn-light fuente-verde">
        <i className="fas fa-sync"></i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header className="px-4 mx-4">
          <span className="h5">Nuevo valor dolar</span>
        </DropdownItem>
        <Form onSubmit={onSubmit} className="px-3 py-1 text-center">
          <FormGroup>
            {!pending ? (
              <InputGroup>
                <Input
                  type="number"
                  step="any"
                  name="dolar_actual"
                  id="dolar_actual"
                  placeholder="Ingresa valor"
                  className="text-center"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <small>Bsf/Usd</small>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            ) : (
              <div>Cargando...</div>
            )}
          </FormGroup>
          <div>
            <Button type="submit" className="btn btn-primary mr-2">
              Actualizar
            </Button>
            <Button outline color="secondary" onClick={onClickFetchDolar}>
              <i class="fab fa-bitcoin"></i>
            </Button>
          </div>
        </Form>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UpdateDolarForm;
