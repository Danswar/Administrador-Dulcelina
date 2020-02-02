import React from "react";
import PropTypes from "prop-types";

const InfoCard = props => {
  const { classIcon, title, number } = props;

  return (
    <div className="card mb-3 col-md-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="d-flex justify-content-center align-items-center col-md-4">
          <p className="icon-card fuente-ok">
            <i className={classIcon}></i>
          </p>
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h2 className="card-title">{number}</h2>
            <p className="card-text">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  classIcon: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.string
};

export default InfoCard;
