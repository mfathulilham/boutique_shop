import React from 'react';
import './RadioColor.scss';

function RadioColor({color, ...props}) {
  return (
    <label className="c-content-color">
      <input 
        type="radio"
        className="radio"
        name="radio"
        {...props}
      />
      <span className={`checkmark-radio ${color}`}></span>
    </label>
  )
}

export default RadioColor