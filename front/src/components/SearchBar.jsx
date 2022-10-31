import { useState } from "react";
import { searchProducts } from "../redux/actionsCreator/productsActions";
import { useDispatch } from "react-redux";

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
          //   style={{
          //     backgroundColor: "#FFFCF9",
          //     color: "#352D39",
          //   }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
