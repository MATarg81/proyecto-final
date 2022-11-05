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

  return (<div>






    <div class="col-12 pb-1">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center mb-3">
          <li class="page-item disabled">
            <a class="page-link" aria-label="Previous" onClick={handlePrev}
              disabled={page <= 1}>
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          {pages.map((p) => (
            <li class="page-item active"><a class="page-link" key={p}
              onClick={() => {
                setPage(p);
              }} disabled={page === p}> {p}</a></li>

          ))}
          <li class="page-item" >
            <a class="page-link" aria-label="Next" onClick={handleNext}
              disabled={page >= totalPages} style={{backgroundColor: "indigo"}}>
              <span aria-hidden="true">»</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
  );
};

export default Pagination;


