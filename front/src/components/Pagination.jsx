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
    <div>
      <div className="col-12 pb-1">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mb-3 ">
            <li className="page-item">
              <button
                onClick={handlePrev}
                
                disabled={page <= 1}
                className="page-link text-white pe-auto"
                data-mdb-ripple-color="dark"
                aria-label="Next"
                style={{ backgroundColor: "indigo" }}
              >
                «
              </button>
            </li>
            {pages.map((p, index) => (
              <li key={index} className="page-item border-0">
                <button
                  className="page-link text-white pe-auto"
                  onClick={() => {
                    setPage(p);
                  }}
                  
                  disabled={page === p}
                  style={{ backgroundColor: "indigo" }}
                >
                  {" "}
                  {p}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link text-white pe-auto"
                aria-label="Next"
                onClick={handleNext}
                disabled={page >= totalPages}
                
                style={{ backgroundColor: "indigo" }}
              >
                <span aria-hidden="true">»</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
