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
        <div className="input-group">
          <input onChange={onInputChange}
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder="Búsqueda por nombre..."
            aria-label="Buscar"
            value={search} />
          <div className="input-group-append my-1 " >
            <span onClick={onSubmit} className="input-group-text bg-transparent text-primary rounded-pill " >
              <i className="fa fa-search" style={{color: "indigo"}}></i>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

/* 

<form action="">
              <div className="input-group">
                <input type="text" className="form-control py-0" placeholder="Busqueda por nombre" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
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
