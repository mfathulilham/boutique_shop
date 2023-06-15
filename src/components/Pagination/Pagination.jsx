import React from 'react';
import './Pagination.scss';
import { Link } from 'react-router-dom'

function Pagination({currentPage, paginate, total, productsPerPage, nextPage}) {

  const pageLength = Math.ceil(total / productsPerPage);
  let pageNumber = null;
  if(pageLength) {
    pageNumber = new Array(pageLength)
      .fill(1)
      .map((el, idx) => el + idx);
  }

  return (
    <div className="pagination">
      <Link 
        to="#" 
        className={`pagination__arrow left__arrow ${currentPage === 1 ? 'is-disabled' : ''}`} 
        onClick={(e) => {
          paginate(e, currentPage - 1)
        }}
      >
        <img src="assets/icon/chevrons-left.svg" alt="icon-btn"/>
      </Link>
      {pageNumber?.map((num, i) => ( 
        <div className="pagination__list" key={i}>
          <Link
            to="#"
            onClick={(e) => paginate(e, num) }
            className={`pagination__item ${currentPage === num ? 'active' : ''}`}
            >
            {num}
          </Link>
        </div>
      ))}
      <Link 
        to="#"
        className={`pagination__arrow right__arrow ${nextPage === false ? 'is-disabled' : ''}`}
        onClick={(e) => paginate(e, currentPage + 1) }
      >
        <img src="assets/icon/chevrons-right.svg" alt="icon-btn"/>
      </Link>
    </div>
  )
}

export default Pagination