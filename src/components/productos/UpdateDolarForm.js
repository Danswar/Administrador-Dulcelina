import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setDolar } from "../../redux/actions/dolarActions";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const UpdateDolarForm = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const valueDolar = useSelector(state => state.dolar.dolar_actual);
  const [inputValue, setInputValue] = useState(valueDolar);

  useEffect(() => {
    setInputValue(valueDolar);
  }, [valueDolar]);

  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(setDolar(inputValue));
    toggle();
  };

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
          </FormGroup>
          <Button className="btn btn-primary">Actualizar</Button>
        </Form>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UpdateDolarForm;
