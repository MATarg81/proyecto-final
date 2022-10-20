import React from "react";
import { useState } from "react";

const Pagination = function ({ page, setPage, totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    setPage(page + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    setPage(page - 1);
  };

  let pages = [];
  let n = 1;

  while (n < totalPages + 1) {
    pages.push(n);
    n++;
  }

  return (
    <div>
      <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid"  style={{
        backgroundColor: "#6D435A",
        padding: "1rem"
      }}>
        <button onClick={handlePrev} 
                disabled={currentPage <= 1} 
                class="btn btn-outline-success" 
                type="submit" 
                style={{
                    backgroundColor: "#FFFCF9",
                    color: "#352D39"
                }}>
        Prev.
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => {
            setCurrentPage(p);
            setPage(p);
          }}
          disabled={currentPage === p}
          class="btn btn-outline-success" type="submit" style={{
            backgroundColor: "#FFFCF9",
            color: "#352D39"
}}
        >
          {p}
        </button>
      ))}
      <button onClick={handleNext} 
              disabled={currentPage >= totalPages}
              class="btn btn-outline-success" type="submit" style={{
                backgroundColor: "#FFFCF9",
                color: "#352D39"
}}>
        Next
      </button>
        </div>
        </nav>
      </div>
      
    </div>
  );
};

export default Pagination;

//