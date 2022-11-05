import { useState } from "react";
import { searchProducts } from "../redux/actionsCreator/productsActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"

export default function Searchbar({ setPage }) {
  const [search, setSearch] = useState("");

  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    setPage(1);
    dispatch(searchProducts(search));
    setSearch("");
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="d-flex " role="search" action="">
        <div class="input-group">
          <input onChange={onInputChange}
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder="Búsqueda por nombre..."
            aria-label="Buscar"
            value={search} />
          <div class="input-group-append my-1 " >
            <span onClick={onSubmit} class="input-group-text bg-transparent text-primary rounded-pill " >
              <i class="fa fa-search" style={{color: "indigo"}}></i>
            </span>
          </div>
          <button className="btn border ms-2 rounded-pill text-white" style={{backgroundColor: "indigo"}}>
              <Link className="nav-link" to="/crearProducto">
                Crear Producto
              </Link>
            </button>
        </div>
      </form>
    </div>
  );
}

/* 

<form action="">
              <div class="input-group">
                <input type="text" class="form-control py-0" placeholder="Busqueda por nombre" />
                <div class="input-group-append">
                  <span class="input-group-text bg-transparent text-primary">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>

<form onSubmit={onSubmit} className="d-flex" role="search">
        <input
          onChange={onInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Búsqueda por nombre..."
          aria-label="Buscar"
          value={search}
        />
        <button
          className="btn btn-outline-dark ms-2"
          type="submit"
        >
          Buscar
        </button>
      </form>















*/
