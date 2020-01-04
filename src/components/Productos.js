import React, { Component, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

export default class Productos extends Component {
  handleModal = obj => {
    console.log(obj.msg);
  };

  render() {
    return (
      <div className="container ">
        <div className="row mr-1 ml-1 mr-md-0 ml-md-0">
          <h5 className="mt-2 ">
            Listado de productos{" "}
            <small className="text-muted font-italic d-none d-md-inline">
              | Sucursal "La Churuata"
            </small>
          </h5>
        </div>

        {/* BARRA DE BUSQUEDA Y BOTON*/}
        <div className="d-flex flex-wrap justify-content-between mt-2 mt-sm-4 ">
          <ModalNew
            classNameButton="btn btn-primary d-none d-sm-block"
            buttonLabel="Agregar nuevo"
            classNameIcon="fas fa-plus-circle pr-2"
            handleModal={this.handleModal}
          />
          <div className="input-group col-md-6 col-12 pr-0 pl-0">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar algo"
              aria-label="Buscar algo"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* BOTON FLOTANTE REDONDO SOLO PARA PANTALLAS PEQUEÑAS*/}
        <ModalNew
          classNameButton="btn-float-circle d-block d-sm-none"
          buttonLabel=""
          classNameIcon="fas fa-plus"
          handleModal={this.handleModal}
        />

        <h1 className="mt-4 pt-4">ZONA EN DESARROLLO</h1>
        <h2>Muestra de datos en forma de tabla o algo asi</h2>

        
        
      </div>
    );
  }
}

/* MODAL PARA INGRESAR NUEVO PRODUCTO */
class ModalNew extends Component {
  constructor(props) {
    super(props);
    
    this.buttonLabel=props.buttonLabel;
    this.classNameButton=props.classNameButton;
    this.classNameIcon =props.classNameIcon;
    
    this.state = {
      show: false,
      producto: {
        id: "",
        codigo: "",
        nombre: "",
        stock: 1,
        stock_min: 0,
        p_costo_bsf: 0,
        p_costo_usd: 0,
        p_venta_bsf: 0,
        p_venta_usd: 0,
        margen: 1,
        margen_min: 0,
        dolar_base: 1,
        dolar_actual: 2
      }
    };
  }

  toggle = () => this.setState({
    show: !this.state.show
  });

  handleChange = (e) =>{
    let newProducto = this.calculadora(e);

    this.setState({
      producto: newProducto
    });
  
  }

  calculadora = e =>{
    let name = e.target.name;
    let value = e.target.value;
    
    let temp = this.state.producto;
    temp[name] = value;
    
    let diff = 0;
    console.log(diff);
    name= value===0 || value==='' ? null : name; 
    switch(name){
      case 'p_costo_bsf':
        temp.p_costo_usd = temp.p_costo_bsf/temp.dolar_base;
        diff = temp.p_venta_usd-temp.p_costo_usd;
        temp.margen = (diff/temp.p_costo_usd)*100;
        break;

      case 'dolar_base':
        temp.p_costo_usd = temp.p_costo_bsf/temp.dolar_base;
        diff = temp.p_venta_usd-temp.p_costo_usd;
        temp.margen = (diff/temp.p_costo_usd)*100;
        break;
      
      case 'p_costo_usd':
        temp.dolar_base = temp.p_costo_bsf/temp.p_costo_usd;
        diff = temp.p_venta_usd-temp.p_costo_usd;
        temp.margen = (diff/temp.p_costo_usd)*100;
        break;
      
      case 'p_venta_bsf':
        temp.p_venta_usd = temp.p_venta_bsf/temp.dolar_actual;
        diff = temp.p_venta_usd-temp.p_costo_usd;
        temp.margen = (diff/temp.p_costo_usd)*100;
        break;
      
      case 'dolar_actual':
        temp.p_venta_usd = temp.p_venta_bsf/temp.dolar_actual;
        diff = temp.p_venta_usd-temp.p_costo_usd;
        temp.margen = (diff/temp.p_costo_usd)*100;
        break;
      
      case 'p_venta_usd':
        temp.p_venta_bsf = temp.p_venta_usd*temp.dolar_actual;
        diff = temp.p_venta_usd-temp.p_costo_usd;
        temp.margen = (diff/temp.p_costo_usd)*100;
        break;
      
      case 'margen':
        temp.p_venta_usd = (temp.margen*temp.p_costo_usd/100) + parseFloat(temp.p_costo_usd);
        temp.p_venta_bsf = temp.p_venta_usd*temp.dolar_actual;
        break;

      default:
        console.log('[calculadora] default');
    }
    return temp;
  }

  render() {
    return (
      <div>
        <button className={this.classNameButton} onClick={this.toggle}>
          <i className={this.classNameIcon}></i>
          {this.buttonLabel}
        </button>
        <Modal isOpen={this.state.show} toggle={this.toggle} className={'className'} size={'lg'}>
          <ModalHeader toggle={this.toggle}>
            <span className="h5">
              <i className="fas fa-boxes pr-3" />
              Agregar nuevo producto
            </span>{" "}
            <small className="text-muted font-italic">
              | Inventario de Productos
            </small>
          </ModalHeader>
          <ModalBody>
            
          <Form className="pr-1 pl-1">
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="codigo">Codigo</Label>
                  <Input
                    value={this.state.producto.codigo}
                    onChange={this.handleChange}
                    type="number"
                    name="codigo"
                    id="codigo"
                  />
                </FormGroup>
              </Col>
              <Col md={9}>
                <FormGroup>
                  <Label for="nombre">Nombre del producto</Label>
                  <Input
                    value={this.state.producto.nombre}
                    onChange={this.handleChange}
                    type="text"
                    name="nombre"
                    id="nombre"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form className="pb-3">
              <Col md={5}>
                <div className="d-flex flex-wrap">
                  <Label for="stock" className="mb-0 pt-1 mr-2">
                    Stock
                  </Label>
                  <Input
                    value={this.state.producto.stock}
                    onChange={this.handleChange}
                    type="number"
                    name="stock"
                    id="stock"
                    className="col-md-6"
                  />
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <div className="d-flex flex-wrap">
                  <Label for="stock_min" className="mb-0 pt-1 mr-2">
                    Stock minimo
                  </Label>
                  <Input
                    value={this.state.producto.stock_min}
                    onChange={this.handleChange}
                    type="number"
                    name="stock_min"
                    id="stock_min"
                    className="col-md-6"
                  />
                </div>
              </Col>
            </Row>

            <Row form className="pb-3 pt-3">
              <Col md={4}>
                <FormGroup>
                  <Label for="p_costo_bsf">P. costo Bsf</Label>
                  <Input
                    value={this.state.producto.p_costo_bsf}
                    onChange={this.handleChange}
                    type="number"
                    name="p_costo_bsf"
                    id="p_costo_bsf"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Dolar base</Label>
                  <InputGroup>
                    <Input
                      value={this.state.producto.dolar_base}
                      onChange={this.handleChange}
                      type="number"
                      name="dolar_base"
                      id="dolar_base"
                    />
                    <InputGroupAddon addonType="append">
                      <Button outline color="success">
                        <i className="fas fa-sync-alt"></i>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="p_costo_usd">P. costo Usd</Label>
                  <Input
                    value={this.state.producto.p_costo_usd}
                    onChange={this.handleChange}
                    type="number"
                    name="p_costo_usd"
                    id="p_costo_usd"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form className="pt-3">
              <Col md={4}>
                <FormGroup>
                  <Label for="p_venta_bsf">P. venta Bsf</Label>
                  <Input
                    onChange={this.handleChange}
                    value={this.state.producto.p_venta_bsf}
                    type="number"
                    name="p_venta_bsf"
                    id="p_venta_bsf"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Dolar actual</Label>
                  <InputGroup>
                    <Input
                      value={this.state.producto.dolar_actual}
                      onChange={this.handleChange}
                      type="number"
                      name="dolar_actual"
                      id="dolar_actual"
                    />
                    <InputGroupAddon addonType="append">
                      <Button outline color="success">
                        <i className="fas fa-sync-alt"></i>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="p_venta_usd">P. venta Usd</Label>
                  <Input
                    onChange={this.handleChange}
                    value={this.state.producto.p_venta_usd}
                    type="number"
                    name="p_venta_usd"
                    id="p_venta_usd"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form className="pb-4">
              <Col md={5}>
                <div className="d-flex flex-wrap">
                  <Label className="mb-0 pt-1">Margen</Label>
                  <InputGroup className="col-md-8">
                    <Input
                      onChange={this.handleChange}
                      value={this.state.producto.margen}
                      type="number"
                      id="margen"
                      name="margen"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <div className="d-flex flex-wrap">
                  <Label className="mb-0 pt-1">Margen min.</Label>
                  <InputGroup className="col-md-8">
                    <Input
                      value={this.state.producto.margen_min}
                      onChange={this.handleChange}
                      type="number"
                      id="margen_min"
                      name="margen_min"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>%</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </Col>
            </Row>

            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Cancelar
              </Button>{" "}
              <Button color="primary" onClick={this.toggle}>
                Listo!
              </Button>
            </ModalFooter>
          </Form>


          </ModalBody>
        </Modal>
      </div>
    );
  }
}
