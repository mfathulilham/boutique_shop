import React from 'react';
import './CardCollection.scss';

function CardCollection({img, title}) {
  return (
    <>
      <img className="collection__i-img" src={img} alt="collection-img"/>
      <h3 className="collection__i-title">{title}</h3>
    </>
  )
}

export default CardCollection