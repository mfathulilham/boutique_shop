import React from 'react'

function PaginationNew({currentPage, totalProducts, pageSize}) {
  const totalPage = Math.ceil(totalProducts / pageSize)
  let pageNumber = null;
  if(totalPage) {
    pageNumber = new Array(totalPage)
      .fill(1)
      .map((el, idx) => el + idx);
  }

  return (
    <ul className='learning__pagination'>
      <li>{'<'}</li>
      { pageNumber?.map((pageNum) => (
        <li key={pageNum} >
          <a className={`${currentPage === pageNum ? 'is-active' : ''}`}>
            {pageNum}
          </a>
        </li>
      ))}
      <li>{'>'}</li>
    </ul>
  )
}

export default PaginationNew