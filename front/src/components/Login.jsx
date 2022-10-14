import React from "react";

function Login() {
  return (
    <div className="container">
      <form className="login-form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="indian@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos tu dirección de email con nadie
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked
          />
          <label className="form-check-label" for="exampleCheck1">
            Recordarme
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
