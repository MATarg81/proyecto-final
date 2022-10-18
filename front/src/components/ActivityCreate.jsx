import React from "react";

export default function activityCreate() {
  return (
    <div>
      <div className="activityCreate">
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Nombre de actividad
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              aria-describedby="name"
            />
            <label for="detail" className="form-label">
              Detalle de la actividad
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="detail"
              aria-describedby="detail"
            />
            <label for="days" className="form-label">
              Days
            </label>
            <input
              type="text"
              className="form-control"
              id="days"
              aria-describedby="days"
            />
          </div>
          <div className="mb-3">
            <label for="times" className="form-label">
              Horarios
            </label>
            <input
              type="number"
              className="form-control mb-3"
              id="times"
            />
            <label for="img" className="form-label">
              Imagen
            </label>
            <input
              type="iamge"
              className="form-control"
              id="img"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

 
