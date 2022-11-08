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
              <a
                onClick={handlePrev}
                disabled={page <= 1}
                className="page-link text-white "
                data-mdb-ripple-color="dark"
                aria-label="Next"
                style={{ backgroundColor: "indigo" }}
              >
                «
              </a>
            </li>
            {pages.map((p, index) => (
              <li key={index} className="page-item border-0">
                <a
                  className="page-link text-white"
                  onClick={() => {
                    setPage(p);
                  }}
                  disabled={page === p}
                  style={{ backgroundColor: "indigo" }}
                >
                  {" "}
                  {p}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link text-white"
                aria-label="Next"
                onClick={handleNext}
                disabled={page >= totalPages}
                style={{ backgroundColor: "indigo" }}
              >
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
