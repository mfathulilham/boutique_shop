import React from 'react';
import './CardProduct.scss';
import { Link } from 'react-router-dom';

function CardProduct({img ,name, className, discount, price, disc_price, material}) {
  
  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <Link to={'/productdetail'} className={`card ${className}`}>
      <div className="card__header">
        <div className="card__main">
          <img className="card__img" src={img} height="100%" width="100%" alt="content-img"/>
        </div>
        { discount &&
          <div className="card__decor">
            <img className="card__subtract" src="assets/icon/subtract.svg" alt="substract-icon"/>
            <span className="card__off">{discount}%<br/>Off</span>
          </div>
        } 
        { material &&
          <span className="card__decor-2">{material}</span>
        }
      </div>
      <div className="card__desc">
        <h3 className="card__d-title">{name}</h3>
        <div className="card__d-desc">
          <p className="card__d-price">Rp. {numberFormat(price)}</p>
          { disc_price &&
            <p className="card__d-discount">Rp. {numberFormat(disc_price)}</p>
          }
        </div>
      </div>
    </Link>
  )
}

export default CardProduct