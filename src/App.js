import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Main from './components/Main';
import Aside from './components/Aside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          
          {/* NAVBAR PARA VISTA DE CELULARES Y PANTALLAS PEQUEÑAS */}
          <div className="d-block  d-lg-none">
            <AppNavbar />
          </div>

          <div className="container-flush">
            <div className="row">
              <Aside />
              <Main />
            </div>
          </div>
          

        </Router>
      </div>
    );
  }
}

export default App;
