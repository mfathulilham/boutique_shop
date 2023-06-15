import React from 'react';
import { Link } from 'react-router-dom';
import './CardDiscover.scss';

function CardDiscover({img, title, desc, link, to}) {
  return (
    <>
      <div className="discover__img-wrap">
        <img className="discover__img" src={img} height="629px" width="100%" alt="discover-img"/>
      </div>
      <article className="discover__content">
        <h3 className="discover__c-title">{title}</h3>
        <p className="discover__c-desc">{desc}</p>
        <Link className="discover__c-link" to={"/"}>{link}</Link>
      </article>
    </>
  )
}

export default CardDiscover