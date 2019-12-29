import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Productos from './Productos';
import Pedido from './Pedido';


export default class Main extends Component{

    render(){
        return(
          <main className="col-12 col-lg-9 pl-0 pr-0">
						<Header />	
            <Switch>
              <Route exact path="/productos">  
                <Productos />
              </Route>
              <Route exact path="/pedido">
                <Pedido />
              </Route>
            </Switch>
          </main>
        );
    }
}

function Header() {
    return(
			<div className="header-main d-none d-lg-block">
				<div className="pt-2 d-flex justify-content-between align-items-center">
					
						<p className="ml-3">
							<span className="mr-4"><i className="fas fa-dollar-sign fuente-verde"></i> 46.0000 Bsf/USD</span>
							<span className="font-italic"><i className="far fa-calendar-alt"></i> 22/12/2019 - 12:26pm</span>
						</p>
						<div className="perfil-emoji mr-3">
							<img className="img-circle" src="https://via.placeholder.com/35" alt="" />
							<p>Hola, <strong>Admin</strong></p>
							<button className="btn btn-outline-success">Logout</button>
						</div>
					
				</div>
      </div>
    );
}

