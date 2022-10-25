import React from "react";

const Pagination = function ({ page, setPage, totalPages }) {
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  let pages = [];
  let n = 1;

  while (n < totalPages + 1) {
    pages.push(n);
    n++;
  }

  return (
    <div className="d-flex justify-content-around p-1">
      <button
        onClick={handlePrev}
        disabled={page <= 1}
        className="btn btn-outline-danger btn-rounded "
        data-mdb-ripple-color="dark"
      >
        Prev.
      </button>
      {pages.map((p) => (
        <button
          className="btn btn-outline-danger btn-rounded"
          key={p}
          onClick={() => {
            setPage(p);
          }}
          disabled={page === p}
        >
          {p}
        </button>
      ))}
      <button
        className="btn btn-outline-danger btn-rounded"
        onClick={handleNext}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
