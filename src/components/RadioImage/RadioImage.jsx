import React from 'react'
import './RadioImage.scss';

function RadioImage({img, ...props}) {
  return (
    <label className="radio__label">
      <input 
        type="radio"
        className="radio"
        name="radio"
        {...props}
      />
      <span className="radio__ring"></span>
      <img 
        className="radio__img"
        src={img ? img : ''}
        alt='name'/>
    </label>
  )
}

export default RadioImage