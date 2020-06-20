import React from "react";
import "./styles.css";

export const NoAuth = () => {
  return (
    <div className="container text-center container-no-auth">
      <div>
        <i className="fas fa-exclamation-triangle text-muted"></i>
        <h1 className="mt-4 font-weight-bold text-muted">
          Necesitas permisos de administrador
        </h1>
      </div>
    </div>
  );
};
