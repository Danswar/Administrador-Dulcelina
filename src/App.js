import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Main from "./components/Main";
import Aside from "./components/Aside";

import { fetchDolar } from "./redux/actions/dolarActions";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            {/* NAVBAR PARA VISTA DE CELULARES Y PANTALLAS PEQUEÑAS */}
            <div className="d-block  d-lg-none">
              <AppNavbar />
            </div>

            <div className="container-fluid">
              <div className="row">
                <Aside />
                <Main />
              </div>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
