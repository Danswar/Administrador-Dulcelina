import React, { Component } from "react";
import uuid from "react-uuid";
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
    InputGroup,
    InputGroupAddon,
    InputGroupText
  } from "reactstrap";

  
export default class ModalProducto extends Component {
    constructor(props) {
      super(props);
  
      this.modalTitle = props.modalTitle;
      this.buttonLabel = props.buttonLabel;
      this.classNameButton = props.classNameButton;
      this.classNameIcon = props.classNameIcon;
      
      /*si viene un producto por las props lo cargamos en el form */
      /*si no se inicializa todo vacio */
      const {producto = {
        id: "",
        codigo: "",
        nombre: "",
        stock: "",
        stock_min: "",
        p_costo_bsf: "",
        p_costo_usd: "",
        p_venta_bsf: "",
        p_venta_usd: "",
        margen: "",
        margen_min: "",
        dolar_base: "",
        dolar_actual: "" /**TODO: hacer el peo del dolar */
      }} = props; 


      /**el margen y el precio venta se calculan al inicializar*/
      let {p_venta_bsf, p_costo_usd, dolar_actual} = producto;
      if( p_venta_bsf!=="" && p_costo_usd!=="" ){
        producto.p_venta_usd = parseFloat(p_venta_bsf / dolar_actual).toFixed(2);
        let diff = producto.p_venta_usd - p_costo_usd; console.log(diff);
        producto.margen = parseFloat((diff / p_costo_usd) * 100).toFixed(2);     
      }

      this.state = {
        show: false,
        producto: producto
      };
      
    }
  
   
  
    toggle = () =>
      this.setState({
        show: !this.state.show
      });
  
    handleChange = e => {
      let newProducto = this.calculadora(e);
  
      this.setState({
        producto: newProducto
      });
    };
  
    calculadora = e => {
      let name = e.target.name;
      let value = e.target.value;
  
      let temp = this.state.producto;
      temp[name] = value;
  
      let diff = 0;
      name = value === 0 || value === "" ? null : name;
      switch (name) {
        case "p_costo_bsf":
          temp.p_costo_usd = parseFloat(temp.p_costo_bsf / temp.dolar_base).toFixed(2);
          diff = temp.p_venta_usd - temp.p_costo_usd;
          temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
          break;
  
        case "dolar_base":
          temp.p_costo_usd = parseFloat(temp.p_costo_bsf / temp.dolar_base).toFixed(2);
          diff = temp.p_venta_usd - temp.p_costo_usd;
          temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
          break;
  
        case "p_costo_usd":
          temp.dolar_base = parseFloat(temp.p_costo_bsf / temp.p_costo_usd).toFixed(2);
          diff = temp.p_venta_usd - temp.p_costo_usd;
          temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
          break;
  
        case "p_venta_bsf":
          temp.p_venta_usd = parseFloat(temp.p_venta_bsf / temp.dolar_actual).toFixed(2);
          diff = temp.p_venta_usd - temp.p_costo_usd;
          temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
          break;
  
        case "dolar_actual":
          temp.p_venta_usd = parseFloat(temp.p_venta_bsf / temp.dolar_actual).toFixed(2);
          diff = temp.p_venta_usd - temp.p_costo_usd;
          temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
          break;
  
        case "p_venta_usd":
          temp.p_venta_bsf = parseFloat(temp.p_venta_usd * temp.dolar_actual).toFixed(2);
          diff = temp.p_venta_usd - temp.p_costo_usd;
          temp.margen = parseFloat((diff / temp.p_costo_usd) * 100).toFixed(2);
          break;
  
        case "margen":
          temp.p_venta_usd =
            (temp.margen * temp.p_costo_usd) / 100 + parseFloat(temp.p_costo_usd);
          temp.p_venta_bsf = parseFloat(temp.p_venta_usd * temp.dolar_actual).toFixed(2);
          break;
  
        default:
          console.log("[calculadora] default");
      }
      return temp;
    };
  
    handleOnSubmit = e => {
      e.preventDefault();
  
      const data = this.state.producto; /** ESTA ES LA DATA A STOREAR EN LA BD */
      const id = this.state.producto.id==="" ? uuid() : this.state.producto.id; 
      const dataToSend = {
        id: id,
        codigo: data.codigo,
        nombre: data.nombre,
        stock: data.stock,
        stock_min: data.stock_min,
        p_costo_bsf: data.p_costo_bsf,
        p_costo_usd: data.p_costo_usd,
        p_venta_bsf: data.p_venta_bsf,
        margen_min: data.margen_min,
        dolar_base: data.dolar_base,
        dolar_actual:
          data.dolar_actual /* TODO: Remover esto de aqui es solo para probar */
      };
  
      this.props.handleModal(dataToSend);
      this.toggle();
    };
  
    render() {
      return (
        <div>
          <button className={this.classNameButton} onClick={this.toggle}>
            <i className={this.classNameIcon}></i>
            {this.buttonLabel}
          </button>
          <Modal
            isOpen={this.state.show}
            toggle={this.toggle}
            className={"className"}
            size={"lg"}
          >
            <ModalHeader toggle={this.toggle}>
              <span className="h5">
                <i className="fas fa-boxes pr-3" />
                {this.modalTitle}
              </span>{" "}
              <small className="text-muted font-italic d-none d-sm-inline">
                | Inventario de Productos
              </small>
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleOnSubmit} className="pr-1 pl-1">
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
                        required
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
                        step="any"
                        required
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
                          step="any"
                          required
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
                        step="any"
                        required
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
                        step="any"
                        required
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
                          step="any"
                          required
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
                        step="any"
                        required
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
                          step="any"
                          required
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
                          step="any"
                          required
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
                  <Button color="primary" type="submit">
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
  