import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const UpdateDolarForm = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="left" style={{display:'inline'}} >
      <DropdownToggle className="btn btn-light fuente-verde">
        <i className="fas fa-sync"></i>
      </DropdownToggle>
      <DropdownMenu>
        <Form className="p-4">
          <FormGroup>
            <Label for="dolar_actual">Nuevo valor dolar</Label>
            <Input
              type="number"
              step="any"
              name="dolar_actual"
              id="dolar_actual"
              placeholder="Ingresa valor"
            />
          </FormGroup>
          <Button className="btn btn-primary">Actualizar</Button>
        </Form>
      </DropdownMenu>
    </Dropdown>
		
  );
};



export default UpdateDolarForm;
