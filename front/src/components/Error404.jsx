import React from "react";

function Error404() {
  return (
    <div className="alert alert-dismissible alert-primary mb-5 mt-5 p-5">
      <hr />
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>Página no encontrada!</strong>{" "}
      <a href="/home" className="alert-link">
        Volver a la página principal
      </a>{" "}
      <hr />
    </div>
  );
}

export default Error404;
