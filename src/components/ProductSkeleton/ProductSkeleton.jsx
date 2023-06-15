import React from 'react';
import './ProductSkeleton.scss';

function ProductSkeleton() {
  return (
    <>
      <div className='skeleton__product image'></div>
      <div className='skeleton__product text-100'></div>
      <div className='skeleton__p-list'>
        <div className='skeleton__product text-40'></div>
        <div className='skeleton__product text-40'></div>
      </div>
    </>
  )
}

export default ProductSkeleton