import React from 'react';
import './InputSelect.scss';

function InputSelect({handleChange, children, ...props}) {
  return (
    <div className="input-select">
      <select 
        className="select-list"
        onChange={handleChange}
        {...props}
      >
        {children}
      </select>
      <img className="select-arrow" src="assets/icon/arrow-down.svg" alt="sort-icon"/>
    </div>
  )
}

export default InputSelect