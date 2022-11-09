import { Link } from "react-router-dom";

function MpError() {
  return (
    <div>
      <h1>Hubo un problema con el pago!</h1>
      <hr />
      <Link to="/carrito">
        <button>Volver al intentarlo</button>
      </Link>
      <hr />
      <Link to="/home">
        <button>Volver al Home</button>
      </Link>
      <hr />
    </div>
  );
}

export default MpError;
