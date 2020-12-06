import React from "react";
import { Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import Productos from "./productos";
import Pedido from "./pedido";
import Home from "./home";
import Ventas from "./ventas";
import DolarShower from "./DolarShower";
import LoginModal from "./login/LoginModal";
import { NoAuth } from "./login/NoAuth";

const Main = () => {
  const { isLoggedIn } = useSelector(state => state.login);

  return (
    <main className="col-12 col-lg-9 pl-0 pr-0 mt-5 mt-sm-0 pt-3 pt-sm-0">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/productos">
          {isLoggedIn ? <Productos /> : <NoAuth />}
        </Route>
        <Route exact path="/pedido">
          <Pedido />
        </Route>
        <Route exact path="/ventas">
          {isLoggedIn ? <Ventas /> : <NoAuth />}
        </Route>
      </Switch>
    </main>
  );
};

export default Main;

function Header() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <div className="header-main d-none d-lg-block">
      <div className="pt-2 d-flex justify-content-between align-items-center">
        <div className="ml-3">
          <DolarShower classes="mr-4" />
          <span className="font-itali d-none">
            <i className="far fa-calendar-alt"></i> 22/12/2019 - 12:26pm
          </span>
        </div>
        <div className="perfil-emoji mr-3">
          {isLoggedIn && (
            <>
              <img
                className="img-circle"
                src="https://via.placeholder.com/35"
                alt=""
              />
              <p>
                Hola, <strong>Admin</strong>
              </p>
            </>
          )}
          <LoginModal />
        </div>
      </div>
    </div>
  );
}
