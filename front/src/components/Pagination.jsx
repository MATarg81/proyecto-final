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
      <button onClick={handlePrev} disabled={currentPage <= 1}>
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
        >
          {p}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

//