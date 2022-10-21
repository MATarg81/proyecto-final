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

    <div class="d-flex justify-content-around p-1" style={{background:"linear-gradient(0deg, rgba(53,45,57,1) 0%, rgba(255,255,255,1) 88%)"}}>
      <button onClick={handlePrev} disabled={currentPage <= 1} class="btn btn-outline-danger btn-rounded " data-mdb-ripple-color="dark" >

        Prev.
      </button >
      {pages.map((p) => (

        <button class="btn btn-outline-danger btn-rounded" key={p} onClick={() => { setCurrentPage(p); setPage(p);}} disabled={currentPage === p}>
          {p}
        </button>
         
      ))}
      <button class="btn btn-outline-danger btn-rounded"  onClick={handleNext} disabled={currentPage >= totalPages} >

        Next
      </button>
       
     
     
      
    </div>
  );
};

export default Pagination;

//