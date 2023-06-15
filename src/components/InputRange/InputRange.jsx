import React from 'react';
import './InputRange.scss';

function InputRange({...props}) {
  return (
    <div className="content-range">
      <input 
        type="range"
        className="slider"
        {...props}
      />
    </div>
  )
}

export default InputRange