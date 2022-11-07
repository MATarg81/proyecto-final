import React from "react";

function Error404() {
  return (
    <div class="alert alert-dismissible alert-primary mb-5 mt-5 p-5">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <strong>Página no encontrada!</strong>{" "}
      <a href="/home" class="alert-link">
        Volver a la página principal
      </a>{" "}
    </div>
  );
}

export default Error404;
