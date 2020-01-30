import React from "react";

const InfoCard = props => {
  return (
    <div className="card mb-3 col-md-3" style={{maxWidth: '540px'}}>
      <div className="row no-gutters">
        <div className="d-flex justify-content-center align-items-center col-md-4">
          <p className="icon-card fuente-ok">
            <i className="fas fa-cart-plus"></i>
          </p>
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h2 className="card-title">3.000</h2>
            <p className="card-text">Ventas en el ultimo mes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
